import { BlogPost, BlogPostProperties } from "@localTypes/schema"

import { Client as NotionClient } from "@notionhq/client"
import { NotionBlockResponseList } from "@localTypes/schema"

const { NOTION_API_TOKEN, NOTION_BLOG_DATABASE_ID } = process.env

const notion = new NotionClient({
  notionVersion: "2022-02-22",
  auth: NOTION_API_TOKEN,
})

export const getBlogBlocks = async (
  pageId: string
): Promise<NotionBlockResponseList> => {
  const database = await notion.databases.query({
    database_id: NOTION_BLOG_DATABASE_ID!,
  })

  const page = database.results.find(({ id }) => id === pageId)
  if (!page?.id) return []

  const blocks = await notion.blocks.children.list({ block_id: page?.id })
  const populatedBlocks = blocks.results.filter((block) => {
    return !!(block as { type?: string }).type
  }) as NotionBlockResponseList

  return populatedBlocks
}

export const getBlogList = async (): Promise<BlogPost[]> => {
  const { results } = await notion.databases.query({
    database_id: NOTION_BLOG_DATABASE_ID!,
  })

  const pages = []

  for (const page of results) {
    if (!("cover" in page)) continue
    if (page.object !== "page") continue

    const properties: BlogPostProperties =
      page.properties as unknown as BlogPostProperties

    const now = new Date()
    const releaseDate = new Date(properties["Release Date"].date?.start || 0)

    if (properties.Status.select?.name !== "Published") continue
    if (releaseDate >= now) continue

    const fileImage = page.cover?.type === "file" ? page.cover.file.url : ""
    const externalImage = page.cover?.type === "external" ? page.cover.external.url : ""

    pages.push({
      id: page.id,
      cover: {
        url: fileImage || externalImage,
      },
      image: properties.Image.rich_text[0].plain_text || "",
      status: properties.Status.select.name,
      created: properties["Release Date"].date.start,
      title: properties.Name.title[0]?.plain_text || "Unknown Title",
      description: properties.Description.rich_text[0].plain_text,
      url: `/blogs${new URL(page.url).pathname}`.toLowerCase(),
      lastEdited: page.last_edited_time
    })
  }

  return pages
}
