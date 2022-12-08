export type PostData = {
  frontMatter: PostFrontMatter;
  contentHtml?: string;
}

export type ReadTime = {
  text: string;
  time: number;
  words: number;
  minutes: number;
}

export type Tags = {
  name: string;
  id: string;
  color: string;
}

export enum ImageType {
  EXTERNAL = "external",
  FILE = "file",
}

export type Images = {
  url: string;
  expiry_time: string;
  type: ImageType;
}

export type PostFrontMatter = {
  title: string;
  date: string;
  tags: Tags[];
  lastmod?: string;
  draft?: boolean;
  summary?: string;
  image: string;
  images?: Images[];
  layout?: string;
  readingTime: any;
  canonicalUrl?: string;
  slug: string;
  category: Tags;
}
