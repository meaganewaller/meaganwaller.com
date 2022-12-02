import PageLayout from "@components/PageLayout";
import BlogItem from "@components/Items/BlogItem";
import { GetStaticProps } from "next";
import { getPublishedPosts } from "@lib/notion/blogs";
import { ReactElement } from "react";
import { BlogData } from "@localTypes/blog";
import { v4 } from 'uuid';

interface Props {
  allBlogsData: BlogData[];
}

export default function index({ allBlogsData }: Props): ReactElement {
  return (
    <PageLayout title="Blogs">
      <section id="Blog" className="w-full flex justify-center">
        <div className="w-full max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-5">My blog</h1>
          <div id="recentBlogs" className="flex flex-col">
            <div className="grid place-items-center">
              <ul className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-24 p-5 list-none">
                {allBlogsData.map((blogData) => {
                  <li className="" key={blogData.slug}>
                    <BlogItem key={v4} post={blogData} />
                  </li>
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allBlogsData = await getPublishedPosts();
  return {
    props: {
      allBlogsData,
    },
  };
};
// import { bundleMDX } from "mdx-bundler";
// import remarkPrism from 'remark-prism';
// import { getAllBlogSlugs, getPostData } from "@lib/notion/blogs";
// import BlogContainer from "@components/BlogContainer";

// import type {
//   GetStaticProps,
//   GetStaticPaths,
//   GetStaticPathsResult,
// } from 'next'

// import { BlogData } from "@localTypes/blog";

// const Blog: React.FC<BlogData> = (props) => {
//   return <BlogContainer {...props} />;
// };

// import { getAllBlogSlugs, getPostData } from "@lib/notion/blogs";
// import { useMemo } from "react";
// import { GetStaticProps, GetStaticPaths } from "next";

// import { getMDXComponent } from "mdx-bundler/client";
// import PageLayout from "@components/PageLayout";
// import ScrollIndicator from "@components/ScrollIndicator";
// import components from "@components/MDXComponents";
// import CDbutton from "@components/CDButton";
// import { ParsedUrlQuery } from "querystring";

// interface Props {
//   blog: BlogData;
// }

// export default function Post({ blog }: Props) {
//   const Component = useMemo(
//     () => getMDXComponent(blog.contentHtml!),
//     [blog.contentHtml]
//   );

//   const publishedOn = new Date(blog.posted).toLocaleDateString(
//     'en',
//     {
//       year: 'numeric',
//       month: 'long',
//       day: 'numeric',
//     }
//   )

//   const modifiedDate = new Date(blog.updated).toLocaleDateString(
//     'en',
//     {
//       year: 'numeric',
//       month: 'long',
//       day: 'numeric',
//     }
//   )

//   return (
//     <PageLayout title={blog.title}>
//       <ScrollIndicator>
//         <div className="text-neutral-800 dark:text-neutral-400">
//           <article className="col-span-9 mt-12">
//             <div className="">
//               <div className="">
//                 <div className="mb-10 text-left">
//                   <div className="mb-2 flex space-x-2 text-sm text-slate-500 dark:text-slate-500">
//                     <p className="tx-sm m-0 text-slate-500 dark:text-slate-500">
//                       {publishedOn}
//                     </p>
//                     <p className="m-0 text-sm text-slate-500 dark:text-slate-500">
//                        •
//                     </p>
//                     {/* <ViewCounter slug={slug} /> */}
//                     {/* <LikeButton slug={slug} /> */}
//                     {publishedOn !== modifiedDate && (
//                       <p className="mt-0 text-xs text-slate-500 dark:text-slate-500">
//                         (Updated on {modifiedDate})
//                       </p>
//                     )}
//                   </div>
//                 </div>
//                 <div className="w-full min-w-full space-y-6">
//                   <Component className="my-10 leading-relaxed" components={components} />
//                 </div>
//               </div>
//             </div>
//           </article>
//         </div>
//         <span className="mt-12">
//           <CDbutton />
//         </span>
//       </ScrollIndicator>
//     </PageLayout>
//   )
// }

// interface Params extends ParsedUrlQuery {
//   slug: string;
// }

// export const getStaticPaths: GetStaticPaths<Params> = async () => {
//   const paths = await getAllBlogSlugs();

//   return {
//     paths,
//     fallback: 'blocking',
//   };
// }

// export const getStaticProps: GetStaticProps<Props, Params> = async ({ params }) => {
//   const blogData = await getPostData(params!.slug as string);

//   if (!blogData || !blogData.contentHtml) {
//     return {
//       notFound: true,
//     };
//   }

//   return {
//     props: {
//       blog: blogData,
//     },
//     revalidate: 60,
//   };
// };
