export type NotionPageListResponse = {
  object: "list",
  results: NotionPage[];
  next_cursor: null;
  has_more: boolean;
}

export type NotionPageChildrenResponse = {
  object: "list",
  results: NotionBlock[];
  next_cursor: null;
  has_more: boolean;
}

export type NotionPage = {
  object: "page";
  id: string;
  created_time?: string;
  last_edited_time?: string;
  cover?: null;
  icon?: null;
  parent?: {
    type: "database_id";
    database_id: string;
  };
  archived?: boolean;
  properties?: PostProperty;
  url?: string;
};

export type PostProperty = {
  category: {
    id: string;
    type: "select";
    select: NotionSelectOptionObject;
  };
  state: {
    id: string;
    type: "select";
    select: NotionSelectOptionObject;
  };
  Updated: {
    id: string;
    type: "last_edited_time";
    last_edited_time: string;
  };
  slug: {
    id: string;
    type: "rich_text";
    rich_text: NotionRichTextObject[];
  };
  tags: {
    id: string;
    type: "multi_select";
    multi_select: NotionSelectOptionObject[];
  };
  published: {
    id: string;
    type: "date";
    date: {
      start: string;
      end: null;
      time_zone: null;
    };
  };
  Created: {
    id: string;
    type: string;
    created_time: string;
  };
  Name: {
    id: "title";
    type: "title";
    title: NotionRichTextObject[];
  };
};

type NotionSelectOptionObject = {
  id: string;
  name: string;
  color: string;
};

type NotionRichTextObject = {
  type: "text";
  text: {
    content: string;
    link: null;
  };
  annotations: NotionRichTextAnnotations;
  plain_text: string;
  href: null;
};

export type NotionRichTextAnnotations = {
  bold: boolean;
  italic: boolean;
  strikethrough: boolean;
  underline: boolean;
  code: boolean;
  color: string;
};
