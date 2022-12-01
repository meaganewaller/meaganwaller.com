import { BlogData } from "@localTypes/blog";
import BlogItem from "./Items/BlogItem";

type Props = {
  posts: BlogData[];
}

export function PostList({ posts }: Props) {
  return (
    <div className="list-none grid grid-cols-1 md:grid-cols-3 gap-8">
      {posts.map((post) => (
        <BlogItem key={post.slug} slug={post.slug} post={post} />
      ))}
    </div>
  );
}
