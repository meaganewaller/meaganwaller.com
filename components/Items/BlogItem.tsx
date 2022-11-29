import Link from "next/link";
import { ReactElement } from "react";
import Image from "next/image";
import { BlogData } from "@localTypes/blog";

interface Props {
  slug: string;
  post: BlogData;
}

export default function BlogItem({ post }: Props): ReactElement {
  return (
    <Link href={`/blog/${post.slug}`} passHref className="space-y-5 mb-5 group">
      <div className="flex justify-center items-center">
        <div className="relative aspect-h-4 aspect-w-3 focus-ring w-full rounded-lg object-cover object-center transition duration-300">
          <Image
            src={post.image}
            alt={post.title}
            className="relative rounded-lg"
            width={250}
            height={250}
          />
        </div>
      </div>
      <div className="text-gray-500 text-xl font-bold">
        <span>{post.posted}</span>
      </div>
      <h2 className="text-3xl font-bold">{post.title}</h2>
    </Link>
  );
}
