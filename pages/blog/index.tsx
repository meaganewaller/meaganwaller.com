import PageLayout from "@components/PageLayout";
import { getAllSortedBlogsData, convertToPostList } from "@lib/notion/blogs";
import { BlogData } from "@localTypes/blog";
import { GetStaticProps } from "next";
import { ReactElement, useEffect, useState } from "react";
import { PostList } from "@components/PostList";
import Image from "next/image";
import Link from "next/link";
import { Tag } from "@components/Tag";

interface Props {
  featuredPost: BlogData;
  posts: BlogData[];
  tags: string[];
}

export default function Blogs({ featuredPost, posts, tags }: Props): ReactElement {
  const [selectedTag, setSelectedTag] = useState<string>('');
  const [searchValue, setSearchValue] = useState('');

  const filteredPosts = posts
  .sort((a, b) => Number(new Date(b.posted)))
  .filter((post) => {
    return (
      post.title.toLowerCase().includes(searchValue.toLowerCase()) ||
        post.tags.some((el) => el.name === searchValue.toLocaleLowerCase())
    );
  });

  useEffect(() => {
    setSearchValue(selectedTag);
  }, [selectedTag]);

  return (
    <PageLayout title="Blog posts">
      <h1>
        <span className="block text-base font-semibold tracking-wide text-center text-teal-500 uppercase dark:text-teal-400">
          My blog
        </span>
        <span className="block max-w-2xl mx-auto mt-2 text-4xl font-bold leading-10 text-center sm:text-5xl">
          Learnings from the field.
        </span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-12 md:gap-8">
        <button
          className="col-span-8 space-y-2 text-left hover:cursor-pointer group">
          <div>
            <Image
              className="rounded-xl group-hover:opacity-75"
              src={featuredPost.image}
              placeholder="blur"
              blurDataURL={featuredPost.image}
              width={1200}
              height={684}
              alt={'post cover image'}
              />
            <div className="">
              <div className="flex items-center mt-4 md:justify-start">
                <p className="m-0 text-lg font-semibold">Featured article</p>
                <svg
                  className="w-7 h-7"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.25 10C17.25 12.8995 14.8995 15.25 12 15.25C9.10051 15.25 6.75 12.8995 6.75 10C6.75 7.10051 9.10051 4.75 12 4.75C14.8995 4.75 17.25 7.10051 17.25 10Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M8.75 14.75L7.75 19.25L12 17.75L16.25 19.25L15.25 14.75"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <span className="flex w-3 h-3">
                  <span className="relative inline-flex w-3 h-3 bg-teal-500 rounded-full"></span>
                  <span className="absolute inline-flex w-3 h-3 bg-teal-400 rounded-full opacity-75 animate-ping"></span>
                </span>
              </div>
              <h2 className="my-4 text-4xl">{featuredPost.title}</h2>
              <p>{featuredPost.description}</p>
            </div>
          </div>
        </button>
        <div className="w-full col-span-4 space-y-12">
          <div className="hidden md:block">
            <span>Subscribe button here</span>
          </div>
          <div className="hidden md:block">
            <h3 className="mb-4 text-sm font-semibold tracking-wider uppercase">
              Connect with me
            </h3>
            <div className="flex items-center order-2 space-x-6">
              <Link href="https://twitter.com/meaganewaller" target="_blank" className="text-gray-600 dark:text-gray-400 important" rel="noreferrer">
                <span className="sr-only">https://twitter.com/meaganewaller</span>
                <svg
                  className="w-7 h-7 transform hover:rotate-[-4deg] transition"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.31 18.25C14.7819 18.25 17.7744 13.4403 17.7744 9.26994C17.7744 9.03682 17.9396 8.83015 18.152 8.73398C18.8803 8.40413 19.8249 7.49943 18.8494 5.97828C18.2031 6.32576 17.6719 6.51562 16.9603 6.74448C15.834 5.47393 13.9495 5.41269 12.7514 6.60761C11.9785 7.37819 11.651 8.52686 11.8907 9.62304C9.49851 9.49618 6.69788 7.73566 5.1875 5.76391C4.39814 7.20632 4.80107 9.05121 6.10822 9.97802C5.63461 9.96302 5.1716 9.82741 4.75807 9.58305V9.62304C4.75807 11.1255 5.75654 12.4191 7.1444 12.7166C6.70672 12.8435 6.24724 12.8622 5.80131 12.771C6.19128 14.0565 7.87974 15.4989 9.15272 15.5245C8.09887 16.4026 6.79761 16.8795 5.45806 16.8782C5.22126 16.8776 4.98504 16.8626 4.75 16.8326C6.11076 17.7588 7.69359 18.25 9.31 18.2475V18.25Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>

              </Link>
              <Link href="https://twitter.com/meaganewaller" target="_blank" className="text-gray-600 dark:text-gray-400 important" rel="noreferrer">
                <span className="sr-only">https://twitter.com/meaganewaller</span>
                <svg
                  className="w-7 h-7 transform hover:rotate-[-4deg] transition"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.31 18.25C14.7819 18.25 17.7744 13.4403 17.7744 9.26994C17.7744 9.03682 17.9396 8.83015 18.152 8.73398C18.8803 8.40413 19.8249 7.49943 18.8494 5.97828C18.2031 6.32576 17.6719 6.51562 16.9603 6.74448C15.834 5.47393 13.9495 5.41269 12.7514 6.60761C11.9785 7.37819 11.651 8.52686 11.8907 9.62304C9.49851 9.49618 6.69788 7.73566 5.1875 5.76391C4.39814 7.20632 4.80107 9.05121 6.10822 9.97802C5.63461 9.96302 5.1716 9.82741 4.75807 9.58305V9.62304C4.75807 11.1255 5.75654 12.4191 7.1444 12.7166C6.70672 12.8435 6.24724 12.8622 5.80131 12.771C6.19128 14.0565 7.87974 15.4989 9.15272 15.5245C8.09887 16.4026 6.79761 16.8795 5.45806 16.8782C5.22126 16.8776 4.98504 16.8626 4.75 16.8326C6.11076 17.7588 7.69359 18.25 9.31 18.2475V18.25Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </Link>
              <Link href="https://twitter.com/meaganewaller" target="_blank" className="text-gray-600 dark:text-gray-400 important" rel="noreferrer">
                <span className="sr-only">https://twitter.com/meaganewaller</span>
                <svg
                  className="w-7 h-7 transform hover:rotate-[-4deg] transition"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.31 18.25C14.7819 18.25 17.7744 13.4403 17.7744 9.26994C17.7744 9.03682 17.9396 8.83015 18.152 8.73398C18.8803 8.40413 19.8249 7.49943 18.8494 5.97828C18.2031 6.32576 17.6719 6.51562 16.9603 6.74448C15.834 5.47393 13.9495 5.41269 12.7514 6.60761C11.9785 7.37819 11.651 8.52686 11.8907 9.62304C9.49851 9.49618 6.69788 7.73566 5.1875 5.76391C4.39814 7.20632 4.80107 9.05121 6.10822 9.97802C5.63461 9.96302 5.1716 9.82741 4.75807 9.58305V9.62304C4.75807 11.1255 5.75654 12.4191 7.1444 12.7166C6.70672 12.8435 6.24724 12.8622 5.80131 12.771C6.19128 14.0565 7.87974 15.4989 9.15272 15.5245C8.09887 16.4026 6.79761 16.8795 5.45806 16.8782C5.22126 16.8776 4.98504 16.8626 4.75 16.8326C6.11076 17.7588 7.69359 18.25 9.31 18.2475V18.25Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </Link>

              <Link href="https://twitter.com/meaganewaller" target="_blank" className="text-gray-600 dark:text-gray-400 important" rel="noreferrer">
                <span className="sr-only">https://twitter.com/meaganewaller</span>
                <svg
                  className="w-7 h-7 transform hover:rotate-[-4deg] transition"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.31 18.25C14.7819 18.25 17.7744 13.4403 17.7744 9.26994C17.7744 9.03682 17.9396 8.83015 18.152 8.73398C18.8803 8.40413 19.8249 7.49943 18.8494 5.97828C18.2031 6.32576 17.6719 6.51562 16.9603 6.74448C15.834 5.47393 13.9495 5.41269 12.7514 6.60761C11.9785 7.37819 11.651 8.52686 11.8907 9.62304C9.49851 9.49618 6.69788 7.73566 5.1875 5.76391C4.39814 7.20632 4.80107 9.05121 6.10822 9.97802C5.63461 9.96302 5.1716 9.82741 4.75807 9.58305V9.62304C4.75807 11.1255 5.75654 12.4191 7.1444 12.7166C6.70672 12.8435 6.24724 12.8622 5.80131 12.771C6.19128 14.0565 7.87974 15.4989 9.15272 15.5245C8.09887 16.4026 6.79761 16.8795 5.45806 16.8782C5.22126 16.8776 4.98504 16.8626 4.75 16.8326C6.11076 17.7588 7.69359 18.25 9.31 18.2475V18.25Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="relative my-12 overflow-x-auto">
        <div className="flex space-x-2 not-prose">
          <svg
            className="flex-none w-5 h-5"
            viewBox="0 0 20 20"
            fill="none"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path
              d="m9.813 9.25.346-5.138a1.276 1.276 0 0 0-2.54-.235L6.75 11.25 5.147 9.327a1.605 1.605 0 0 0-2.388-.085.018.018 0 0 0-.004.019l1.98 4.87a5 5 0 0 0 4.631 3.119h3.885a4 4 0 0 0 4-4v-1a3 3 0 0 0-3-3H9.813Z"
              className="stroke-slate-400 dark:stroke-slate-300"
            ></path>
            <path
              d="M3 5s.35-.47 1.25-.828m9.516-.422c2.078.593 3.484 1.5 3.484 1.5"
              className="stroke-teal-400"
            ></path>
          </svg>
          <p className="text-sm font-medium text-slate-700 dark:text-slate-200">
            Scroll to view various categories
          </p>
        </div>
        <ul className="flex w-full gap-6 py-8 overflow-x-auto snap-x">
          {/* Initial tag for all topics */}
          <div className="scroll-ml-6 snap-normal snap-start shrink-0">
            <Tag activeTag={selectedTag} tag="" cb={() => setSelectedTag('')} />
          </div>
          {tags &&
            tags.map((tag) => (
              <div
                key={tag}
                className="scroll-ml-6 snap-normal snap-start shrink-0"
              >
                <Tag
                  activeTag={selectedTag}
                  tag={tag}
                  cb={() => setSelectedTag(tag)}
                  />
              </div>
            ))}
        </ul>

        <div className="absolute w-8 h-16 top-[40px] left-0 bg-gradient-to-r from-champagne dark:from-dark"></div>
        <div className="absolute w-8 h-16 top-[40px] right-0 bg-gradient-to-l from-champagne dark:from-dark"></div>
      </div>
      <div className="min-h-screen space-y-12">
        {!filteredPosts.length && (
          <div className="w-full mx-auto rounded-lg bg-[#F8FAFC] dark:bg-midnight p-4">
            <p className="flex items-center justify-center text-2xl">
              No articles found{' '}
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
    </PageLayout>
  );
}

export const getStaticProps: GetStaticProps = async ({ preview = false}) => {
  const data = await getAllSortedBlogsData();
  const { tags, posts } = convertToPostList(data);

  let blogPosts = posts;

  if (!preview || preview === undefined) {
    blogPosts = blogPosts.filter((post) => post.isPublic === true);
  }

  const featuredPost = blogPosts[0];

  return {
    props: {
      featuredPost,
      posts: blogPosts.slice(1),
      tags
    },
    revalidate: 30
  };
};
