import PageLayout from "@components/PageLayout";
import { getWorkspaceData, getAllWorkspaceIds } from "@lib/notion/workspace"
// import Image from "next/image";
import Link from "next/link";
import { GetStaticPaths, GetStaticProps } from "next";
import { getMDXComponent } from "mdx-bundler/client";
import { WorkspaceData } from "@localTypes/workspace";
import { useMemo } from "react";
import { ParsedUrlQuery } from "querystring";
import { PostImage } from "@components/Image/PostImage";
import components from "@components/MDXComponents";

interface Props {
  item: WorkspaceData;
}

export default function Tool({ item }: Props) {
  const Component = useMemo(
    () => getMDXComponent(item.contentHtml!),
    [item.contentHtml]
  );

  return (
    <PageLayout title={item.title}>
      <div className="flex justify-center md:mt-10">
        <div className="w-full max-w-4xl md:mx-10 mb-10 md:mb-20">
          <article className="prose lg:prose-lg max-w-none dark:prose-light py-5">
            <small className="flex justify-center align-middle text-teal-grey dark:text-dark-yellow my-5">
            </small>
            <h1 className="text-center">
              <div className="mb-4">{item.title}</div>
              <div className="text-xl text-grey-600 dark:text-gray-400 font-normal italic">
                {item.description}
              </div>
            </h1>
            <p className=""></p>
            <PostImage
              src={item.image}
              alt={`${item.title} Cover`}
              width={900}
              height={500}
              />
            <Component className="my-10 leading-relaxed" components={components} />
          </article>
          <div className="text-teal-grey hover:underline text-md md:text-xl">
            <Link href="/workspace">← See workspace</Link>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

interface Params extends ParsedUrlQuery {
  slug: string;
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const paths = await getAllWorkspaceIds();
  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params,
}) => {
  const workspaceData = await getWorkspaceData(params!.slug as string);

  if (!workspaceData || !workspaceData.contentHtml) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      item: workspaceData,
    },
    revalidate: 60,
  };
};
