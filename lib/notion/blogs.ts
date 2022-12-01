import { Client, LogLevel } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";
import { BlogData, Tags } from "@localTypes/blog";
import { getBundledMDX } from "@lib/mdx";

let client: Client;

// Initializing a client
const notionClient = () => {
  if (!client) {
    client = new Client({
      auth: process.env.NOTION_API_TOKEN,
      logLevel:
      process.env.NODE_ENV === "development"
        ? LogLevel.DEBUG
        : LogLevel.ERROR,
    });
  }
  return client;
};

const notion = notionClient();
const n2m = new NotionToMarkdown({ notionClient: notion });

export async function getAllSortedBlogsData(limit?: number) {
  const { results } = await notion.databases.query({
    database_id: process.env.NOTION_BLOG_DATABASE_ID ?? "",
    filter: {
      and: [
        {
          property: "Slug",
          rich_text: {
            is_not_empty: true,
          },
        },
        { 
          or: [
            {
              property: "Status",
              select: {
                equals: "✅ Published",
              },
            },
            {
              property: "Status",
              select: {
                equals: '✏️  Draft',
              },
            },
          ],
        },
      ],
    },
    sorts: [
      {
        property: "Posted",
        direction: "descending",
      },
    ],
    page_size: limit,
  });

  return results;
}

export const getPublishedBlogPosts = async (limit?: number) => {
  const { results } = await notion.databases.query({
    database_id: process.env.NOTION_BLOG_DATABASE_ID ?? "",
    filter: {
      and: [
        {
          property: 'Published',
          checkbox: {
            equals: true
          },
        },
        {
          property: "Status",
          select: {
            equals: "✅ Published",
          }
        },
        {
          property: "Slug",
          rich_text: {
            is_not_empty: true,
          },
        }
      ],
    },
    sorts: [
      {
        property: 'Posted',
        direction: 'descending'
      }
    ],
    page_size: limit,
  });

  return results;
}

export async function getSortedBlogsData(limit?: number) {
  const { results } = await notion.databases.query({
    database_id: process.env.NOTION_BLOG_DATABASE_ID ?? "",
    filter: {
      and: [
        {
          property: "Slug",
          rich_text: {
            is_not_empty: true,
          },
        },
        { 
          or: [
            {
              property: "Status",
              select: {
                equals: "✅ Published",
              },
            },
            {
              property: "Status",
              select: {
                equals: '✏️  Draft',
              },
            },
          ],
        },
      ],
    },
    sorts: [
      {
        property: "Posted",
        direction: "descending",
      },
    ],
    page_size: limit,
  });

  return ( 
    await Promise.all(
      results.map(async (post) => {
        if ("properties" in post) {
          const properties = post.properties;
          return {
            slug:
              properties.Slug.type === "rich_text"
                ? properties.Slug.rich_text[0].plain_text
                : "",
            image:
              post.cover && post.cover.type === "file"
                ? post.cover.file.url
                : post.cover && post.cover.type === "external"
                ? post.cover.external.url
                : null,
            posted:
              properties.Posted.type === "date"
                ? properties.Posted.date?.start
                : "",
            title:
              properties.Title.type === "title"
                ? properties.Title.title[0].plain_text
                : "",
            description:
              properties.Description.type === "rich_text"
                ? properties.Description.rich_text[0].plain_text
                : "",
          } as BlogData;
        }
        return null;
      })
    )
  ).filter((post) => post !== null) as BlogData[];
}

export async function getAllBlogIds() {
  const { results } = await notion.databases.query({
    database_id: process.env.NOTION_BLOG_DATABASE_ID ?? "",
    filter: {
      and: [
        {
          property: "Status",
          select: {
            equals: "✅ Published",
          },
        },
        {
          property: "Slug",
          rich_text: {
            is_not_empty: true,
          },
        },
      ],
    },
    sorts: [
      {
        property: "Posted",
        direction: "descending",
      },
    ],
    page_size: 20,
  });
  return results
    .map((post) => {
      if ("properties" in post) {
        return {
          params: {
            slug:
              post.properties.Slug.type === "rich_text"
                ? post.properties.Slug.rich_text[0].plain_text
                : "",
          },
        };
      }
      return null;
    })
    .filter((item) => item !== null) as { params: { id: string } }[];
}

export async function getBlogData(id: string) {
  try {
    const { results } = await notion.databases.query({
      database_id: process.env.NOTION_BLOG_DATABASE_ID ?? "",
      filter: {
        and: [
          {
            property: "Slug",
            rich_text: {
              equals: id,
            },
          },
          {
            property: "Status",
            select: {
              equals: "✅ Published",  
            },
          },
          {
            property: "Published",
            checkbox: {
              equals: true,
            },
          },
        ],
      },
      page_size: 1,
    });

    const mdblocks = await n2m.pageToMarkdown(results[0].id);
    const mdString = n2m.toMarkdownString(mdblocks);

    const post = results[0];
    const mdx = await getBundledMDX(mdString);

    if ("properties" in post && "cover" in post) {
      const properties = post.properties;
      return {
        slug:
          properties.Slug.type === "rich_text"
            ? properties.Slug.rich_text[0].plain_text
            : "",
        image:
          post.cover && post.cover.type === "file"
            ? post.cover.file.url
            : post.cover && post.cover.type === "external"
            ? post.cover.external.url
            : null,
        published:
          properties.Posted.type === "date"
            ? properties.Posted.date?.start
            : "",
        updated:
          properties.Updated.type === "date" ? properties.Updated.date : "",
        title:
          properties.Title.type === "title"
            ? properties.Title.title[0].plain_text
            : "",
        description:
          properties.Description.type === "rich_text"
            ? properties.Description.rich_text[0].plain_text
            : "",
        contentHtml: mdx.code,
      } as BlogData;
    }
  } catch (error) {
    console.log(error);
  }
}

export const convertToPostList = (blogData: any) => {
  let tags: string[] = [];

  const posts = blogData.map((post: any) => {
    return {
      title: post.properties.Title.title[0].plain_text,
      slug: post.properties.Slug.type === "rich_text"
        ? post.properties.Slug.rich_text[0].plain_text
        : "",
      image: post.properties?.coverImage?.files[0]?.file?.url ||
        post.properties.coverImage?.files[0]?.external?.url ||
        'https://via.placeholder.com/600x400.png',
      posted: post.properties.Posted.type === "date"
        ? post.properties.Posted.date?.start
        : "",
      description: post.properties.Description.type === "rich_text"
        ? post.properties.Description.rich_text[0].plain_text 
        : "",
      tags: post.properties.Tags.multi_select.map((tag: any) => {
        if (!tags.includes(tag.name)) {
          const newList = [...tags, tag.name];
          tags = newList;
        }
        return { name: tag.name, id: tag.id };
      }),
      isPublic: post.properties?.Published.checkbox
    };
  });

  return { tags, posts };
}
