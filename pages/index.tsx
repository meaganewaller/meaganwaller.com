import { convertToPostList, getPublishedBlogPosts } from '@lib/notion/blogs'
import { PostList } from '@components/PostList'
import { GetStaticProps } from 'next'
import { BlogData } from '@localTypes/blog'
import PageLayout from "@components/PageLayout";
import { ButtonType } from '@localTypes/button'
import { Button } from '@components/Button'
import { useRouter } from 'next/router'

interface Props {
  latestBlogData: BlogData[]
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await getPublishedBlogPosts(3);
  const { posts } = convertToPostList(data);

  return {
    props: {
      latestBlogData: posts,
    },
    revalidate: 60,
  };
};

export default function Home({ latestBlogData }: Props) {
  const { push } = useRouter();

  return (
    <PageLayout title="Home">
      <div>
        <div>
          <div className="grid items-center grid-cols-1 mt-12 text-center md:mt-24 md:text-left md:grid-cols-6">
            <h1 className="order-2 col-span-5 text-4xl leading-tight md:leading-normal md:order-1 sm:text-5xl">
              I'm{' '}
              <span className="text-teal-500 dark:text-teal-400">Meagan</span>.
              I'm a developer, blogger, and digital organization enthusiast working at Test Double.
            </h1>
          </div>
          <div className="space-y-6 md:space-y-0 md:space-x-4">
            <Button
              buttonType={ButtonType.PRIMARY}
              onButtonClick={() => push('/blog')}
            >
              Read the blog
            </Button>
            <Button
              buttonType={ButtonType.SECONDARY}
              onButtonClick={() => push('/about')}
            >
              More about me
            </Button>
          </div>
        </div>
        <hr className="hr"></hr>
        <div>
          <h2>I love to share what I've learned.</h2>
          <p>Check out my recent posts.</p>
          <PostList posts={latestBlogData} />
          <div className="my-16">
            <Button
              buttonType={ButtonType.PRIMARY}
              onButtonClick={() => push('/blog')}
            >
              See all posts
            </Button>
          </div>
          <div className="mt-16">
            <span>Some subscription module here</span>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
