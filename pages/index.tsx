import { PostData } from "@localTypes/blog";
import { getAllPosts, convertToPostList } from "@lib/notion/blogs";
import { Footer } from "@components/Footer";
import { GetStaticProps } from "next";
import { HeroPostList } from "@components/HeroPostList";
import Header from "@components/Landing/Header"
import Hero from "@components/Landing/Hero";
import Features from "@components/Landing/Features";

interface Props {
  posts: PostData[];
}

const HomePage = ({ posts }: Props) => (
  <>
    <Header />
    <HeroPostList posts={posts} />
    <Features />
    <Hero />
    <Footer />
  </>
);

export default HomePage;

export const getStaticProps: GetStaticProps = async () => {
  const data = await getAllPosts(5)
  const { posts } = convertToPostList(data)

  return {
    props: {
      posts
    },
    revalidate: 30
  }
}
