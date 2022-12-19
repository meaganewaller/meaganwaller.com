import { NotionBlockResponseList, BlogCategory, BlogPost, NotionBlockResponse } from "@localTypes/schema";
import { GetStaticPaths, NextPage, GetStaticProps } from "next";
import { getBlogBlocks, getBlogList, getCategoryList } from "services/notion";
import MainLayout from "@layouts/Main";
import { meta } from "@data/meta";
import { parseISO, format } from "date-fns";
import Image from "next/image";
import BlogComponent from "@components/Blog/Post";
import Link from "next/link";
import { TocItem } from "@components/Blog/TocItem";

interface BlogPageProps {
  blocks: NotionBlockResponseList
  title: string
  description: string
  image?: string
  published: string
  categories: BlogCategory[]
  blogs: BlogPost[]
}

export default function Post({ blocks, title, description, image, published, categories, blogs }: BlogPageProps) {
  return (
    <MainLayout title={`${meta.title} - ${title} `} description={description} image={image} date={new Date(published).toISOString()} type="article" categories={categories} blogs={blogs}>
      <article className="mx-auto mb-16 flex min-h-screen w-full max-w-2xl flex-col items-start justify-center">
        <div className="prose grid flex-1 grid-cols-1 gap-x-8 font-sans dark:prose-dark md:grid-cols-[1fr,minmax(auto,640px),1fr] md:[&>*]:col-start-2">
          <div>
            <header className="w-full font-sans">
              <h1 className="mt-6 mb-2 flex items-center box-decoration-clone bg-clip-text text-center font-sans text-[2.5rem] font-semibold motion-reduce:transition-none">
                {title}
              </h1>
              <div className="mt-2 flex w-full flex-col items-start justify-between md:flex-row md:items-center">
                <div>
                  <div className="flex items-center">
                    <Image alt={meta.title} height={24} width={24} src={"/static/images/header.svg"} className="rounded-full" />
                    <time className="ml-2 text-sm text-gray-700 dark:text-gray-300" date-time={parseISO(published)}>
                      Meagan Waller / { format(parseISO(published), "MMMM dd, yyyy")}
                    </time>
                  </div>
                </div>
                  <p className="min-w-32 mt-2 text-sm text-gray-600 dark:text-gray-400 md:mt-0">
                  XXX words &middot; XX min read
                </p>
              </div>
            </header>
            <BlogComponent blocks={blocks} />
          </div>
          <div className="sticky top-24 !col-start-3 mt-8 ml-3 max-w-[14rem] flex-col space-y-2 self-start text-base xl:flex">
            <p className="mb-0 text-sm uppercase">On this page</p>
            {/* {headings.map((heading: NotionBlockResponse) => ( */}
            {/*   <TocItem key={heading.id} heading={heading} />  */}
            {/* ))} */}
          </div>
        </div>
        <div className="flex w-full justify-end py-4 font-mono text-gray-700 dark:text-gray-300">
          <Link href="#" rel="noopener noreferrer">Suggest a change</Link>
        </div>
      </article>
    </MainLayout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getBlogList()

  return {
    paths: posts.map(({ url }) => url),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const posts = await getBlogList()
  const categories = await getCategoryList()
  const post = posts.find(({ url }) => 

    url.includes(context.params?.slug as string))

  if (!post) return { notFound: true }

  const blocks = await getBlogBlocks(post.id)
  return {
    props: {
      blogs: posts,
      blocks,
      categories,
      title: post.title,
      description: post.description,
      image: post.image,
      published: post.created,
      category: post.category,
    },
    revalidate: 240
  }
}
