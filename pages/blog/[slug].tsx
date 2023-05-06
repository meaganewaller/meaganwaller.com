import React, { useState, useEffect } from 'react';
import { GetStaticProps } from 'next';
import Prism from "prismjs";
import Window from '@components/Elements/Window';
import { formatDate } from "@lib/utils/date";
import { NotionBlockRenderer } from "@components/notion/NotionBlockRenderer";
import { Blog as PostType, blogApi } from "@lib/blogApi";
import MenuBar from "@components/Elements/MenuBar";
import { useWindowSize } from "@lib/hooks/useWindowSize";

interface Props {
  post: PostType;
  postContent: any[];
}

export default function Post({
  post: { title, description, createdAt, slug },
  postContent,
  previousPathname,
}: Props & { previousPathname: string }) {
  const size = useWindowSize();

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <div className="bg-stars bg-repeat h-screen">
      <MenuBar />
      <Window
        active={true}
        title={title}
        x={size.width/2 - (size.width * .9 / 2)}
        y={40}
        zIndex="2"
        width={`${size.width * .9}px`}
      >
        <div className="space-y-12 place-content-center">
          <div className="w-full mx-auto rounded-lg p-4">
            <div className="pb-32">
              <div className="mt-16 lg:mt-32">
                <main className="mx-auto">
                  <article className="pt-2">
                    <header className="mb-[40px] flex h-[64px] flex-col content-center items-center border-b border-solid text-tertiary font-mono leading-relaxed">
                      <div className="page-meta">
                        <span id="date">{formatDate(createdAt)}</span>
                      </div>
                      <h1 className="text-xl font-semibold" style={{ margin: "0 0 1rem" }}>{title}</h1>
                    </header>
                    <section className="font-sans text-lg leading-loose">
                      {postContent.map((block) => (
                        <NotionBlockRenderer key={block.id} block={block} />
                      ))}
                    </section>
                  </article>
                </main>
              </div>
            </div>
          </div>
        </div>
      </Window>
    </div>
  )
}

