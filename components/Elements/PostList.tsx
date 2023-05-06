import { Blog } from "lib/blogApi";
import { BlogCard } from "@components/Elements/BlogCard";

type Props = {
  posts: Blog[];
};

export function PostList({ posts }: Props) {
  return (
    <main className="mx-auto pt-5 grid grid-cols-1 gap-x-3 gap-y-5 lg:mx-0 lg:max-w-none lg:grid-cols-3 px-4 bg-postWallpaper h-full">
      {posts.map((post) => (
        <BlogCard key={post.title} post={post} />
      ))}
    </main>
  );
}
