import { Client, isFullPage } from "@notionhq/client";
import { BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { compareAsc, compareDesc } from "date-fns";
import { getPlaiceholder } from "plaiceholder";
import { slugifyIt } from "./utils/slugify";

const notion = new Client({
  auth: process.env.NOTION_API_TOKEN,
});

export type Blog = {
  id: string;
  createdAt: string;
  lastEditedAt: string;
  coverImage: string | null;
  tags: string[];
  category: string;
  title: string;
  description: string;
  slug: string;
  isPublished: boolean;
  publishedAt: string;
  inProgress: boolean;
};

const noop = async (block: BlockObjectResponse) => block;

type BlockType = BlockObjectResponse["type"];
const BlockTypeTransformLookup: Record<BlockType, (block: BlockObjectResponse) => Promise<BlockObjectResponse>> = {
  file: noop,
  paragraph: noop,
  heading_1: noop,
  heading_2: noop,
  heading_3: noop,
  bulleted_list_item: noop,
  numbered_list_item: noop,
  quote: noop,
  to_do: noop,
  toggle: noop,
  template: noop,
  synced_block: noop,
  child_page: noop,
  child_database: noop,
  equation: noop,
  code: noop,
  callout: noop,
  divider: noop,
  breadcrumb: noop,
  table_of_contents: noop,
  column_list: noop,
  column: noop,
  link_to_page: noop,
  table: noop,
  table_row: noop,
  embed: noop,
  bookmark: noop,
  image: async (block: any) => {
    const contents = block[block.type];
    const {
      base64,
      img: { height, width },
    } = await getPlaiceholder(contents[contents.type].url, { size: 64 });
    block.image["size"] = { height, width };
    block.image["placeholder"] = base64;

    return block;
  },
  video: noop,
  pdf: noop,
  audio: noop,
  link_preview: noop,
  unsupported: noop,
};

const CompareFunctionLookup = {
  asc: compareAsc,
  desc: compareDesc,
};

class BlogApi {
  constructor(private readonly notion: Client, private readonly databaseId: string) {}

  async getPosts(sortOrder: "asc" | "desc" = "desc", limit?: number) {
    const posts = await this.getDatabaseContent(this.databaseId);

    return posts
      .sort((a, b) => {
        return CompareFunctionLookup[sortOrder](new Date(a.publishedAt), new Date(b.publishedAt));
      })
      .slice(0, limit);
  }

  async getAllCategories() {
    const posts = await this.getDatabaseContent(this.databaseId);
    return posts.map((post) => post.category).filter((category, index, self) => self.indexOf(category) === index);
  }

  async getCategoryPosts(category: string, sortOrder: "asc" | "desc" = "desc", limit?: number) {
    const posts = await this.getDatabaseContent(this.databaseId);

    return posts
      .filter((post) => slugifyIt(post.category) == slugifyIt(category))
      .sort((a, b) => {
        return CompareFunctionLookup[sortOrder](new Date(a.publishedAt), new Date(b.publishedAt));
      })
      .slice(0, limit);
  }

  async getPost(id: string) {
    return this.getPageContent(id);
  }

  private getDatabaseContent = async (databaseId: string): Promise<Blog[]> => {
    const db = await this.notion.databases.query({
      database_id: databaseId,
      filter: {
        or: [
          {
            property: "Status",
            select: {
              equals: "Published",
            },
          },
          {
            property: "Status",
            select: {
              equals: "Draft",
            },
          },
        ],
      },
      sorts: [
        {
          property: "Created",
          direction: "descending",
        },
      ],
    });

    while (db.has_more && db.next_cursor) {
      const { results, has_more, next_cursor } = await this.notion.databases.query({
        database_id: databaseId,
        start_cursor: db.next_cursor,
      });
      db.results = [...db.results, ...results];
      db.has_more = has_more;
      db.next_cursor = next_cursor;
    }

    return db.results
      .map((page) => {
        if (!isFullPage(page)) {
          throw new Error("Notion page is not a full page");
        }

        return {
          id: page.id,
          createdAt: page.created_time,
          lastEditedAt: page.last_edited_time,
          coverImage: page.cover?.type === "external" ? page.cover.external.url : "https://picsum.photos/640/360",
          tags: "multi_select" in page.properties.Tags ? page.properties.Tags.multi_select.map((tag) => tag.name) : [],
          category: "select" in page.properties.Category ? page.properties.Category.select.name : "Uncategorized",
          title: "title" in page.properties.Title ? page.properties.Title.title[0].plain_text : "",
          description: "rich_text" in page.properties.Description ? this.plainText(page.properties.Description.rich_text) : "",
          slug: "rich_text" in page.properties.Slug ? page.properties.Slug.rich_text[0].plain_text : "",
          isPublished: "checkbox" in page.properties.Published ? page.properties.Published.checkbox : false,
          publishedAt: "date" in page.properties.Date ? page.properties.Date.date!.start : "",
          inProgress: "checkbox" in page.properties["In Progress"] ? page.properties["In Progress"].checkbox : false,
        };
      })
      .filter((post) => post.isPublished);
  };

  private getPageContent = async (pageId: string) => {
    const blocks = await this.getBlocks(pageId);

    const blocksChildren = await Promise.all(
      blocks.map(async (block) => {
        const { id } = block;
        const contents = block[block.type as keyof typeof block] as any;
        if (!["unsupported", "child_page"].includes(block.type) && block.has_children) {
          contents.children = await this.getBlocks(id);
        }

        return block;
      }),
    );

    return Promise.all(
      blocksChildren.map(async (block) => {
        return BlockTypeTransformLookup[block.type as BlockType](block);
      }),
    ).then((blocks) => {
      return blocks.reduce((acc: any, curr) => {
        if (curr.type === "bulleted_list_item") {
          if (acc[acc.length - 1]?.type === "bulleted_list") {
            acc[acc.length - 1][acc[acc.length - 1].type].children?.push(curr);
          } else {
            acc.push({
              type: "bulleted_list",
              bulleted_list: { children: [curr] },
            });
          }
        } else if (curr.type === "numbered_list_item") {
          if (acc[acc.length - 1]?.type === "numbered_list") {
            acc[acc.length - 1][acc[acc.length - 1].type].children?.push(curr);
          } else {
            acc.push({
              type: "numbered_list",
              numbered_list: { children: [curr] },
            });
          }
        } else {
          acc.push(curr);
        }
        return acc;
      }, []);
    });
  };

  private getBlocks = async (blockId: string) => {
    const list = await this.notion.blocks.children.list({
      block_id: blockId,
    });

    while (list.has_more && list.next_cursor) {
      const { results, has_more, next_cursor } = await this.notion.blocks.children.list({
        block_id: blockId,
        start_cursor: list.next_cursor,
      });
      list.results = list.results.concat(results);
      list.has_more = has_more;
      list.next_cursor = next_cursor;
    }

    return list.results as BlockObjectResponse[];
  };

  private plainText = (richText: readonly { plain_text: string }[]) => {
    return richText.map((text) => text.plain_text).join("");
  };
}

export const blogApi = new BlogApi(notion, process.env.NOTION_BLOG_DATABASE_ID!);
