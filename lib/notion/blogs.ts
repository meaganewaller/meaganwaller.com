import { notion, n2m } from ".";
import { getBundledMDX } from "@lib/mdx";
import { BlogData } from "@localTypes/blog";

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

    const post = results[0];
    const mdx = await getBundledMDX(mdString);

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
        title:
          properties.Title.type === "title"
            ? properties.Title.title[0].plain_text
            : "",
        description:
          properties.Description.type === "rich_text"
            ? properties.Description.rich_text[0].plain_text
            : "",
        tags: properties.Tags,
        contentHtml: mdx.code,
        posted:
          properties.Posted.type === "date"
            ? properties.Posted.date?.start
            : "",
        updated:
          properties.Updated.type === "last_edited_time"
            ? properties.Updated.last_edited_time
            : "",
        is_public: properties.Published,
      } as BlogData;
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
  const posts = await getPublishedPosts();
  return posts.map((post) => {
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
  .filter((item) => item !== null) as { params: { slug: string } }[];
}

export const getPostPage = (data, slug) => {
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
  let tags: string[] = []

  const posts = tableData.map((post: any) => {
    return {
      slug: post.properties.Slug.rich_text[0].plain_text,
      title: post.properties.Title.title[0].plain_text,
      tags: post.properties.Tags.multi_select.map((tag: Tags) => {
        if (!tags.includes(tag.name)) {
          const newList = [...tags, tag.name]
          tags = newList
        }
        return { name: tag.name, id: tag.id }
      }),
      image:
        post.properties?.cover?.files[0]?.file?.url ||
        post.properties.cover?.files[0]?.external?.url ||
        'https://via.placeholder.com/600x400.png',
      posted: post.properties.Posted.date.start,
      updated: post.properties.Updated.last_edited_time,
      description: post.properties?.Description.rich_text[0]?.plain_text,
    }
  })

  return { posts, tags }
}
