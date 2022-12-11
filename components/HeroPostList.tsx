import React, { useRef } from "react"
import Link from "next/link"
import CldImage from "next-cloudinary"

import { BlogPost } from "@localTypes/schema"

const HeroPostList: React.VFC<BlogPost> = ({
  title,
  cover,
  description,
  created,
  url,
}) => {
  const { current: loadedDate } = useRef<Date>(new Date())

  const getDaysBetweenDates = () => {
    const timeDifference = Math.abs(
      loadedDate.getTime() - new Date(created).getTime()
    )
    return Math.ceil(timeDifference / (1000 * 60 * 60 * 24))
  }

  return (
    <div className="leading-6 text-white bg-emerald-900">
      <div className="px-16 pt-12 pb-16 mx-auto text-red-500" style={{maxWidth: "1440px" }}>
        <div className="flex-row justify-around w-full h-auto">
          <div className="flex-1 self-stretch">
            <div className="mr-8 ml-0 bg-repeat-x border-black" style={{backgroundImage: 'linear-gradient(to right, currentcolor 10%, rgba(255, 255, 255, 0) 0%)', backgroundPosition: 'center bottom', backgroundSize: '8px 1px'}}>
              <div role="list" className="h-full">
                <div role="listitem" className="flex flex-col pb-0 h-full text-center">
                  <Link href={url} passHref className="inline-block max-w-full text-base bg-transparent cursor-pointer" style={{textDecoration: "none"}}>
                    <div className="mb-8">
                      <div className="relative w-full h-0" style={{paddingTop: "64%"}}>
                        <CldImage
                          sizes="(max-width: 479px) 92vw, (max-width: 767px) 91vw, 44vw"
                          loading="eager"
                          src={cover}
                          alt={description}
                          className="inline-block absolute w-full max-w-full align-middle border-0"
                          style={{inset: "0"}}
                          width={1200}
                          height={630}
                          />
                      </div>
                    </div>
                    <div className="pr-8 pb-12 pl-0 text-left text-blue-900">
                      <div className="mb-3 -mt-px font-sans text-sm font-medium leading-none uppercase">
                        {title}
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroPostList

//    <div className="leading-6 text-white bg-sky-200">
//         <div className="px-16 pt-12 pb-16 mx-auto text-red-500" style={{maxWidth: '1440px'}}>
//           <div className="flex-row justify-around w-full h-auto">
//             <div className="flex-1 self-stretch">
//               <div className="mr-8 ml-0 bg-repeat-x border-black" style={{backgroundImage: 'linear-gradient(to right, currentcolor 10%, rgba(255, 255, 255, 0) 0%)', backgroundPosition: 'center bottom', backgroundSize: '8px 1px'}}>
//                 <div role="list" className="h-full">
//                   <div role="listitem" className="flex flex-col pb-0 h-full text-center">
//                     <a href="/trivia-questions/christmas" className="inline-block max-w-full text-base bg-transparent cursor-pointer" style={{textDecoration: 'none'}}>
//                     <div className="mb-8">
//                         <div className="relative w-full h-0" style={{paddingTop: '64%'}}>
//                           <img srcSet="
//                         https://assets-global.website-files.com/6281caf6259cf84448230ea1/636824fe8bef742241d5658e_Christmas%20-%20Holiday-p-500.webp   500w,
//                         https://assets-global.website-files.com/6281caf6259cf84448230ea1/636824fe8bef742241d5658e_Christmas%20-%20Holiday-p-800.webp   800w,
//                         https://assets-global.website-files.com/6281caf6259cf84448230ea1/636824fe8bef742241d5658e_Christmas%20-%20Holiday-p-1080.webp 1080w,
//                         https://assets-global.website-files.com/6281caf6259cf84448230ea1/636824fe8bef742241d5658e_Christmas%20-%20Holiday.webp        1280w
//                       " loading="eager" sizes="(max-width: 479px) 92vw, (max-width: 767px) 91vw, 44vw" src="https://assets-global.website-files.com/6281caf6259cf84448230ea1/636824fe8bef742241d5658e_Christmas%20-%20Holiday.webp" alt="Christmas" className="inline-block absolute w-full max-w-full align-middle border-0" style={{inset: '0px'}} />
//                         </div>
//                       </div>
//                       <div className="pr-8 pb-12 pl-0 text-left text-blue-900">
//                         <div className="mb-3 -mt-px font-sans text-sm font-medium leading-none uppercase">
//                           Holiday
//                         </div>
//                         <div className="font-sans font-serif text-4xl font-medium" style={{lineHeight: '1.1'}}>
//                           142 Christmas Trivia Questions To Put You in the Holiday
//                           Spirit
//                         </div>
//                         <div className="mt-6 mb-0 font-sans text-lg font-normal leading-5">
//                           Are you a South Pole elf?
//                         </div>
//                       </div></a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="flex-1" style={{flexFlow: 'column nowrap'}}>
//               <div role="list" className="flex-1 self-stretch -mr-7 border-r border-black" style={{gap: '2em 0px', flexFlow: 'row wrap'}}>
//                 <div role="listitem" className="flex-grow-0 flex-shrink self-stretch basis-1/2 md:bg-left-top md:bg-repeat-y">
//                   <a href="/trivia-questions/christmas-movie" className="flex flex-col justify-start items-center py-8 mx-8 bg-repeat-x cursor-pointer" style={{columnGap: '1.5em', backgroundSize: '8px 1px'}}><div className="block flex-none w-56">
//                       <div className="relative w-full h-0" style={{paddingTop: '64%'}}>
//                         <img src="https://assets-global.website-files.com/6281caf6259cf84448230ea1/63686e84b1ee1c3b65b77b2c_Christmas%20Movies.webp" loading="lazy" alt="Christmas Movie" sizes="(max-width: 479px) 110.109375px, (max-width: 767px) 165.1640625px, 20vw" srcSet="
//                       https://assets-global.website-files.com/6281caf6259cf84448230ea1/63686e84b1ee1c3b65b77b2c_Christmas%20Movies-p-500.webp   500w,
//                       https://assets-global.website-files.com/6281caf6259cf84448230ea1/63686e84b1ee1c3b65b77b2c_Christmas%20Movies-p-800.webp   800w,
//                       https://assets-global.website-files.com/6281caf6259cf84448230ea1/63686e84b1ee1c3b65b77b2c_Christmas%20Movies-p-1080.webp 1080w,
//                       https://assets-global.website-files.com/6281caf6259cf84448230ea1/63686e84b1ee1c3b65b77b2c_Christmas%20Movies-p-1600.webp 1600w,
//                       https://assets-global.website-files.com/6281caf6259cf84448230ea1/63686e84b1ee1c3b65b77b2c_Christmas%20Movies-p-2000.webp 2000w,
//                       https://assets-global.website-files.com/6281caf6259cf84448230ea1/63686e84b1ee1c3b65b77b2c_Christmas%20Movies.webp        2560w
//                     " className="inline-block absolute w-full max-w-full align-middle border-0" style={{inset: '0px'}} />
//                       </div>
//                     </div>
//                     <div className="flex-col flex-1 justify-between">
//                       <div className="flex-1 mt-4 text-blue-900">
//                         <div className="mb-3 -mt-px font-sans text-sm font-medium leading-none uppercase">
//                           Holiday
//                         </div>
//                         <div className="font-sans font-serif text-xl font-normal" style={{lineHeight: '1.2'}}>
//                           21 Christmas Movie Trivia Questions For The Holidays Movie
//                           Buff
//                         </div>
//                       </div>
//                       <div className="block mt-4 mb-0 text-blue-900">
//                         <div className="font-sans text-sm not-italic font-normal leading-5">
//                           10 Nov
//                         </div>
//                       </div>
//                     </div></a>
//                 </div>
//                 <div role="listitem" className="flex-grow-0 flex-shrink self-stretch basis-1/2 md:bg-left-top md:bg-repeat-y">
//                   <a href="/trivia-questions/christmas-carol" className="flex flex-col justify-start items-center py-8 mx-8 bg-repeat-x cursor-pointer" style={{columnGap: '1.5em', backgroundSize: '8px 1px'}}><div className="block flex-none w-56">
//                       <div className="relative w-full h-0" style={{paddingTop: '64%'}}>
//                         <img src="https://assets-global.website-files.com/6281caf6259cf84448230ea1/63686f0b64bdf499d8447422_Christmas%20Song%20Carols.webp" loading="lazy" alt="Christmas Carol" sizes="(max-width: 479px) 110.109375px, (max-width: 767px) 165.1640625px, 20vw" srcSet="
//                       https://assets-global.website-files.com/6281caf6259cf84448230ea1/63686f0b64bdf499d8447422_Christmas%20Song%20Carols-p-500.webp   500w,
//                       https://assets-global.website-files.com/6281caf6259cf84448230ea1/63686f0b64bdf499d8447422_Christmas%20Song%20Carols-p-800.webp   800w,
//                       https://assets-global.website-files.com/6281caf6259cf84448230ea1/63686f0b64bdf499d8447422_Christmas%20Song%20Carols-p-1080.webp 1080w,
//                       https://assets-global.website-files.com/6281caf6259cf84448230ea1/63686f0b64bdf499d8447422_Christmas%20Song%20Carols-p-1600.webp 1600w,
//                       https://assets-global.website-files.com/6281caf6259cf84448230ea1/63686f0b64bdf499d8447422_Christmas%20Song%20Carols-p-2000.webp 2000w,
//                       https://assets-global.website-files.com/6281caf6259cf84448230ea1/63686f0b64bdf499d8447422_Christmas%20Song%20Carols.webp        2560w
//                     " className="inline-block absolute w-full max-w-full align-middle border-0" style={{inset: '0px'}} />
//                       </div>
//                     </div>
//                     <div className="flex-col flex-1 justify-between">
//                       <div className="flex-1 mt-4 text-blue-900">
//                         <div className="mb-3 -mt-px font-sans text-sm font-medium leading-none uppercase">
//                           Holiday
//                         </div>
//                         <div className="font-sans font-serif text-xl font-normal" style={{lineHeight: '1.2'}}>
//                           21 Christmas Carol Trivia Questions That Will Have You
//                           Singing Oh, What Fun
//                         </div>
//                       </div>
//                       <div className="block mt-4 mb-0 text-blue-900">
//                         <div className="font-sans text-sm not-italic font-normal leading-5">
//                           10 Nov
//                         </div>
//                       </div>
//                     </div></a>
//                 </div>
//                 <div role="listitem" className="flex-grow-0 flex-shrink self-stretch basis-1/2 md:bg-left-top md:bg-repeat-y">
//                   <a href="/trivia-questions/santa-claus" className="flex flex-col justify-start items-center py-8 mx-8 bg-repeat-x cursor-pointer" style={{columnGap: '1.5em', backgroundSize: '8px 1px'}}><div className="block flex-none w-56">
//                       <div className="relative w-full h-0" style={{paddingTop: '64%'}}>
//                         <img src="https://assets-global.website-files.com/6281caf6259cf84448230ea1/63686f451a07d739837da6a7_Santa%20Claus.webp" loading="lazy" alt="Santa Claus" sizes="(max-width: 479px) 110.109375px, (max-width: 767px) 165.1640625px, 20vw" srcSet="
//                       https://assets-global.website-files.com/6281caf6259cf84448230ea1/63686f451a07d739837da6a7_Santa%20Claus-p-500.webp   500w,
//                       https://assets-global.website-files.com/6281caf6259cf84448230ea1/63686f451a07d739837da6a7_Santa%20Claus-p-800.webp   800w,
//                       https://assets-global.website-files.com/6281caf6259cf84448230ea1/63686f451a07d739837da6a7_Santa%20Claus-p-1080.webp 1080w,
//                       https://assets-global.website-files.com/6281caf6259cf84448230ea1/63686f451a07d739837da6a7_Santa%20Claus-p-1600.webp 1600w,
//                       https://assets-global.website-files.com/6281caf6259cf84448230ea1/63686f451a07d739837da6a7_Santa%20Claus-p-2000.webp 2000w,
//                       https://assets-global.website-files.com/6281caf6259cf84448230ea1/63686f451a07d739837da6a7_Santa%20Claus.webp        2560w
//                     " className="inline-block absolute w-full max-w-full align-middle border-0" style={{inset: '0px'}} />
//                       </div>
//                     </div>
//                     <div className="flex-col flex-1 justify-between">
//                       <div className="flex-1 mt-4 text-blue-900">
//                         <div className="mb-3 -mt-px font-sans text-sm font-medium leading-none uppercase">
//                           Holiday
//                         </div>
//                         <div className="font-sans font-serif text-xl font-normal" style={{lineHeight: '1.2'}}>
//                           21 Santa Clause Trivia Questions To Usher In The Holidays
//                         </div>
//                       </div>
//                       <div className="block mt-4 mb-0 text-blue-900">
//                         <div className="font-sans text-sm not-italic font-normal leading-5">
//                           10 Nov
//                         </div>
//                       </div>
//                     </div></a>
//                 </div>
//                 <div role="listitem" className="flex-grow-0 flex-shrink self-stretch basis-1/2 md:bg-left-top md:bg-repeat-y">
//                   <a href="/trivia-questions/elf" className="flex flex-col justify-start items-center py-8 mx-8 bg-repeat-x cursor-pointer" style={{columnGap: '1.5em', backgroundSize: '8px 1px'}}><div className="block flex-none w-56">
//                       <div className="relative w-full h-0" style={{paddingTop: '64%'}}>
//                         <img src="https://assets-global.website-files.com/6281caf6259cf84448230ea1/6368708162c38ae3fe8bbbb6_Elf%20(movie).webp" loading="lazy" alt="Elf" sizes="(max-width: 479px) 110.109375px, (max-width: 767px) 165.1640625px, 20vw" srcSet="
//                       https://assets-global.website-files.com/6281caf6259cf84448230ea1/6368708162c38ae3fe8bbbb6_Elf%20(movie)-p-500.webp   500w,
//                       https://assets-global.website-files.com/6281caf6259cf84448230ea1/6368708162c38ae3fe8bbbb6_Elf%20(movie)-p-800.webp   800w,
//                       https://assets-global.website-files.com/6281caf6259cf84448230ea1/6368708162c38ae3fe8bbbb6_Elf%20(movie)-p-1080.webp 1080w,
//                       https://assets-global.website-files.com/6281caf6259cf84448230ea1/6368708162c38ae3fe8bbbb6_Elf%20(movie)-p-1600.webp 1600w,
//                       https://assets-global.website-files.com/6281caf6259cf84448230ea1/6368708162c38ae3fe8bbbb6_Elf%20(movie)-p-2000.webp 2000w,
//                       https://assets-global.website-files.com/6281caf6259cf84448230ea1/6368708162c38ae3fe8bbbb6_Elf%20(movie).webp        2560w
//                     " className="inline-block absolute w-full max-w-full align-middle border-0" style={{inset: '0px'}} />
//                       </div>
//                     </div>
//                     <div className="flex-col flex-1 justify-between">
//                       <div className="flex-1 mt-4 text-blue-900">
//                         <div className="mb-3 -mt-px font-sans text-sm font-medium leading-none uppercase">
//                           Holiday
//                         </div>
//                         <div className="font-sans font-serif text-xl font-normal" style={{lineHeight: '1.2'}}>
//                           21 Elf Movie Trivia Questions To Help Spread Christmas Cheer
//                         </div>
//                       </div>
//                       <div className="block mt-4 mb-0 text-blue-900">
//                         <div className="font-sans text-sm not-italic font-normal leading-5">
//                           10 Nov
//                         </div>
//                       </div>
//                     </div></a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>


// //                   <Link
// //                     href={`/blog/${getPageProperty("Slug", featuredPost)}`}
// //                     className="inline-block max-w-full text-base bg-transparent cursor-pointer"
// //                     style={{textDecoration: "none"}}
// //                   >
// //                     <div className="mb-8">
// //                       <div className="relative w-full h-0" style={{paddingTop: "56%"}}>
// //                         <CldImage
// //                           sizes="(max-width: 479px) 92vw, (max-width: 767px) 91vw, 44vw"
// //                           loading="eager"
// //                           src={getPageProperty("ImageID", featuredPost)}
// //                           alt={getPageProperty("Name", featuredPost)}
// //                           className="inline-block absolute w-full max-w-full align-middle border-0"
// //                           style={{inset: "0"}}
// //                           width={1200}
// //                           height={630}
// //                           />
// //                       </div>
// //                     </div>
// //                     <div className="pr-8 pb-12 pl-0 text-left text-yellow-green-500">
// //                       {/* <div className="mb-3 -mt-0.5 font-sans text-sm font-medium leading-none uppercase"> */}
// //                       {/*   {featuredPost.tags[0].name} */}
// //                       {/* </div> */}
// //                       <div className="font-sans text-4xl font-medium" style={{lineHeight: "1.1"}}>
// //                         {getPageProperty("Name", featuredPost)}
// //                       </div>
// //                       <div className="mt-6 mb-0 font-sans text-lg font-normal leading-5">
// //                         {getPageProperty("Description", featuredPost)}
// //                       </div>
// //                     </div>
// //                   </Link>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //           <div className="flex flex-1 self-stretch" style={{flexFlow: "column nowrap"}}>
// //             <div
// //               role="list"
// //               className="flex flex-1 self-stretch -mr-8"
// //               style={{gap: "2em 0", flexFlow: "row wrap"}}>
// //               {posts.results.slice(1, posts.results.length).map((post) => (  
// //                 <div
// //                   role="listitem"
// //                   className="flex-grow-0 flex-shrink self-stretch leading-6 text-lime-500 basis-1/2 md:bg-left-top md:bg-repeat-y dotted-left"
// //                   key={getPageProperty('Slug', post)}>
// //                   <Link
// //                     href={`/blog/${getPageProperty('Slug', post)}`}
// //                     className="flex flex-col justify-start items-center py-8 mx-8 cursor-pointer dotted-spaced"
// //                     style={{columnGap: "1.5em"}}
// //                   >
// //                     <div className="block flex-none w-56">
// //                       <div className="relative w-full h-0 text-yellow-green-500" style={{paddingTop: "64%"}}>
// //                         <CldImage
// //                           src={getPageProperty("ImageID", post)}
// //                           alt={getPageProperty("Name", post)}
// //                           sizes="(max-width: 479px) 110.109375px, (max-width: 767px) 165.1640625px, 20vw"
// //                           className="inline-block absolute w-full max-w-full align-middle border-0"
// //                           width={1200}
// //                           height={630}
// //                           style={{inset: "0px"}}
// //                           />
// //                       </div>
// //                     </div>
// //                     <div className="flex flex-col flex-1 justify-between text-yellow-green-500">
// //                       <div className="flex-1 mt-4 text-yellow-green-500">
// //                         {/* <div className="mb-3 -mt-px font-sans text-sm font-medium leading-none uppercase"> */}
// //                         {/*   {post.tags[0].name} */}
// //                         {/* </div> */}
// //                         <div
// //                           className="font-sans text-xl font-normal"
// //                           style={{lineHeight: "1.2"}}>
// //                           {getPageProperty('Name', post)}
// //                         </div>
// //                       </div>
// //                       <div className="block mt-4 mb-0 text-yellow-green-500">
// //                         <div className="mb-0 font-sans text-sm not-italic font-normal leading-5">
// //                           {formatDate(new Date(getPageProperty("PublishedAt", post)))}
// //                         </div>
// //                       </div>
// //                     </div>
// //                   </Link>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   )
// // }
