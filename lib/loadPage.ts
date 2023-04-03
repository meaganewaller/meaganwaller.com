import { NotionAPI } from 'notion-client';

export const loadPage = (id: string) => (new NotionAPI({ authToken: process.env.NOTION_AUTH_TOKEN })).getPage(id);
