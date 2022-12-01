export type BlogData = {
  slug: string;
  title: string;
  posted: string;
  updated: string;
  image: string;
  description: string;
  contentHtml?: string;
  tags: Tag[];
  isPublic: boolean;
};

export type Tags = {
  name: string;
  id: string;
}
