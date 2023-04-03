import { Blog } from "lib/blogApi";
import slugify from "slugify";
// import Image from "next/image";
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
    <div className="bg-floor-darker p-7 m-[1%]">
      <button onClick={() => handlePostClicked(slug)}>
        <div className="text-start break-word box-border font-mono">
          <h2 className="text-xl font-bold">{post.title}</h2>
          <span className="uppercase tracking-wide text-xs">{formatDate(post.publishedAt)}</span>
          <p className="text-sm break-all">{post.description}</p>
        </div>
      </button>
    </div>
  );
}
