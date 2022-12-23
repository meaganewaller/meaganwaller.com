import { useRouter } from "next/router"

import Header from "@components/Landing/Header"
import Features from "@components/Landing/Features"
import Hero from "@components/Landing/Hero"
import { Footer } from "@components/Footer"

import { getBlogList } from "services/notion"
import { BlogPost } from "@localTypes/schema"
import LandingLayout from "@layouts/Landing"
import Newsletter from "@components/Landing/Newsletter"
import PostList from "@components/Landing/PostList"

interface HomeProps {
  blogData: BlogPost[]
}

export default function Home({ blogData }: HomeProps) {
  const router = useRouter()

  return (
    <LandingLayout>
      <Header />
      <PostList blogs={blogData} />
      <Features />
      <Newsletter />
      <Footer />
    </LandingLayout>
  )
}

export async function getStaticProps() {
  const blogData = await getBlogList()
  return {
    props: { 
      blogData: blogData.slice(0, 5)
    },
    revalidate: 30,
  }
}
