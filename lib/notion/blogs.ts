import { notion, n2m } from ".";
import { getBundledMDX } from "@lib/mdx";
import { PostData, PostFrontMatter } from "@localTypes/blog";
import readingTime from "reading-time";
import { Tags } from "@localTypes/blog";
import { meta } from "@data/meta";

export const getPublishedPosts = async (limit?: number) => {
  const response = await notion.databases.query({
    database_id: process.env.NOTION_BLOG_DATABASE_ID ?? "",
    filter: {
      and: [
        {
          property: 'Status',
          select: {
            equals: '✅ Published',
          },
        },
        {
          property: 'Slug',
          rich_text: {
            is_not_empty: true,
          },
        },
        {
          property: 'Published',
          checkbox: {
            equals: true,
          },
        },
      ],
    },
    sorts: [
      {
        property: 'Posted',
        direction: 'descending',
      },
    ],
    page_size: limit,
  });
  return response.results
}

export const getAllPosts = async (limit?: number) => {
  const { results } = await notion.databases.query({
    database_id: process.env.NOTION_BLOG_DATABASE_ID ?? "",
    filter: {
      and: [
        {
          property: 'Status',
          select: {
            does_not_equal: '💭 Idea',
          },
        },
        {
          property: 'Slug',
          rich_text: {
            is_not_empty: true,
          },
        },
        {
          property: 'Posted',
          date: {
            is_not_empty: true,
          }
        }
      ],
    },
    sorts: [
      {
        property: 'Posted',
        direction: 'descending',
      },
    ],
    page_size: limit,
  });

  return results;
};

export async function getPostsByTag(tag: string) {
  try {
    const { results } = await notion.databases.query({
      database_id: process.env.NOTION_BLOG_DATABASE_ID ?? "",
      filter: {
        and: [
          {
            property: "Tags",
            multi_select: {
              contains: tag,
            },
          },
          {
            property: "Slug",
            rich_text: {
              is_not_empty: true,
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
    });
    return results.map((item) => {
    if ("properties" in item) {
      return {
        params: {
          slug: tag
        },
      };
    }
    return null;
  }).filter((item) => item !== null) as { params: { slug: string } }[];

  } catch (error) {
    console.log(error);
  }
}

export async function getPostData(slug: string) {
  try {
    const { results } = await notion.databases.query({
      database_id: process.env.NOTION_BLOG_DATABASE_ID ?? "",
      filter: {
        and: [
          {
            property: "Slug",
            rich_text: {
              equals: slug,
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

    const item = results[0];
    const mdx = await getBundledMDX(mdString);

    if ("properties" in item && "cover" in item) {
      const properties = item.properties;
      const postFrontMatter = {
        slug: 
          properties.Slug.type === "rich_text"
            ? properties.Slug.rich_text[0].plain_text
            : "",
        image: 
          item.cover && item.cover.type === "file"
            ? item.cover.file.url
            : item.cover && item.cover.type === "external"
            ? item.cover.external.url
            : "https://via.placeholder.com/900x650.png",
        title:
          properties.Title.type === "title"
            ? properties.Title.title[0].plain_text
            : "",
        summary:
          properties.Description.type === "rich_text"
            ? properties.Description.rich_text[0].plain_text
            : "",
        tags: 
          properties.Tags.type === "multi_select"
            ? properties.Tags.multi_select
            : null,
        date:
          properties.Posted.type === "date"
            ? properties.Posted.date?.start
            : "",
        lastmod:
          properties.Updated.type === "last_edited_time"
            ? properties.Updated.last_edited_time
            : "",
        draft: !properties.Published,
        readingTime: readingTime(mdString),
      } as PostFrontMatter;

      return {
        frontMatter: postFrontMatter,
        contentHtml: mdx.code,
      } as PostData;
    }
  } catch (error) {
    console.log(error);
  }
}

export const getFeaturedPosts = async () => {
  const response = await notion.databases.query({
    database_id: process.env.NOTION_BLOG_DATABASE_ID ?? "",
    filter: {
      property: 'Featured',
      checkbox: {
        equals: true,
      },
    },
    sorts: [
      {
        property: 'Posted',
        direction: 'descending',
      },
    ],
  })
  return response.results
}

export async function getAllBlogSlugs() {
  const { results } = await notion.databases.query({
    database_id: process.env.NOTION_BLOG_DATABASE_ID ?? "",
    filter: {
      and: [
        {
          property: "Status",
          select: {
            equals: '✅ Published',
          },
        },
        {
          property: "Slug",
          rich_text: {
            is_not_empty: true,
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
    sorts: [
      {
        property: "Posted",
        direction: "descending",
      },
    ],
    page_size: 20,
  });
  return results.map((item) => {
    if ("properties" in item) {
      return {
        params: {
          slug: 
            item.properties.Slug.type === "rich_text"
              ? item.properties.Slug.rich_text[0].plain_text
              : "",
        },
      };
    }
    return null;
  }).filter((item) => item !== null) as { params: { slug: string } }[];
}

export const getPostPage = (data, slug: string) => {
  const response = data.find((result) => {
    if (result.object === 'page') {
      const resultSlug = result.properties.Slug.rich_text[0].plain_text.toLowerCase()
      return resultSlug === slug
    }
    return false
  })
  return response
}

export const convertToPostList = (tableData: any) => {
  let tags: string[] = [];

  const posts = tableData.map((item: any) => {
    const properties = item.properties

    return {
      frontMatter: {
        slug: properties.Slug.type === "rich_text"
          ? properties.Slug.rich_text[0].plain_text
          : "",
        title: properties.Title.type === "title"
          ? properties.Title.title[0].plain_text
          : "",
        tags: properties.Tags.multi_select.map((tag: Tags) => {
          if (!tags.includes(tag.name)) {
            const newList = [...tags, tag.name];
            tags = newList;
          }
          return { name: tag.name, id: tag.id };
        }),
        category: properties.Category.select,
        date: properties.Posted?.date?.start,
        lastmod: properties.Updated?.last_edited_time,
        draft: !properties.Published.checkbox,
        summary: properties.Description.rich_text[0].plain_text,
        image: properties["Image ID"].rich_text[0].plain_text,
        canonicalUrl: `{${meta.url}/blog/${properties.Slug.rich_text[0].plain_text}}`,
      } as PostFrontMatter,
    } as PostData;
  })

  return { posts, tags }
};
