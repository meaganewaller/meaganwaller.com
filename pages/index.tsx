import React from 'react';
import { HiSparkles } from 'react-icons/hi';
import { GetStaticProps } from 'next';
import NextLink from 'next/link';
import Window from '@components/Elements/Window';
import { formatDate } from '@lib/utils/date';
import { Blog, blogApi } from '@lib/blogApi';
import MenuBar from '@components/Elements/MenuBar';
import { useWindowSize } from '@lib/hooks/useWindowSize';

import { BsArrowRightShort } from 'react-icons/bs';

interface Props {
  posts: Blog[];
}

export default function Index({ posts }: Props) {
  const size = useWindowSize();

  return (
    <div className="h-screen bg-desktopWallpaper2">
      <MenuBar />
      <Window
        active={false}
        title="About Meagan"
        x={size.width / 2.45}
        y={size.height / 12}
        zIndex="2"
        width={`${size.width * .55}px`}>
        <div className="flex p-5 place-content-center flex-col">
          <div className="flex place-content-center pb-4">
            <HiSparkles size="3em" className="text-accent-light" />
            <HiSparkles size="3em" className="text-accent-light" />
            <HiSparkles size="3em" className="text-accent-light" />
          </div>
          <p className="font-mono text-md text-primary px-8 leading-relaxed py-2">
            <span className="font-bold italic">I wrote my first line of HTML on Microsoft Notepad in 2004 </span>
            and fell head-over-heels for how magical it all felt. The problem I was solving in 2004? My Neopets shop page wasn&apos;t pretty enough. I was 12 years old.
          </p>
          <p className="font-mono text-md text-primary px-8 leading-relaxed py-2">
            I spent a couple days working up the courage to convince my parents to put their credit card information into a form on a website and buy me a domain. They did. And my first website was born. I learned everything, HTML/CSS, creating graphics in Paint Shop Pro and Animation Shop, and getting my website live, by reading posts written by kids my age. Soon I started writing my own posts sharing my knowledge, my pitfalls, my cool experiments.
          </p>

          <div className="flex place-content-end group wavy">
            <NextLink href="/about" className="text-primary">Read more <BsArrowRightShort size="1.5em" className="inline-block" /> </NextLink>
          </div>
        </div>
      </Window>
      <Window title="Let's Connect" active={false} x={size.width / 2} y={size.height / 1.65} zIndex="1" width="500px" height="250px">
        <ul className="content">
          <li className="content__item">
            <button className="button button--kari">
              <span>Twitter</span>
              <div className="marquee" aria-hidden={true}>
                <div
                  className="marquee__inner"
                >
                  <span>Follow me</span>
                  <span>Follow me</span>
                  <span>Follow me</span>
                  <span>Follow me</span>
                </div>
              </div>
            </button>
          </li>
          <li className="content__item">
            <button className="button button--hati"><span>LinkedIn</span></button>
          </li>
          <li className="content__item">
            <button className="button button--hyperion"><span>GitHub</span></button>
          </li>

          <li className="content__item">
            <button className="button button--narvi"><span><span>Email</span></span></button>
          </li>

          <li className="content__item">
            <button className="button button--pandora"><span>Dev.to</span></button>
          </li>

          <li className="content__item">
            <button className="button button--pallene">
              Polywork
            </button>
          </li>
        </ul>
      </Window>
      <Window title="Recent Blog Posts" x={size.width / 35} y={200} width={`${size.width / 2 < 520 ? size.width / 2 : 520}px`} zIndex="3" active={true}>
        <div className="flex max-w-3xl flex-col">
          <ul className="pt-2">
            {posts.map((post: Blog) => (
              <li key={post.slug} className="px-2 wavy w-full">
                <NextLink href={`/blog/${post.slug}`} className="block">
                  <h2 className="text-base text-primary-dark lowercase font-mono hover:italic antialiased subpixel-antialiased break-normal">{post.title}</h2>
                  <span className="italic font-mono lowercase text-secondary-light">{formatDate(post.publishedAt)}</span>
                </NextLink>
              </li>
            ))}
          </ul>
        </div>
      </Window>
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const posts = await blogApi.getPosts('desc');

  return {
    props: {
      posts: posts.slice(6),
    },
    revalidate: 10,
  };
};
