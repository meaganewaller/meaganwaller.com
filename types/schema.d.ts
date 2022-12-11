import { ListBlockChildrenResponse } from "@notionhq/client/build/src/api-endpoints"

type TypeWithGeneric<T> = T[]
type ExtractGeneric<Type> = Type extends TypeWithGeneric<infer X> ? X : never

export type NotionBlockType = NotionBlockResponse["type"]

export type NotionBlockResponse<T = string> = Extract<
  ExtractGeneric<ListBlockChildrenResponse["results"]>,
  { type: T }
>

export type NotionBlockResponseList<T = string> = NotionBlockResponse<T>[]

export type NotionBlockComponent<T extends NotionBlock, P = {}> = React.VFC<NotionBlockResponse<`${T}`> & P>

export type NotionBlockRendererProps = {
  [K in NotionBlockType]?: React.VFC<NotionBlockResponse<K>>
}

export enum NotionBlock {
  PARAGRAPH = "paragraph",
  HEADING_1 = "heading_1",
  HEADING_2 = "heading_2",
  HEADING_3 = "heading_3",
  BULLETED_LIST_ITEM = "bulleted_list_item",
  NUMBERED_LIST_ITEM = "numbered_list_item",
  QUOTE = "quote",
  TODO = "to_do",
  TOGGLE = "toggle",
  TEMPLATE = "template",
  SYNCED_BLOCK = "synced_block",
  CHILD_PAGE = "child_page",
  CHILD_DATABASE = "child_database",
  EQUATION = "equation",
  CODE = "code",
  CALLOUT = "callout",
  DIVIDER = "divider",
  BREADCRUMB = "breadcrumb",
  TABLE_OF_CONTENTS = "table_of_contents",
  COLUMN_LIST = "column_list",
  COLUMN = "column",
  LINK_TO_PAGE = "link_to_page",
  TABLE = "table",
  TABLE_ROW = "table_row",
  EMBED = "embed",
  BOOKMARK = "bookmark",
  VIDEO = "video",
  IMAGE = "image",
  PDF = "pdf",
  FILE = "file",
  AUDIO = "audio",
  LINK_PREVIEW = "link_preview",
  UNSUPPORTED = "unsupported",
}

export type BlogStatus = "Draft" | "Published"

export interface BlogPost {
  id: string
  cover: {
    url: string
  }
  status: BlogStatus
  created: string
  title: string
  description: string
  url: string
  lastEdited: string
}

export interface BlogPostProperties {
  "Release Date": {
    id: string
    type:  "date"
    date?: {
      start: string
      end: string | null
    }
  }
  Status: {
    id: string
    type: "select"
    select?: {
      id: string
      name: BlogStatus
      color: string
    }
  }
  Name: {
    id: "title"
    type: "title"
    title: [
      {
        plain_text: string
      }
    ]
  }
  Description: {
    id: string
    type: "rich_text"
    rich_text: [
      {
        type: "text"
        plain_text: string
      }
    ]
  }
}
// import type { QueryDatabaseResponse } from '@notionhq/client/build/src/api-endpoints'
// import type { BlockWithChildren, PageWithChildren } from '@jitl/notion-api'

// export type NotionDB = QueryDatabaseResponse & {
//   results: PageWithChildren[]
// }

// export type NotionBlock =
//   | {
//       id: string
//       type: "bulleted_list"
//       bulleted_list: { children: BlockWithChildren[] }
//     }
//   | {
//       id: string
//       type: "numbered_list"
//       numbered_list: { children: BlockWithChildren[] }
//     }
//   | BlockWithChildren

// export interface TableOfContentsItem {
//   title: string
//   type?: string
//   children?: TableOfContentsItem[]
// }
