import { Client, LogLevel } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";

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

export const notion = notionClient();
export const n2m = new NotionToMarkdown({ notionClient: notion });

export const getDatabase = async (databaseId: string) => {
  const response = await notion.databases.query({
    database_id: databaseId,
  })
  return response.results
}

export const getPage = async (pageId: string) => {
  const response = await notion.pages.retrieve({ page_id: pageId })
  return response
}

export const getBlocks = async (blockId: string) => {
  const response = await notion.blocks.children.list({
    block_id: blockId,
    page_size: 50,
  })
  return response.results
}
