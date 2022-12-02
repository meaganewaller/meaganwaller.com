import { Footer } from "./Footer";
import { NavMenu } from "./NavMenu";
import { ReactNode, useState } from "react";
import Head from "next/head";
import { PageTransition } from "./PageTransition";
import { PageType } from "@localTypes/page";
import { useRouter } from "next/router";

interface PageLayoutProps {
  title?: string;
  children: ReactNode;
}

export default function PageLayout({
  title,
  children,
  ...customMeta
}: PageLayoutProps) {

  const router = useRouter();

  const meta = {
    title: title,
    description: "Meta Description",
    imageUrl: "https://via.placeholder.com/500",
    type: PageType.WEBSITE,
    twitterHandle: "@meaganewaller",
    canonicalUrl: `https://meaganwaller.com${router.asPath}`,
    date: null,
    ...customMeta
  };

  return (
    <div className="bg-white dark:bg-dark min-h-screen">
      <Head>
        <title>{title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta property="og:url" content={`https://meaganwaller.com${router.asPath}`} />
        <meta name="application-name" content="&nbsp;" />
        <meta name="msapplication-TileColor" content="#FFFFFF" />
        <link rel="canonical" href={meta.canonicalUrl} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Meagan Waller" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.imageUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={meta.twitterHandle} />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.imageUrl} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <NavMenu />
      <main className={`flex flex-col mx-auto max-w-6xl justify-center px-4 bg-white dark:bg-dark prose prose-lg dark:prose-dark relative`}>
        <div className="z-10">
          <PageTransition>{children}</PageTransition>
        </div>
        <Footer />
      </main>
    </div>
  );
}
