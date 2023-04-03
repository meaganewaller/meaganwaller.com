import { Badge } from "@components/Badge";
import { BlogPreview } from "@components/Blog/BlogPreview";
import { PageLayout } from "@components/PageLayout";
import { Blog, blogApi } from "@lib/blogApi";
import { GetStaticProps } from "next";
import { slugifyIt } from "@lib/utils/slugify";
import { useWindowSize } from "@lib/hooks/useWindowSize";
import MenuBar from "@components/Elements/MenuBar";
import Window from "@components/Elements/Window";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Category } from "@components/Elements/Category";
import { PostList } from "@components/Elements/PostList";

interface Props {
  posts: Blog[];
  categories: Array<string>;
}

export default function BlogCategoryIndex({ posts, categories }: Props) {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [blogCategoryListTitle, setBlogCategoryListTitle] = useState<string>("~* posts from all categories *~");
  const [searchValue, setSearchValue] = useState("");
  const size = useWindowSize();

  const filteredPosts = posts
    .sort((_, b) => Number(new Date(b.createdAt)))
    .filter((post) => {
      return (
        post.title.toLowerCase().includes(searchValue.toLowerCase()) ||
        post.category.toLowerCase().includes(searchValue.toLowerCase()) ||
        post.tags.some((tag) => tag.toLowerCase() === searchValue.toLowerCase())
      );
    });

  useEffect(() => {
    setSearchValue(selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="bg-desktopWallpaper2">
      <MenuBar />
      <Window
        active={true}
        title={blogCategoryListTitle}
        x={size.width / 3.5}
        y={size.height / 6}
        zIndex="1"
        width={`${size.width * 0.7}px`}
        height={`${size.height * 0.8}px`}
      >
        <div className="space-y-12 place-content-center">
          {!filteredPosts.length && (
            <div className="w-full mx-auto rounded-lg bg-[#F8FAFC] dark:bg-midnight p-4">
              <p className="flex items-center justify-center text-2xl">
                No posts found{" "}
                <span>
                  <svg className="ml-3 w-7 h-7" fill="none" viewBox="0 0 24 24">
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M8.75 4.75H15.25C17.4591 4.75 19.25 6.54086 19.25 8.75V15.25C19.25 17.4591 17.4591 19.25 15.25 19.25H8.75C6.54086 19.25 4.75 17.4591 4.75 15.25V8.75C4.75 6.54086 6.54086 4.75 8.75 4.75Z"
                    ></path>
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M7.75 15.25C7.75 15.25 9 12.75 12 12.75C15 12.75 16.25 15.25 16.25 15.25"
                    ></path>
                    <circle cx="14" cy="10" r="1" fill="currentColor"></circle>
                    <circle cx="10" cy="10" r="1" fill="currentColor"></circle>
                  </svg>
                </span>
              </p>
            </div>
          )}
          <PostList posts={filteredPosts} />
        </div>
      </Window>
      <Window active={false} title="~*categories*~" x={size.width / 22} y={size.height / 3.25} zIndex="0" width={`${size.width * 0.2}px`}>
        <div className="flex flex-col hide-scrollbar text-center">
          <ul className="m-0 list-flower list-inside flex flex-col w-full gap-2 py-8">
            <div className="shrink-0">
              <Category
                activeCategory={selectedCategory}
                category=""
                cb={() => {
                  setSelectedCategory("");
                  setBlogCategoryListTitle("~* posts from all categories *~");
                }}
              />
            </div>
            {categories &&
              categories.map((category) => (
                <div key={category} className="shrink-0">
                  <Category
                    activeCategory={selectedCategory}
                    category={category}
                    cb={() => {
                      setSelectedCategory(category);
                      setBlogCategoryListTitle(`~* posts filtered by ${category.toLowerCase()}*~`);
                    }}
                  />
                </div>
              ))}
          </ul>
        </div>
      </Window>
    </div>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const posts = await blogApi.getPosts("desc");
  const categories = await blogApi.getAllCategories();
  return {
    props: {
      posts,
      categories,
    },
    revalidate: 10,
  };
};
