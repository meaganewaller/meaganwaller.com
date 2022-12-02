import { convertToPostList, getPublishedPosts } from '@lib/notion/blogs';

import { PostList } from '@components/PostList';
import { Button } from '@components/Button';
import { ButtonType } from '@localTypes/button';
import PageLayout from '@components/PageLayout';
import { GetStaticProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { BlogData } from '@localTypes/blog';

interface Props {
  recentPosts: BlogData[];
}

const workExperience = [
  {
    company: 'Test Double',
    title: 'Senior Software Development Consultant',
    duration: 'February 2021 - present'
  },
  {
    company: 'Daily Kos',
    title: 'Software Developer',
    duration: 'June 2015 - February 2021',
  },
  {
    company: 'Independent Contractor',
    title: 'Rails Developer',
    duration: 'September 2014 - June 2015'
  },
  {
    company: '8th Light',
    title: 'Software Consultant',
    duration: 'May 2014 - September 2014'
  },
  {
    company: '8th Light',
    title: 'Resident Apprentice',
    duration: 'April 2013 - May 2014'
  },
];

export default function About({ recentPosts }: Props) {
  const { push } = useRouter();

  return (
    <PageLayout title="About Me - Meagan Waller">
      <h1>
        <span className="block text-base font-semibold tracking-wide text-center text-teal-500 uppercase dark:text-teal-400">
          About me
        </span>
        <span className="block max-w-2xl mx-auto mt-2 text-4xl font-bold leading-10 text-center sm:text-5xl">
          Here's my story.
        </span>
      </h1>
      <p>
        I'm Meagan, a full stack developer,{' '}
        <a href="https://github.com/meaganewaller">constant tinkerer</a>,{' '}
        <Link href="/blog">blogger</Link>{' '}
        and lifelong learner who specializes in Rails and JavaScript.
      </p>
      <p>
        I'm currently working as a senior software development consultant at{' '}
        <a href="https://www.testdouble.com">Test Double</a> where I help companies ship
        thoughtful code at a sustainable pace.
      </p>
      <div className="grid grid-cols-1 gap-0 md:grid-cols-4 md:gap-x-5">
        <div className="col-span-1">
          <Image
            className="rounded-xl group-hover:opacity-75"
            src="https://via.placeholder.com/260x260.png"
            placeholder="blur"
            blurDataURL="https://via.placeholder.com/260x260.png"
            width={260}
            height={260}
            alt={"Meagan Waller's avatar"}
          />
        </div>
        <div className="col-span-3">
          <p>
            You can find me on <a href="https://twitter.com/meaganewaller">Twitter</a> where I share tech insights and talk about the things I'm building, or
            you can follow me on <a href="https://github.com/meaganewaller">GitHub</a>. I write about my learnings on my{' '}
            <Link href="/blog">blog</Link>{' '}.
          </p>
        </div>
      </div>
      <hr className="my-16 w-full border-none text-center h-10 before:content-['∿∿∿'] before:text-[#D1D5DB] before:text-2xl"></hr>
       <div className="mt-12 space-y-6">
        <h2 className="m-0 text-gray-900 dark:text-white">Work experience</h2>
        <p>Here's a brief rundown of my most recent experiences.</p>
        <div className="space-y-2">
          {workExperience.map((workItem) => (
            <div
              key={workItem.company}
              className="flex items-center space-x-3 group"
            >
              <span className="flex-none text-gray-900 gover-hover:underline dark:text-white">
                {workItem.company}
              </span>
              <span className="w-full border-t border-gray-300 border-dashed shrink dark:border-gray-700"></span>
              <span className="flex-none">{workItem.title}</span>
              <span className="flex-none">{workItem.duration}</span>
            </div>
          ))}
        </div>
         <div className="inline-flex w-full md:w-auto ">
          <a
            className="items-center justify-center w-full px-4 py-3 text-sm font-medium text-center text-white no-underline rounded-full md:text-xl md:px-12 bg-midnight dark:bg-gray-200 dark:text-midnight general-ring-state"
            href="#"
            target="_blank"
            rel="noreferrer"
          >
            View my resume
          </a>
        </div>
      </div>
      <hr className="my-16 w-full border-none text-center h-10 before:content-['∿∿∿'] before:text-[#D1D5DB] before:text-2xl"></hr>
      <div className="mb-12">
        <h2>I love to share my knowledge through writing.</h2>
        <p>Check out a few of my most recent publishings.</p>
        <PostList posts={recentPosts} />
      </div>
      <hr className="my-16 w-full border-none text-center h-10 before:content-['∿∿∿'] before:text-[#D1D5DB] before:text-2xl"></hr>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-y-8 md:gap-x-12">
        <div className="col-span-3">
          <h2>Interested in my gear?</h2>
          <p>
            I keep a list of software, applications, extensions, hardware and a
            list of supplies I've used to set up my office for those who are
            interested.
          </p>
          <Button
            buttonType={ButtonType.PRIMARY}
            onButtonClick={() => push('/toolbox')}
          >
            Check out my toolbox
          </Button>
        </div>
        <div className="col-span-2">
          <Image
            className="rounded-xl group-hover:opacity-75"
            src="https://via.placeholder.com/260x260.png"
            placeholder="blur"
            blurDataURL="https://via.placeholder.com/260x260.png"
            width={260}
            height={260}
            alt={'article cover'}
          />
        </div>
      </div>
    </PageLayout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await getPublishedPosts(3);
  const { posts } = convertToPostList(data);

  return {
    props: {
      recentPosts: posts,
    },
    revalidate: 120,
  };
};
