import { getBlogData, getAllBlogIds } from "@lib/notion/blogs";
import Image from "next/image";
import Link from "next/link";
import { GetStaticProps, GetStaticPaths } from "next";
import { getMDXComponent } from "mdx-bundler/client";
import { BlogData } from "@localTypes/blog";
import { useMemo } from "react";
import { ParsedUrlQuery } from "querystring";
import { PostImage } from "../../components/Image/PostImage";
import components from "@components/MDXComponents";

interface Props {
  blog: BlogData;
}

export default function Post({ blog }: Props) {
  const Component = useMemo(
    () => getMDXComponent(blog.contentHtml!),
    [blog.contentHtml]
  );

  return (
    <div className="flex justify-center md:mt-10">
      <div className="w-full max-w-4xl md:mx-10 mb-10 md:mb-20">
        <article className="prose lg:prose-lg max-w-none dark:prose-light py-5">
          <small className="flex justify-center align-middle text-teal-grey dark:text-dark-yellow my-5">
            <span>
              <Image
                src="/images/profile.png"
                alt="Meagan Waller"
                width={28}
                height={28}
                className="rounded-full"
              />
            </span>
            <span>&nbsp;Meagan</span>
            <span>&nbsp;&bull;&nbsp;</span>
            <span>{blog.posted}</span>
            <span>&nbsp;&bull;&nbsp;</span>
          </small>
          <h1 className="text-center">
            <div className="mb-4">{blog.title}</div>
            <div className="text-xl text-grey-600 dark:text-gray-400 font-normal italic">
              {blog.description}
            </div>
          </h1>
          <p className=""></p>
          <PostImage
            src={blog.image}
            alt={`${blog.title} Cover`}
            width={900}
            height={500}
            priority={true}
          />
          <Component className="my-10 leading-relaxed" components={components} />
        </article>
        <div className="text-teal-grey hover:underline text-md md:text-xl">
          <Link href="/blog">← Read More</Link>
        </div>
      </div>
    </div>
  );
}

interface Params extends ParsedUrlQuery {
  slug: string;
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const paths = await getAllBlogIds();
  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params,
}) => {
  const blogData = await getBlogData(params!.slug as string);

  if (!blogData || !blogData.contentHtml) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      blog: blogData,
    },
    revalidate: 60,
  };
};
