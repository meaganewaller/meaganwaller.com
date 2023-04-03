import { Blog } from "lib/blogApi";
import { BlogCard } from "@components/Elements/BlogCard";

type Props = {
  posts: Blog[];
};

export function PostList({ posts }: Props) {
  return (
    <div className="p-2 list-none grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 overflow-y-auto">
      {posts.map((post) => (
        <BlogCard key={post.title} post={post} />
      ))}
    </div>
  );
}
