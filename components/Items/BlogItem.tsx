import Link from "next/link";
import { ReactElement } from "react";
import Image from "next/image";
import { BlogData } from "@localTypes/blog";

interface Props {
  post: BlogData;
}

export default function BlogItem({ post }: Props): ReactElement {
  return (
    <div>
      <Link href={`/blog/${post.slug}`}>
        <div className="group">
          <Image
            className="rounded-xl group-hover:opacity-75"
            src={post.image}
            placeholder="blur"
            blurDataURL={post.image}
            width={684}
            height={800}
            alt={'post cover image'}
          />
          <div className="text-left w-full">
            <h3 className="mt-2 text-2xl">{post.title}</h3>
            <span className="text-base font-semibold flex items-center">
            {new Date(post.posted).toLocaleString(
              'us',
              {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              }
            )}{' '}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}
