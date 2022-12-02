import { Tags } from "./blog";

export type WorkspaceData = {
  slug: string;
  title: string;
  image: string;
  description: string;
  tags: Tag[];
  section: WorkspaceSection;
  isPublic: boolean;
  contentHtml?: string;
}

export type WorkspaceSection = {
  name: string;
  id: string;
}
