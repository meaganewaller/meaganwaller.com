import formatDate from "@lib/utils/date"
import { PostData } from "@localTypes/blog"
import { CldImage } from 'next-cloudinary'
import Link from "next/link"

type Props = {
  posts: PostData[];
}

export function HeroPostList({ posts }: Props) {
  const featuredPost = posts.at(0)
  return (
    <div className="leading-6 text-white bg-emerald-900">
      <div className="px-14 pt-12 pb-14 mx-auto w-full leading-6 text-lime-500" style={{maxWidth: "1440px"}}>
        <div className="flex flex-row justify-around w-full h-auto text-lime-500">
          <div className="flex-1 self-stretch">
            <div className="mr-8 ml-0 h-full bg-repeat-x dotted-spaced">
              <div role="list" className="h-full">
                <div role="listitem" className="flex flex-col pb-0 h-full text-center">
                  <Link
                    href={`/blog/${featuredPost.frontMatter.slug}`}
                    className="inline-block max-w-full text-base bg-transparent cursor-pointer"
                    style={{textDecoration: "none"}}
                  >
                    <div className="mb-8">
                      <div className="relative w-full h-0" style={{paddingTop: "56%"}}>
                        <CldImage
                          sizes="(max-width: 479px) 92vw, (max-width: 767px) 91vw, 44vw"
                          loading="eager"
                          src={featuredPost.frontMatter.image}
                          alt={featuredPost.frontMatter.title}
                          className="inline-block absolute w-full max-w-full align-middle border-0"
                          style={{inset: "0"}}
                          width={1200}
                          height={630}
                          />
                      </div>
                    </div>
                    <div className="pr-8 pb-12 pl-0 text-left text-yellow-green-500">
                      <div className="mb-3 -mt-0.5 font-sans text-sm font-medium leading-none uppercase">
                        {featuredPost.frontMatter.tags[0].name}
                      </div>
                      <div className="font-sans text-4xl font-medium" style={{lineHeight: "1.1"}}>
                        {featuredPost.frontMatter.title}
                      </div>
                      <div className="mt-6 mb-0 font-sans text-lg font-normal leading-5">
                        {featuredPost.frontMatter.summary}
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-1 self-stretch" style={{flexFlow: "column nowrap"}}>
            <div
              role="list"
              className="flex flex-1 self-stretch -mr-8"
              style={{gap: "2em 0", flexFlow: "row wrap"}}>
              {posts.slice(1, posts.length).map((post) => (  
                <div
                  role="listitem"
                  className="flex-grow-0 flex-shrink self-stretch leading-6 text-lime-500 basis-1/2 md:bg-left-top md:bg-repeat-y dotted-left"
                  key={post.frontMatter.slug}>
                  <Link
                    href={`/blog/${post.frontMatter.slug}`}
                    className="flex flex-col justify-start items-center py-8 mx-8 cursor-pointer dotted-spaced"
                    style={{columnGap: "1.5em"}}
                  >
                    <div className="block flex-none w-56">
                      <div className="relative w-full h-0 text-yellow-green-500" style={{paddingTop: "64%"}}>
                        <CldImage
                          src={post.frontMatter.image}
                          alt={post.frontMatter.title}
                          sizes="(max-width: 479px) 110.109375px, (max-width: 767px) 165.1640625px, 20vw"
                          className="inline-block absolute w-full max-w-full align-middle border-0"
                          width={1200}
                          height={630}
                          style={{inset: "0px"}}
                          />
                      </div>
                    </div>
                    <div className="flex flex-col flex-1 justify-between text-yellow-green-500">
                      <div className="flex-1 mt-4 text-yellow-green-500">
                        <div className="mb-3 -mt-px font-sans text-sm font-medium leading-none uppercase">
                          {post.frontMatter.tags[0].name}
                        </div>
                        <div
                          className="font-sans text-xl font-normal"
                          style={{lineHeight: "1.2"}}>
                          {post.frontMatter.title}
                        </div>
                      </div>
                      <div className="block mt-4 mb-0 text-yellow-green-500">
                        <div className="mb-0 font-sans text-sm not-italic font-normal leading-5">
                          {formatDate(new Date(post.frontMatter.date))}
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
