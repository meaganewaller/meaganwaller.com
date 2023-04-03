import clsx from 'clsx';
import { motion } from 'framer-motion';
import React from 'react';

import { formatDate } from '@lib/utils/date';
import { Blog } from '@lib/blogApi';
import { Card } from '../Card';

const StaticBadge = ({ className, children }: React.PropsWithChildren<{ className?: string }>) => (
  <span
    className={clsx(
      className,
      'inline-flex items-center rounded-md bg-primary px-1 py-0 text-xs font-medium text-white',
    )}
  >
    {children}
  </span>
);

interface Props {
  post: Blog;
  dense?: boolean;
}

export const BlogPreview = ({ post, dense }: Props) => {
  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
      <article className="md:grid md:grid-cols-4 md:items-baseline">
        <Card className="md:col-span-3">
          <Card.Title href={`/blog/${post.slug}`}>
            {post.title}
            {post.inProgress && <StaticBadge className="ml-2">Work in progress</StaticBadge>}
          </Card.Title>
          <Card.Eyebrow
            as="time"
            dateTime={post.publishedAt}
            className={clsx(!dense && 'md:hidden')}
            decorate
          >
            {formatDate(post.publishedAt)}
          </Card.Eyebrow>
          <Card.Description>{post.description}</Card.Description>
          <Card.Cta>Read post</Card.Cta>
        </Card>
        {!dense && (
          <Card.Eyebrow as="time" dateTime={post.publishedAt} className="mt-1 hidden md:block">
            {formatDate(post.publishedAt)}
          </Card.Eyebrow>
        )}
      </article>
    </motion.div>
  );
};
