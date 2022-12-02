import { Client, LogLevel } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";
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

export async function getWorkspaceItems() {
  const { results } = await notion.databases.query({
    database_id: process.env.NOTION_WORKSPACE_DATABASE_ID ?? "",
    filter: {
      and: [
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
      ]
    },
    sorts: [
      {
        property: "Name",
        direction: "ascending",
      },
    ],
  });

  return results;
}

export async function getWorkspaceData(id: string) {
  try {
    const { results } = await notion.databases.query({
      database_id: process.env.NOTION_WORKSPACE_DATABASE_ID ?? "",
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

    const item = results[0];
    const mdx = await getBundledMDX(mdString);

    if ("properties" in item) {
      const properties = item.properties;
      return {
        slug:
          properties.Slug.type === "rich_text"
            ? properties.Slug.rich_text[0].plain_text
            : "",
        image:
          item.cover && item.cover.type === "file"
            ? item.cover.file.url
            : item.cover && item.cover.type === "external"
            ? item.cover.external.url
            : null,
        title:
          properties.Name.type === "title"
            ? properties.Name.title[0].plain_text
            : "",
        description:
          properties.Description.type === "rich_text"
            ? properties.Description.rich_text[0].plain_text
            : "",
        section: properties.Sections.select,
        contentHtml: mdx.code,
      } as WorkspaceData;
    }
  } catch (error) {
    console.log(error);
  }
}

export async function getAllWorkspaceIds() {
  const { results } = await notion.databases.query({
    database_id: process.env.NOTION_WORKSPACE_DATABASE_ID ?? "",
    filter: {
      and: [
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
      ]
    },
    sorts: [
      {
        property: "Name",
        direction: "ascending",
      },
    ],
  });
  return results
    .map((item) => {
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
    })
    .filter((i) => i !== null) as { params: { id: string } }[];
}

export const convertToWorkspaceSections = (workspaceData: any) => {
  let sections: string[] = [];

  const workspace = workspaceData.map((item: any) => {
    if (!sections.includes(item.properties.Section.select.name)) {
      const newList = [...sections, item.properties.Section.select.name];
      sections = newList;
    }

    return {
      title: item.properties.Name.title[0].plain_text,
      slug: item.properties.Slug.type === "rich_text"
        ? item.properties.Slug.rich_text[0].plain_text
        : "",
      image: item.properties?.coverImage?.files[0]?.file?.url ||
        item.properties.coverImage?.files[0]?.external?.url ||
        'https://via.placeholder.com/600x400.png',
      description: item.properties.Description.type === "rich_text"
        ? item.properties.Description.rich_text[0].plain_text 
        : "",
      tags: item.properties.Tags.multi_select,
      section: { name: item.properties.Section.select.name, id: item.properties.Section.select.id },
      isPublic: item.properties?.Published.checkbox,
    };
  });

  return { sections, workspace };
}

