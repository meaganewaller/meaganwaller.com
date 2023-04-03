import React from "react";
import Link from "next/link";
import Image from "next/image";

// import { BlogPost } from "@localTypes/schema"
import { postImageUrl } from "services/cloudinary/buildUrl";
import formatDate from "@lib/utils/date";
import LandingSectionTitle from "./SectionTitle";

// type Props = {
//   blogs: BlogPost[]
// }
//
// type PostProps = {
//   post: BlogPost
// }
// function FeaturedPost({ post }: PostProps) {
//   return (
//     <div role="listitem" className="flex h-full pb-0 flex-col text-center lg-max:pb-12">
//       <Link href={post.url} className="max-w-full inline-block no-underline">
//         <div className="mb-0">
//           <div className="relative w-full h-0 pt-[60%]">
//             <Image
//               src={postImageUrl(post.image)}
//               width={2048}
//               height={2048}
//               className="absolute top-0 left-0 right-0 bottom-0 w-full object-cover"
//               sizes="(max-width: 479px) 92vw, (max-width: 767px) 91vw, 44vw"
//               alt={post.description}
//               />
//           </div>
//         </div>
//         <div className="pr-8 pb-12 pl-0 text-left dark:text-secondary-light lg-max:pr-0 sm-max:pb-0">
//           <div className="mb-3 font-mono text-xs leading-extra-tight font-medium uppercase md-max:-mt-3">{post.category}</div>
//           <div className="font-sans text-3xl leading-extra-tight font-medium sm-max:text-2xl">{post.title}</div>
//           <div className="mb-0 font-sans text-lg leading-5 font-normal mt-6 md-max:text-[18px] md-max:mt-4 sm-max:mt-4">{post.description}</div>
//         </div>
//       </Link>
//     </div>
//   )
// }
//
// function GridPost({ post}: PostProps) {
//   return (
//     <div role="listitem" className="self-stretch flex-shrink-0 flex-grow-0 basis-1/2 dotted-left">
//       <Link href={post.url} className="no-underline dark:text-secondary-light dotted-spaced md-max:flex md-max:mr-0 md-max:ml-0 md-max:pt-8 md-max:pb-8 md-max:flex-row-reverse md-max:justify-start md-max:items-center md-max:gap-x-6 lg:mx-8 flex mx-8 flex-col h-full max-w-full">
//         <div className="md-max:block md-max:w-56 md-max:flex-shrink-0 md-max:flex-grow-0 md-max:basis-auto w-full">
//           <div className="relative w-full h-0 pt-[60%]">
//             <Image
//               src={postImageUrl(post.image)}
//               sizes="(max-width: 479px) 110.109375px, (max-width: 767px) 165.1640625px, 20vw"
//               loading="lazy"
//               width={1200}
//               height={630}
//               alt={post.description}
//               className="absolute left-0 top-0 right-0 bottom-0 w-full border-none max-w-full align-middle inline-block overflow-clip mt-2"
//               />
//           </div>
//         </div>
//         <div className="flex flex-col justify-between flex-1 md-max:flex-1">
//           <div className="mt-4 flex-1 md-max:mt-0">
//             <div className="mb-3 font-mono text-xs leading-extra-tight font-medium uppercase md-max:-mt-[2px]">{post.category}</div>
//             <div className="font-sans text-xl leading-snug font-medium md-max:text-lg">{post.title}</div>
//           </div>
//           <div className="mt-12 mb-8 md-max:block md-max:mb-0 md-max:mt-4 sm-max:block sm-max:mt-4 sm-max:mb-0">
//             <div className="text-sm -mt-[2px] sm-max:mt-4 mb-0 font-sans leading-5 font-normal">
//               {formatDate(new Date(post.created))}
//             </div>
//           </div>
//         </div>
//       </Link>
//     </div>
//   )
// }
//
// export default function PostList({ blogs }: Props) {
//   return (
//     <div className="dark:text-secondary-light" id="recentPosts">
//       <LandingSectionTitle title="Recent Posts" />
//
//       <div className="w-full max-w-[1440px] mx-auto p-12 lg-max:px-8 md-max:px-12 sm-max:px-5 pt-12 dark:text-secondary-light">
//         <div className="flex flex-row justify-around lg-max:w-full lg-max:h-auto md-max:flex-col">
//           <div className="self-stretch flex-1">
//             <div className="dotted-spaced h-full lg:mr-8 ml-0 border-none lg-max:ml-0 md-max:mx-0">
//               <div role="list" className="h-full">
//                 <FeaturedPost post={blogs[0]} key={blogs[0].id} />
//               </div>
//             </div>
//           </div>
//           <div className="flex self-stretch flex-1 md-max:flex-col md-max:flex-nowrap dark:text-secondary-light">
//             <div role="list" className="flex lg:-mr-8 flex-row flex-wrap self-stretch flex-1 gap-x-0 md-max:mr-0 md-max:flex-col md-max:flex-nowrap md-max:gap-y-0 sm-max:mr-0">
//               {blogs.slice(1).map((post) => (
//                 <GridPost post={post} key={post.id}/>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }
