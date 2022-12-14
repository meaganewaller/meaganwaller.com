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

export default function Home({ blogData }: HomeProps) {
  const router = useRouter()

  return (
    <>
      <Header />
      <HeroPostList blogs={blogData} />
      <Features />
      <Hero />
      <Footer />
    </>
  )
}

export async function getStaticProps() {
  const blogData = await getBlogList()
  return {
    props: { 
      blogData: blogData.slice(0, 4)
    },
    revalidate: 30,
  }
}
