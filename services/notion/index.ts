import { BlogPost, BlogPostProperties, NotionBlockResponseList, BlogCategory, BlogCategoryProperties } from "@localTypes/schema"
import { Client as NotionClient, iteratePaginatedAPI } from "@notionhq/client"
import { BlockWithChildren, getChildBlocksWithChildrenRecursively, inferDatabaseSchema, richTextAsPlainText } from "@jitl/notion-api"
import { isFullPage } from "@notionhq/client"

const { NOTION_API_TOKEN, NOTION_BLOG_DATABASE_ID, NOTION_CATEGORY_DATABASE_ID } = process.env

const notion = new NotionClient({
  notionVersion: "2022-02-22",
  auth: NOTION_API_TOKEN,
})

export const getBlogBlocks = async ( pageId: string): Promise<NotionBlockResponseList> => {
  const content:BlockWithChildren[] = await getChildBlocksWithChildrenRecursively(notion, pageId)

  if (!content) return []

  const populatedBlocks = content.filter((block) => {
    return !!(block as { type?: string }).type
  }) as NotionBlockResponseList

  return populatedBlocks
}

export const getCategoryList = async (): Promise<BlogCategory[]> => {
  const { results } = await notion.databases.query({
    database_id: NOTION_CATEGORY_DATABASE_ID!,
  })

  const categories = []

  for (const page of results) {
    if (!("cover" in page)) continue
    if (page.object !== "page") continue

    const properties: BlogCategoryProperties = 
      page.properties as unknown as BlogCategoryProperties

    const fileImage = page.cover?.type === "file" ? page.cover.file.url : ""
    const externalImage = page.cover?.type === "external" ? page.cover.external.url : ""

    categories.push({
      id: page.id,
      cover: {
        url: fileImage || externalImage,
      },
      title: properties.Name.title[0]?.plain_text || "Uncategorized",
      description: properties.Description.rich_text[0]?.plain_text ? properties.Description.rich_text[0]?.plain_text : "Needs a description still",
      url: `/category${new URL(page.url).pathname}`.toLowerCase(),
      textColor: `text-${properties["Category Color"].select.name}`,
      fillColor: `fill-${properties["Category Color"].select.name}-500`,
      blogPosts: properties["Blog Posts"]
    })
  }

  return categories
}

export const getBlogList = async () => {
  const pages = []

  for await (const page of iteratePaginatedAPI(notion.databases.query, {
    database_id: NOTION_BLOG_DATABASE_ID,
  })) {
    if (isFullPage(page)) {
      const fileImage = page.cover?.type === "file" ? page.cover.file.url : ""
      const externalImage = page.cover?.type === "external" ? page.cover.external.url : ""

      const properties: BlogPostProperties = 
        page.properties as unknown as BlogPostProperties

      const category = properties.Category.select?.name


      pages.push({
        id: page.id,
        cover: {
          url: fileImage || externalImage
        },
        image: properties.Image.rich_text[0]?.plain_text,
        status: properties.Status.select?.name, 
        created: properties["Release Date"].date?.start,
        title: properties.Name.title[0]?.plain_text,
        description: properties.Description.rich_text[0]?.plain_text,
        url: `/blog/${properties.Slug.rich_text[0]?.plain_text}`,
        slug: properties.Slug.rich_text[0]?.plain_text,
        category: category || "Uncategorized",
        tags: properties.Tags.multi_select,
        lastEdited: page.last_edited_time,
      })
    }
  }
  return pages
}
