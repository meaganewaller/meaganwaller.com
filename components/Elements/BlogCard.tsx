import { Blog } from "lib/blogApi";
import slugify from "slugify";
import Image from "next/image";
import Link from "next/link";
import { handlePostClicked } from "@lib/handlePostClicked";
import { useIsPostRead } from "@lib/hooks/useIsPostRead";
import siteMetadata from "@data/siteMetadata";
import { formatDate } from "@lib/utils/date";
import { slugifyIt } from "@lib/utils/slugify";

type Props = {
  post: Blog;
};


export function BlogCard({ post }: Props) {
  const slug = slugify(post.title).toLowerCase();

  const [hasRead] = useIsPostRead(slug);

  return (
    <article className="flex flex-col items-start border-2 border-white bg-gradient-to-br from-primary-lighter via-accentFirst-light to-secondary-lighter border-solid rounded-2xl overflow-auto transition-all ease-linear duration-500 hover:transition-all hover:animate-glow hover:shadow-white hover:shadow-glowing hover:cursor-pointer overflow-x-hidden">
      <div className="relative">
        <Image
          src={post.coverImage}
          width={640}
          height={360}
          alt=""
          className="p-1 aspect-[16/9] rounded-t-2xl"
        />
      </div>
      <div className="max-w-full">
        <div className="group relative font-extra px-3 py-2">
          <h3 className="p-1 text-md break-word font-semibold group-hover:text-primary-darker">
            <Link href={`/blog/${post.slug}`} className="text-white">
              <span className="absolute inset-0" />
              {post.title}
            </Link>
          </h3>
          <p className="my-2 p-1 line-clamp text-base break-word text-white">{post.description}</p>
        </div>
      </div>
    </article>
  );
}
