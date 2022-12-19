import Link from "next/link"
import { BlogPost } from "@localTypes/schema"
import { parseISO, formatDistance, formatDistanceToNowStrict } from "date-fns";
import { buildUrl } from 'cloudinary-build-url'
import Image from "next/image"

interface FooterRecentPostsProps {
  blogs: BlogPost[]
}

export default function FooterRecentPosts({ blogs }: FooterRecentPostsProps) {
  return (
    <div className="sm:px-5 md:px-[25px] hidden mx-auto md:block md:py-0 px-8 md:max-w-3xl lg:max-w-5xl align-baseline">
      <h4 className="tracking-wider font-mono italic relative left-6 -top-4 z-2 py-1 px-6 border border-solid border-emerald-900 rounded-full text-lg bg-white leading-relaxed mb-7 inline-block">
        Latest Posts
      </h4>
      {blogs.slice(0, 3).map((post, index) => ( 
        <article className="flex items-center mb-5 pl-20 relative flex-row flex-wrap min-h-[70px]" key={post.id}>
          <div className="flex">
            <Link href={post.url} className="absolute w-16 h-16 min-h-[52px] left-0 p-0 top-[1px] rounded-lg z-2">
              <Image src={buildUrl(post.image, { cloud: { cloudName: 'meaganwaller-com' }})} alt={post.description} className="object-cover w-full h-full border-1 border-solid border-black rounded-lg absolute left-0 top-0 z-2" width={1200} height={630} />
              <span className="font-mono absolute -left-2 -top-2 z-4 w-8 h-8 text-center font-semibold text-black bg-no-repeat" style={{ lineHeight: "33px", backgroundImage: "url('/static/images/latestborder.svg')"}}>{index + 1}</span>
            </Link>
            <div>
              <h4 className="-mb-[3px] break-words text-xs leading-looses font-semibold">
                <Link href={post.url} className="break-words pb-2 cursor-pointer">
                  {post.title}
                </Link>
              </h4>
              <time className="inline-block pt-1 text-sm text-gray-700 dark:text-gray-300" date-time={parseISO(post.created)}>
                {formatDistanceToNowStrict(new Date(post.created))}{' '}
                ago
              </time>
            </div>
          </div>
          <div className="clear-both" />
        </article>
      ))}
    </div>
  )
}
