import Link from "next/link";
import { ReactElement } from "react";
import Image from "next/image";
import { BlogData } from "@localTypes/blog";
import { useRouter } from "next/router";
import { handlePostClicked } from "@lib/handlePostClick";

interface Props {
  post: BlogData;
}

export default function BlogItem({ post }: Props): ReactElement {
  const router = useRouter()

  return (
    <button
      className="mb- my-2 w-full rounded-md border border-gray-100 bg-white px-4 py-4 text-sm shadow-sm shadow-gray-300 hover:bg-zinc-300 dark:border-zinc-900 dark:bg-zinc-900 dark:shadow-none dark:hover:bg-zinc-800"
      onClick={() => handlePostClicked(post.slug)}
    >
      <div className="flex flex-col">
        <div className="text-md mb-1 flex justify-between text-left font-semibold">
          {post.title}
        </div>
      </div>
      <p className="my-1 pb-2 text-left text-sm text-gray-600 dark:text-gray-400">
        {post.description}
      </p>
      <div className="mb-1 flex flex-row flex-wrap gap-x-3 gap-y-1">
        {post.tags.map((tag) => (
          <div className="mt-0.5 rounded-sm bg-zinc-200 px-3 text-xs text-gray-700 opacity-80 dark:bg-zinc-700 dark:text-gray-300">
            #{tag.name}
          </div>
        ))}
      </div>
      <span className="flex justify-end space-x-4 text-xs text-gray-600 dark:text-gray-400">
        <div>
          {new Date(post.posted).toLocaleDateString('en', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}{' '}
        </div>
      </span>
    </button>
  );
}