export const getStaticProps: GetStaticProps<Props, { slug: string }> = async (context) => {
  const slug = context.params?.slug;
  const allPosts = await blogApi.getPosts();
  const post = allPosts.find((post) => post.slug === slug);

  if (!post) {
    return {
      notFound: true,
    };
  }

  const postContent = await blogApi.getPost(post.id);

  return {
    props: {
      post,
      postContent,
    },
    revalidate: 10,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await blogApi.getPosts();

  return {
    paths: posts.map((post) => ({ params: { slug: post.slug } })),
    fallback: 'blocking',
  };
};


// import { GetStaticPaths, GetStaticProps } from "next";
// import { ArticleJsonLd, NextSeo } from "next-seo";
// import Prism from "prismjs";
// import { useEffect } from "react";
//
// import Link from 'next/link';
// import { AiFillTwitterCircle } from "react-icons/ai";
// import { BlogLayout } from "@layouts/BlogLayout";

// import { Blog as PostType, blogApi } from "@lib/blogApi";
//
// type Props = {
//   post: PostType;
//   postContent: any[];
// };
//
// export default function Post({
//   post: { title, description, createdAt, slug },
//   postContent,
//   previousPathname,
// }: Props & { previousPathname: string }) {
//   const url = `${process.env.NEXT_PUBLIC_URL}/blog/${slug}`;
//   const openGraphImageUrl = `${process.env.NEXT_PUBLIC_URL}/api/og?title=${title}&description=${description}`;
//
//   useEffect(() => {
//     Prism.highlightAll();
//   }, []);
//
//   return (
//     <>
//       <NextSeo
//         title={title}
//         description={description}
//         canonical={url}
//         openGraph={{
//           images: [{ url: openGraphImageUrl }],
//         }}
//       />
//       <ArticleJsonLd
//         url={url}
//         images={[openGraphImageUrl]}
//         title={title}
//         datePublished={createdAt}
//         authorName="Meagan Waller"
//         description={description}
//       />
//       <BlogLayout
//       meta={{ title, description, date: createdAt }}
//       previousPathname={previousPathname}
//       >
//         <div className="pb-32">
//           {postContent.map((block) => (
//             <NotionBlockRenderer key={block.id} block={block} />
//           ))}
//           <Link
//             className="group block text-center text-xl font-semibold md:text-3xl no-underline mt-32"
//             href={url}
//           >
//             <h4 className="m-5 flex cursor-pointer flex-col place-items-center duration-200 ease-in-out group-hover:text-blue-400 group-hover:fill-blue-400 fill-white sm:m-20">
//               <AiFillTwitterCircle className="m-6 h-10 w-10 transform transition-transform group-hover:-rotate-12" />
//               Click here to share this article with your friends on Twitter if you liked it.
//             </h4>
//           </Link>
//         </div>
//       </BlogLayout>
//     </>
//   )
// }
//
// export const getStaticProps: GetStaticProps<Props, { slug: string }> = async (context) => {
//   const slug = context.params?.slug;
//   const allPosts = await blogApi.getPosts();
//   const post = allPosts.find((post) => post.slug === slug);
//
//   if (!post) {
//     return {
//       notFound: true,
//     };
//   }
//
//   const postContent = await blogApi.getPost(post.id);
//
//   return {
//     props: {
//       post,
//       postContent,
//     },
//     revalidate: 10,
//   };
// };
//
// export const getStaticPaths: GetStaticPaths = async () => {
//   const posts = await blogApi.getPosts();
//
//   return {
//     paths: posts.map((post) => ({ params: { slug: post.slug } })),
//     fallback: 'blocking',
//   };
// };
//
// // import { parseISO } from "date-fns";
// // import { getPlaiceholder } from "plaiceholder";
//
// // import PostLayout from "@layouts/Post";
// // import { getBlockChildren, getBlogPosts, getPage } from "@lib/notion";
// // import { NotionContent } from "@lib/render";
// // import { getReadingTime } from "@lib/utils";
//
// // import type { GetStaticPropsContext, GetStaticPropsResult } from "next";
//
// // export default function Blog({ blocks, slug, title, description, cover, publishedAt }) {
// //   if (!blocks) return null;
//
// //   return (
// //     <PostLayout
// //       title={title}
// //       slug={slug}
// //       description={description}
// //       cover={cover}
// //       publishedAt={publishedAt}
// //       readingTime={getReadingTime(blocks).text}
// //     >
// //       <NotionContent blocks={blocks} />
// //     </PostLayout>
// //   );
// // }
//
// // export async function getStaticProps({ preview = false, params: { slug } }: GetStaticPropsContext): Promise<GetStaticPropsResult<any>> {
// //   const entries = await getBlogPosts();
//
// //   const pageID = entries.posts.children.find(({ slug: sl }) => sl === slug)?.id;
// //   if (!pageID) return { notFound: true };
//
// //   const post = await getPage(pageID);
//
// //   const { published, title: postTitle, description: postDescription, date, cover: coverImage } = post.properties;
//
// //   if (!published[published.type] && !preview) return { notFound: true };
//
// //   const blocks = await getBlockChildren(post.id);
// //   const title = postTitle[postTitle.type].map(({ plain_text }) => plain_text).join(" ");
// //   const description = postDescription[postDescription.type].map(({ plain_text }) => plain_text).join(" ");
// //   const publishedAt = parseISO(date[date.type].start).getTime();
// //   const coverURL = coverImage[coverImage.type][0]?.file.url;
// //   const cover = coverURL
// //     ? {
// //         url: coverURL,
// //         ...(await getPlaiceholder(coverURL, { size: 64 }).then(({ img, base64 }) => {
// //           return { width: img.width, height: img.height, placeholder: base64 };
// //         })),
// //       }
// //     : null;
//
// //   return { props: { blocks, slug, title, description, cover, publishedAt }, revalidate: 300 };
// // }
//
// // export async function getStaticPaths() {
// //   const entries = await getBlogPosts();
//
// //   return {
// //     paths: entries.posts.children.map(({ slug }) => {
// //       return { params: { slug } };
// //     }),
// //     fallback: "blocking",
// //   };
// // }
//
//
// // // import { NotionBlockResponseList, BlogCategory, BlogPost, NotionBlockResponse } from "@localTypes/schema";
// // // import { GetStaticPaths, NextPage, GetStaticProps } from "next";
// // // import { getBlogBlocks, getBlogList, getCategoryList } from "services/notion";
// // // import MainLayout from "@layouts/Main";
// // // import { meta } from "@data/meta";
// // // import { parseISO, format } from "date-fns";
// // // import Image from "next/image";
// // // import BlogComponent from "@components/Blog/Post";
// // // import Link from "next/link";
// // // import { TocItem } from "@components/Blog/TocItem";
// // //
// // // interface BlogPageProps {
// // //   blocks: NotionBlockResponseList
// // //   title: string
// // //   description: string
// // //   image?: string
// // //   published: string
// // //   categories: BlogCategory[]
// // //   blogs: BlogPost[]
// // // }
// // //
// // // export default function Post({ blocks, title, description, image, published, categories, blogs }: BlogPageProps) {
// // //   return (
// // //     <MainLayout title={`${meta.title} - ${title} `} description={description} image={image} date={new Date(published).toISOString()} type="article" categories={categories} blogs={blogs}>
// // //       <article className="mx-auto mb-16 flex min-h-screen w-full max-w-2xl flex-col items-start justify-center">
// // //         <div className="prose grid flex-1 grid-cols-1 gap-x-8 font-sans dark:prose-dark md:grid-cols-[1fr,minmax(auto,640px),1fr] md:[&>*]:col-start-2">
// // //           <div>
// // //             <header className="w-full font-sans">
// // //               <h1 className="mt-6 mb-2 flex items-center box-decoration-clone bg-clip-text text-center font-sans text-[2.5rem] font-semibold motion-reduce:transition-none">
// // //                 {title}
// // //               </h1>
// // //               <div className="mt-2 flex w-full flex-col items-start justify-between md:flex-row md:items-center">
// // //                 <div>
// // //                   <div className="flex items-center">
// // //                     <Image alt={meta.title} height={24} width={24} src={"/static/images/header.svg"} className="rounded-full" />
// // //                     <time className="ml-2 text-sm" date-time={parseISO(published)}>
// // //                       Meagan Waller / { format(parseISO(published), "MMMM dd, yyyy")}
// // //                     </time>
// // //                   </div>
// // //                 </div>
// // //                   <p className="min-w-32 mt-2 text-sm md:mt-0">
// // //                   XXX words &middot; XX min read
// // //                 </p>
// // //               </div>
// // //             </header>
// // //             <BlogComponent blocks={blocks} />
// // //           </div>
// // //           <div className="sticky top-24 !col-start-3 mt-8 ml-3 max-w-[14rem] flex-col space-y-2 self-start text-base xl:flex">
// // //             <p className="mb-0 text-sm uppercase">On this page</p>
// // //             {/* {headings.map((heading: NotionBlockResponse) => ( */}
// // //             {/*   <TocItem key={heading.id} heading={heading} />  */}
// // //             {/* ))} */}
// // //           </div>
// // //         </div>
// // //         <div className="flex w-full justify-end py-4 font-mono">
// // //           <Link href="#" rel="noopener noreferrer">Suggest a change</Link>
// // //         </div>
// // //       </article>
// // //     </MainLayout>
// // //   )
// // // }
// // //
// // // export const getStaticPaths: GetStaticPaths = async () => {
// // //   const posts = await getBlogList()
// // //
// // //   return {
// // //     paths: posts.map(({ url }) => url),
// // //     fallback: false,
// // //   }
// // // }
// // //
// // // export const getStaticProps: GetStaticProps = async (context) => {
// // //   const posts = await getBlogList()
// // //   const categories = await getCategoryList()
// // //   const post = posts.find(({ url }) =>
// // //
// // //     url.includes(context.params?.slug as string))
// // //
// // //   if (!post) return { notFound: true }
// // //
// // //   const blocks = await getBlogBlocks(post.id)
// // //   return {
// // //     props: {
// // //       blogs: posts,
// // //       blocks,
// // //       categories,
// // //       title: post.title,
// // //       description: post.description,
// // //       image: post.image,
// // //       published: post.created,
// // //       category: post.category,
// // //     },
// // //     revalidate: 240
// // //   }
// // // }
