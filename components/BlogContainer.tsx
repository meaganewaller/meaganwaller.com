import { useMemo } from 'react';
import { getMDXComponent } from 'mdx-bundler/client';

import PageLayout from '@components/PageLayout';
import MDXComponents from '@components/MDXComponents';
import BlogRow from '@components/BlogRow';

export type ReadTime = {
  text: string;
  time: number;
  words: number;
  minutes: number;
}

export type Information = {
  slug: string;
  readingTime: ReadTime;
} & Frontmatter;

export type Frontmatter = {
  title: string;
  description: string;
  locale: string;
  alternate: string;
  isPublished: boolean;
  publishedAt: string;
  tags: string[];
};

export type Blog = {
  code: string;
  frontmatter: Frontmatter;
  readingTime: ReadTime;
}

const BlogContainer: React.FC<Blog> = ({ code, frontmatter, readingTime }) => {
  const Component = useMemo(() => getMDXComponent(code), [code]);

  return (
    <PageLayout title={frontmatter.title}>
      <article className="w-full max-w-3xl">
        <h1 className="text-5xl font-bold mb-6">{frontmatter.title}</h1>
        <BlogRow
          tags={frontmatter.tags}
          publishedAt={frontmatter.publishedAt}
          readingTime={readingTime}
        />
        <Component components={MDXComponents} />
      </article>
    </PageLayout>
  );
};

export default BlogContainer;
