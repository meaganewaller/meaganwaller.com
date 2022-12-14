import React, { useRef } from "react"
import Link from "next/link"
import { CldImage } from 'next-cloudinary'

import { BlogPost } from "@localTypes/schema"

type Props = {
  blogs: BlogPost[]
}

export default function HeroPostList({ blogs }: Props) {
  const { current: loadedDate } = useRef<Date>(new Date());
  const featuredPost = blogs[0]

  const getDaysBetweenDates = (created: string) => {
    const timeDifference = Math.abs(
      loadedDate.getTime() - new Date(created).getTime()
    )
    return Math.ceil(timeDifference / (1000 * 60 * 60 * 24))
  }

  return (
    <div className="bg-emerald-900">
      <section className="py-12 mx-auto overflow-hidden px-4 grid lg:py-16 lg:px-8 xl:py-16 xl:px-8 lg:max-w-[960px] xl:max-w-[1440px] md:max-w-[40rem] lg:items-center xl:items-center lg:grid-cols-[460px_1fr] xl:grid-cols-[460px_1fr]">
        <div className="mb-6">
          <article className="overflow-hidden relative hover:opacity-80">
            <figure className="order-2">
              <Link href={featuredPost.url}>
                <CldImage src={featuredPost.image} alt={featuredPost.description} width={1200} height={630} className="object-cover w-full h-[485px]" style={{ objectPosition: "50% 50%" }} />
              </Link>
            </figure>
            <div className="flex py-2 px-5 absolute flex-col flex-nowrap lg:p-5 xl:p-5" style={{bottom: "8px"}}>
              <h2 className="bg-emerald-900 p-2 text-xl leading-6 mb-1 mt-2 lg:text-2xl xl:text-2xl lg:leading-7 xl:leading-7">
                <Link href={featuredPost.url} className="text-yellow-green-500">
                  {featuredPost.title}
                </Link>
              </h2>
              <p className="bg-emerald-900 p-2 md:hidden lg:block xl:block leading-5 text-yellow-green-500">{featuredPost.description}</p>
              <div className="text-yellow-green-500 rounded-sm self-start font-semibold text-xs leading-3 py-2 px-2 uppercase tracking-wider bg-emerald-900 border-2 border-emerald-900" style={{ order: "-1" }}> 
                <span className="sr-only">Posted in: </span>
                <span>Category</span>
              </div>
            </div>
            <Link href={featuredPost.url} className="overflow-hidden absolute inset-0 whitespace-no-wrap z-10" style={{ textIndent: "-100%" }}>Read more</Link>
          </article>
        </div>
        <div className="featured-posts__right pl-0 lg:pl-10 xl:pl-10">
          {blogs.slice(1).map((post => (
            <article className="c-card c-card--horizontal grid items-center px-0 pt-0 pb-4 gap-6 grid-cols-[1fr_100px] lg:grid-cols-[1fr_120px] xl:grid-cols-[1fr_120px] not-last:border-solid not-last:border-b not-last:mx-0 not-last:mt-0 not-last:mb-5 not-last:border-orange">
              <figure className="c-card__image order-2 hover:opacity-80">
                <Link href={post.url}>
                  <CldImage 
                    src={post.image} 
                    alt={post.description} 
                    width={1200} 
                    height={630} />
                </Link>
              </figure>
              <div className="c-card__body flex flex-grow order-1 flex-col flex-nowrap">
                <h2 className="c-card__title text-xl leading-6 mt-2 text-yellow-green-500 font-medium lg:text-2xl xl:text-2xl lg:leading-7 xl:leading-7">
                  <Link href={post.url} className="block hover:text-yellow-green-300">{post.title}</Link>
                </h2>
                <div className="text-yellow-green-500 bg-transparent self-start font-semibold relative -order-1 uppercase tracking-wider text-xs p-2 border-2 border-yellow-green-500 hover:border-yellow-green-300 hover:text-yellow-green-300 shadow-none inset-0">
                  <span className="sr-only">Posted in: </span>
                  <p className="c-card__tag-text uppercase tracking-wider text-xs">Category</p>
                </div>
                <div className="c-card__date uppercase tracking-wider text-xs mt-2 text-yellow-green-500">{getDaysBetweenDates(post.created)} days ago</div>
              </div>
            </article>
          )))}
        </div>
      </section>
    </div>
  )
}
