import { compareDesc } from 'date-fns';
import { GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';

import { Badge } from '@components/Badge';
import { PageLayout } from '@components/PageLayout';
import { BlogPreview } from '@components/Blog/BlogPreview';
import { Blog, blogApi } from '@lib/blogApi';

const seoTitle = 'Blog';
const seoDescription =
  'A collection of articles and tutorials about web development, programming, and other topics.';

interface Props {
  posts: Blog[];
  tags: Array<string>;
}

export default function BlogIndex({ posts, tags }: Props) {
  return (
    <>
      <NextSeo
        title={seoTitle}
        description={seoDescription}
        canonical={`${process.env.NEXT_PUBLIC_URL}/blog`}
        openGraph={{
          images: [{ url: `${process.env.NEXT_PUBLIC_URL}/api/og?title=${seoTitle}` }],
        }}
      />
      <PageLayout
        title="Notes on software, building products, and other stuff."
        intro="All of my thoughts on programming, building products, leadership, travelling, whisky, and other random stuff. Not structured."
      >
        <h3 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">Tags</h3>
        <div className="mt-4 flex max-w-xl flex-wrap gap-1 font-mono">
          {tags.map((tag) => (
            <Badge key={tag} href={`/tags/${tag}`}>
              #{tag}
            </Badge>
          ))}
        </div>

        <div className="mt-24 md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
          <div className="flex max-w-3xl flex-col space-y-16">
            {posts.map((post: Blog) => (
              <BlogPreview key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </PageLayout>
    </>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const posts = await blogApi.getPosts('desc');

  return {
    props: {
      posts,
      tags: Array.from(new Set(posts.map((post) => post.tags).flat())),
    },
    revalidate: 10,
  };
};

// import Head from 'next/head';

// import BlogPost from "@components/Elements/BlogPost";
// import { loadPage } from "@lib/loadPage";
// import { blogIndex } from "@lib/notion";

// import type { Blog } from "@lib/notion";
// import type { GetStaticProps, NextPage } from "next";
// import type { getPageInfo, Page, POSTS } from "@lib/notion";
// import { Title, Link, Container, Grid, Card, Image, Text } from "@components/index";

// interface BlogProps {
//   pages: Page[];
// }

// const Blog: NextPage<BlogProps> = ({pages}) => {
//   return (
//     <Container maxWidth={1200}>
//       <Head>
//         <title>Blog</title>
//         <meta property="og:title" content="Blog - Meagan Waller" />
//       </Head>
//        <Container mb="3rem">
//         <Title>Blog</Title>
//         <Text textAlign="center">
//           Posts about code, projects and various other things.
//         </Text>
//       </Container>
//       <Grid gridTemplateColumns={['1fr', '1fr 1fr']} gridGap={['3rem', '2rem']}>
//         {pages.map(({ title, uri, date, cover }, i) => (
//           <Link key={i} href={uri}>
//             <Card padding={[0]} margin={[0]}>
//               <Grid
//                 gridTemplateColumns={'1fr'}
//                 justifyItems={['center', 'flex-start']}
//                 gridGap="1rem"
//               >
//                 {cover && (
//                   <BlogImage
//                     src={cover}
//                     width="100%"
//                     height="auto"
//                     alt={title}
//                   />
//                 )}
//                 <Container
//                   gridGap=".5rem"
//                   alignItems={['center', 'flex-start']}
//                 >
//                   <Title
//                     as="h2"
//                     fontSize="1.5rem"
//                     textAlign={['center', 'left']}
//                     margin={0}
//                   >
//                     {title}
//                   </Title>
//                   <Text margin={0} fontWeight="initial" fontSize=".9rem">
//                     {date}
//                   </Text>
//                 </Container>
//               </Grid>
//             </Card>
//           </Link>
//         ))}
//       </Grid>
//     </Container>
//   );
// };

// export const getStaticProps = async (): Promise<
//   GetStaticPropsResult<BlogProps>
// > => {
//   const pages: Page[] = [];
//   await Promise.all(
//     Object.keys(POSTS).map(async (key) => {
//       const { uri, date } = POSTS[key as keyof typeof POSTS];
//       const page = await notion.getPage(uri);
//       if (page) {
//         const info = getPageInfo(page);
//         if (info.title !==  'Blog') {
//           pages.push({
//             ...info,
//             date,
//             uri: `/blog/${key}`,
//           });
//         }
//       }
//     }),
//   );

//   return {
//     props: {
//       pages: pages.sort(
//         (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
//       ),
//     },
//   };
// };

// export default Blog;

// // export type BlogWithDesc = {
// //   desc: ExtendedRecordMap;
// // } & Blog;

// // export type PageProps = {
// //   blogs: BlogWithDesc[],
// // };

// // export const getStaticProps: GetStaticProps<PageProps> = () =>
// //   Promise.all([
// //     blogIndex()
// //     .then((blogs) => blogs.filter(({ published }) => published))
// //     .then((blogs) => Promise.all(blogs.map(async (blog) => ({
// //       ...blog,
// //       desc: await loadPage(blog.id)
// //       .then((recordMap) => {
// //         const blockArray = Object.entries(recordMap.block);
// //         const divIndex = blockArray.findIndex(([_, { value: { type  } }]) =>  type ===  'divider');
//         return {
//           ...recordMap,
//           block: Object.fromEntries(blockArray.slice(0, divIndex)),
//         };
//       }),
//     })))),
//   ])
//   .then(([pages, blogs]) => ({
//     blogs: blogs,
//   }))
//   .then((props) => ({
//     props,
//     revalidate: 900,
//   }));

// const Index: NextPage<PageProps> = ({ blogs }) => {
//   return (<>
//     <Head>
//       <title>Blog</title>
//     </Head>
//     <h1 className="text-3xl font-bold tracking-tight text-black dark:text-white mb-8">Blog</h1>
//     <div>
//       {blogs.map((blog) => (
//         <BlogPost key={blog.id} blog={blog} />
//       ))}
//     </div>
//   </>);
// };

// export default Index;
// // import { parseISO } from "date-fns";
// // import { NextSeo } from "next-seo";
// // import { useState } from "react";
// // import { FiSearch } from "react-icons/fi";

// // import Container from "@components/Container";
// // import BlogPost from "@components/Elements/BlogPost";
// // import { meta } from "@data/meta";
// // //import { getDatabase, getBlogPosts } from "@lib/notion";

// // import type { Page } from "@jitl/notion-api";
// // import type { GetStaticPropsContext, GetStaticPropsResult } from "next";

// // const url = meta.url + "/blog";
// // const title = "Posts";
// // const description = meta.description;

// // export default function Posts({ posts }) {
// //   const [searchValue, setSearchValue] = useState("");
// //   const filteredPosts = posts
// //   .sort((a, b) => {
// //     return Number(b.publishedAt) - Number(a.publishedAt);
// //   })
// //   .filter((post) => {
// //     return (
// //       post.title.toLowerCase().includes(searchValue.toLowerCase()) || post.description?.toLowerCase().includes(searchValue.toLowerCase())
// //     );
// //   });

// //   return (
// //     <Container>
// //       <NextSeo
// //         title={title}
// //         description={description}
// //         canonical={url}
// //         openGraph={{
// //           url,
// //           title,
// //           description,
// //         }}
// //       />
// //       <div className="mx-auto mb-16 flex w-full max-w-4xl flex-col items-start justify-center">
// //         <h1 className="mb-8 text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl">Posts</h1>
// //         <div className="relative mb-4 w-full">
// //           <input
// //             aria-label={`Search through ${filteredPosts.length} articles`}
// //             type="text"
// //             onChange={(e) => setSearchValue(e.target.value)}
// //             placeholder={`Search through ${filteredPosts.length} articles`}
// //             className="block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-800 dark:bg-gray-800 dark:text-gray-100"
// //           />
// //           <FiSearch className="absolute right-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300" />
// //         </div>
// //         {!filteredPosts.length && <p className="my-8 mb-4 self-center text-gray-600 dark:text-gray-400">No posts found ;-;</p>}
// //         <div className="divide-y divide-gray-200 dark:divide-gray-700">
// //           {filteredPosts.map((post) => (
// //             <BlogPost key={post.title} {...post} />
// //           ))}
// //         </div>
// //       </div>
// //     </Container>
// //   );
// // }

// // export async function getStaticProps({ preview }: GetStaticPropsContext): Promise<GetStaticPropsResult<any>> {
// //   const entries = await getBlogPosts();
// //   const posts = await getDatabase(entries.posts.id).then((posts) => {
// //     return posts.results
// //       .filter(({ properties: { published } }: Page) => {
// //         return published[published.type] || preview || false;
// //       })
// //       .map(({ properties: { title: postTitle, description: postDescription, slug: postSlug, date } }: Page) => {
// //         return {
// //           title: postTitle[postTitle.type].map(({ plain_text }) => plain_text).join(" "),
// //           description: postDescription[postDescription.type].map(({ plain_text }) => plain_text).join(" "),
// //           slug: postSlug,
// //           publishedAt: parseISO(date[date.type].start).getTime(),
// //         };
// //       })
// //       .sort((a, b) => {
// //         return Number(b.publishedAt) - Number(a.publishedAt);
// //       });
// //   });

// //   return { props: { posts }, revalidate: 300 };
// // }
// // // import { parseISO } from "date-fns";
// // // import { useState } from "react";
// // // import { FiSearch } from 'react-icons/fi';
// // //
// // // import { BlogCategories } from '@components/BlogCategories';
// // // import BlogPost from '@components/Elements/BlogPost';
// // // import { meta } from '@data/meta';
// // // import MainLayout from '@layouts/Main';
// // // import { getDatabase, getDatabaseEntries } from '@lib/notion';
// // // import { getCategoryList } from 'services/notion';
// // //
// // // import type { Page } from '@jitl/notion-api';
// // // import type { GetStaticPropsContext, GetStaticPropsResult } from 'next';
// // //
// // // const url = meta.url + '/blog';
// // // const title = `${meta.title} - Blog`;
// // // const description = meta.description;
// // //
// // // export default function BlogIndex({ categories, posts }) {
// // //   const [searchValue, setSearchValue] = useState('');
// // //   const filteredPosts = posts
// // //     .sort((a, b) => {
// // //       return Number(b.date) - Number(a.date);
// // //     })
// // //     .filter((post) => {
// // //       return (
// // //         post.title.toLowerCase().includes(searchValue.toLowerCase()) || post.description?.toLowerCase().includes(searchValue.toLowerCase())
// // //       );
// // //     });
// // //
// // //   return (
// // //     <MainLayout categories={categories} blogs={posts} title={title}>
// // //       <div className="mx-auto mb-16 flex w-full max-w-4xl flex-col items-start justify-center">
// // //         <BlogCategories />
// // //         <div className="relative mb-4 w-full">
// // //           <input
// // //             aria-label={`Search through ${filteredPosts.length} articles`}
// // //             type="text"
// // //             onChange={(e) => setSearchValue(e.target.value)}
// // //             placeholder={`Search through ${filteredPosts.length} articles`}
// // //             className="block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-800 dark:bg-gray-800 dark:text-gray-100"
// // //           />
// // //           <FiSearch className="absolute right-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300" />
// // //         </div>
// // //         {!filteredPosts.length && <p className="my-8 mb-4 self-center text-gray-600 dark:text-gray-400">No posts found</p>}
// // //         <div className="divide-y divide-gray-200 dark:divide-gray-700">
// // //           {filteredPosts.map((post) => (
// // //             <BlogPost key={post.title} {...post} />
// // //           ))}
// // //         </div>
// // //       </div>
// // //     </MainLayout>
// // //   );
// // // }
// // //
// // // export async function getStaticProps({ preview }: GetStaticPropsContext): Promise<GetStaticPropsResult<any>> {
// // //   const blogDatabase = await getDatabase(process.env.NOTION_BLOG_DATABASE_ID);
// // //   const categories = await getCategoryList();
// // //   const posts = blogDatabase.results
// // //     .filter(({ properties: { published } }: Page) => {
// // //       return published[published.type] || preview || false;
// // //     })
// // //     .map(({ properties: { title: postTitle, description: postDescription, slug: postSlug, date } }: Page) => {
// // //       return {
// // //         title: postTitle[postTitle.type].map(({ plain_text }) => plain_text).join(' '),
// // //         description: postDescription[postDescription.type].map(({ plain_text }) => plain_text).join(' '),
// // //         slug: postSlug,
// // //         publishedAt: parseISO(date[date.type].start).getTime(),
// // //       };
// // //     })
// // //     .sort((a, b) => {
// // //       return Number(b.publishedAt) - Number(a.publishedAt);
// // //     });
// // //
// // //   return { props: { categories, posts }, revalidate: 300 };
// // // }
// // //
// // // // import { BlogCategory, BlogPost } from '@localTypes/schema';
// // // // import { getBlogList, getCategoryList } from 'services/notion';
// // // // import { BlogCategories } from '@components/BlogCategories';
// // // // import Link from 'next/link';
// // // // import MainLayout from '@layouts/Main';
// // // // import { postImageUrl } from 'services/cloudinary/buildUrl';
// // // // import Image from 'next/image';
// // // // import { meta } from '@data/meta';
// // // // import FeaturedPost from '@components/Elements/FeaturedPost';
// // // // import formatDate from '@lib/utils/date';
// // // //
// // // // interface BlogPageProps {
// // // //   blogs: BlogPost[];
// // // //   categories: BlogCategory[];
// // // // }
// // // //
// // // // export default function BlogPage({ blogs, categories }: BlogPageProps) {
// // // //   return (
// // // //     <MainLayout
// // // //       categories={categories}
// // // //       blogs={blogs}
// // // //       title={`${meta.title} - Blog`}
// // // //     >
// // // //       <BlogCategories />
// // // //       <div className="relative z-1 py-12 lg:py-20">
// // // //         <div className="w-[calc(100%_-_2.5rem)] lg:w-[calc(100%_-_4rem)] mx-auto max-w-lg md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
// // // //           <div className="grid grid-cols-12 gap-y-8 lg:gap-12">
// // // //             <FeaturedPost featuredPost={blogs[0]} />
// // // //             {blogs.slice(1).map((post) => (
// // // //               <article
// // // //                 className="story col-span-12 lg:col-span-4"
// // // //                 key={post.id}
// // // //               >
// // // //                 <Link className="story__img rounded" href={post.url}>
// // // //                   <figure>
// // // //                     <Image
// // // //                       src={postImageUrl(post.image)}
// // // //                       alt={post.description}
// // // //                       width={1200}
// // // //                       height={630}
// // // //                     />
// // // //                   </figure>
// // // //                 </Link>
// // // //
// // // //                 <div className="story__content">
// // // //                   <div className="mb-2 lg:mb-3">
// // // //                     <Link className="story__category" href="#">
// // // //                       <svg
// // // //                         className="icon mr-1 lg:mr-1.5"
// // // //                         aria-hidden="true"
// // // //                         viewBox="0 0 16 16"
// // // //                       >
// // // //                         <g
// // // //                           strokeWidth="1"
// // // //                           stroke="currentColor"
// // // //                           fill="none"
// // // //                           strokeLinecap="round"
// // // //                           strokeLinejoin="round"
// // // //                         >
// // // //                           <circle cx="8" cy="7" r="1.5"></circle>
// // // //                           <path d="M12.121,14.263a7.5,7.5,0,1,0-8.242,0"></path>
// // // //                           <path d="M12.377,11.32a5.5,5.5,0,1,0-8.754,0"></path>
// // // //                           <path d="M6.605,10.5H9.4a1,1,0,0,1,1,1.1L10,15.5H6l-.39-3.9A1,1,0,0,1,6.605,10.5Z"></path>
// // // //                         </g>
// // // //                       </svg>
// // // //                       <i className="not-italic">{post.category}</i>
// // // //                     </Link>
// // // //                   </div>
// // // //
// // // //                   <div className="text-component">
// // // //                     <h2 className="story__title">
// // // //                       <Link href={post.url}>{post.title}</Link>
// // // //                     </h2>
// // // //                   </div>
// // // //
// // // //                   <div className="story__author mt-3 lg:mt-5">
// // // //                     <Link className="hidden" href="#">
// // // //                       <Image
// // // //                         src={`/static/images/header.svg`}
// // // //                         width={600}
// // // //                         height={600}
// // // //                         alt="Author picture"
// // // //                       />
// // // //                     </Link>
// // // //
// // // //                     <div className="leading-extra-tight">
// // // //                       <address className="story__author-name hidden">
// // // //                         <a href="#" rel="author">
// // // //                           Meagan Waller
// // // //                         </a>
// // // //                       </address>
// // // //                       <p className="story__meta">
// // // //                         <time>{formatDate(new Date(post.created))}</time>{' '}
// // // //                         &mdash; 5 min read
// // // //                       </p>
// // // //                     </div>
// // // //                   </div>
// // // //                 </div>
// // // //               </article>
// // // //             ))}
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </MainLayout>
// // // //   );
// // // // }
// // // //
// // // // export const getStaticProps = async () => {
// // // //   const blogs = await getBlogList();
// // // //   const categories = await getCategoryList();
// // // //   return { props: { blogs, categories }, revalidate: 240 };
// // // // };
