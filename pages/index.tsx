import type { NextPage } from "next"
import { useRouter } from "next/router"

import Header from "@components/Landing/Header"
import HeroPostList from "@components/HeroPostList"
import Features from "@components/Landing/Features"
import Hero from "@components/Landing/Hero"
import { Footer } from "@components/Footer"

import { getBlogList } from "services/notion"
import { BlogPost } from "@localTypes/schema"
import { getCurrentUrl } from "@lib/utils/url"

interface HomeProps {
  blogData: BlogPost[]
}

const HomePage: NextPage<HomeProps> = ({ blogData }) => {
  const router = useRouter()

  return (
    <>
      <Header />
      {/* <HeroPostList posts={blogData.slice(0, 5)} /> */}
    </>
  )
}

export async function getStaticProps() {
  const blogData = await getBlogList()
  return {
    props: { blogData },
    revalidate: 240,
  }
}

export default HomePage

// import { getIndex, getPage, getBlockChildren } from "services/notion"
// import { NotionContent } from "@lib/render"
// import { GetStaticPropsResult } from "next";

// export default function Page({ page, blocks }) {
//   if (!page || !blocks) return null;

//   return (
//     <NotionContent blocks={blocks} />
//   );
// }

// export async function getStaticProps(): Promise<GetStaticPropsResult<any>> {
//   const index = await getIndex();

//   const page = await getPage(index.home.id);
//   if (!page) return { notFound: true };

//   const blocks = await getBlockChildren(page.id);

//   return { props: { page, blocks }, revalidate: 300 };
// }
// // import { GetStaticProps } from 'next'
// import { getAllPosts } from 'services/notion'
// import { QueryDatabaseResponse } from '@notionhq/client/build/src/api-endpoints'
// import Header from '@components/Landing/Header'
// import { HeroPostList } from '@components/HeroPostList'
// import Features from '@components/Landing/Features'
// import Hero from '@components/Landing/Hero'
// import { Footer } from '@components/Footer'

// interface BlogProps {
//   latestPosts: QueryDatabaseResponse
//   pageCount: number
// }

// export default function Blog({ latestPosts, pageCount }: BlogProps) {
//   return (
//     <>
//       <Header />
//       <HeroPostList posts={latestPosts} />
//       <Features />
//       <Hero />
//       <Footer />
//     </>
//   )
// }

// export const getStaticProps: GetStaticProps = async () => {
//   const posts = await getAllPosts()
//   const latestPosts = posts[0]

//   return {
//     props: {
//       latestPosts,
//       pageCount: posts.length
//     },
//     revalidate: 10
//   }
// }
