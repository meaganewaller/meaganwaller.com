// import { Footer } from "@components/Elements/Footer";
import Head from 'next/head';
import MenuBar from "@components/Elements/MenuBar";
import PageTransition from "@components/PageTransition";
import { PageType } from "@lib/types";
import siteMetadata from "@data/siteMetadata";
import { useRouter } from "next/router";

export function Container(props) {
  const { children, ...customMeta } = props;
  const router = useRouter();
  const meta = {
    title: siteMetadata.title,
    description: siteMetadata.description,
    imageUrl: siteMetadata.socialBanner,
    type: PageType.WEBSITE,
    twitterHandle: siteMetadata.twitterHandle,
    canonicalUrl: customMeta.sponsoredArticle
      ? customMeta.sponsoredUrl
      : `${siteMetadata.siteUrl}${router.asPath}`,
    date: null,
    ...customMeta
  };

  return (
    <div className="bg-primary-lightest dark:bg-primary-darkest">
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`${siteMetadata.siteUrl}${router.asPath}`}
        />
        {/* <link
rel="apple-touch-icon-precomposed"
sizes="57x57"
href="/assets/apple-touch-icon-57x57.png"
/>
<link
rel="apple-touch-icon-precomposed"
sizes="114x114"
href="/assets/apple-touch-icon-114x114.png"
/>
<link
rel="apple-touch-icon-precomposed"
sizes="72x72"
href="/assets/apple-touch-icon-72x72.png"
/>
<link
rel="apple-touch-icon-precomposed"
sizes="144x144"
href="/assets/apple-touch-icon-144x144.png"
/>
<link
rel="apple-touch-icon-precomposed"
sizes="60x60"
href="/assets/apple-touch-icon-60x60.png"
/>
<link
rel="apple-touch-icon-precomposed"
sizes="120x120"
href="/assets/apple-touch-icon-120x120.png"
/>
<link
rel="apple-touch-icon-precomposed"
sizes="76x76"
href="/assets/apple-touch-icon-76x76.png"
/>
<link
rel="apple-touch-icon-precomposed"
sizes="152x152"
href="/assets/apple-touch-icon-152x152.png"
/>
<link
rel="icon"
type="image/png"
href="/assets/favicon-196x196.png"
sizes="196x196"
/>
<link
rel="icon"
type="image/png"
href="/assets/favicon-96x96.png"
sizes="96x96"
/>
<link
rel="icon"
type="image/png"
href="/assets/favicon-32x32.png"
sizes="32x32"
/>
<link
rel="icon"
type="image/png"
href="/assets/favicon-16x16.png"
sizes="16x16"
/>
<link
rel="icon"
type="image/png"
href="/assets/favicon-128.png"
sizes="128x128"
/> */}
        <meta name="application-name" content="&nbsp;" />
        <meta name="msapplication-TileColor" content="#FFFFFF" />
        {/* <meta
name="msapplication-TileImage"
content="/assets/mstile-144x144.png"
/>
<meta
name="msapplication-square70x70logo"
content="/assets/mstile-70x70.png"
/>
<meta
name="msapplication-square150x150logo"
content="/assets/mstile-150x150.png"
/>
<meta
name="msapplication-wide310x150logo"
content="/assets/mstile-310x150.png"
/>
<meta
name="msapplication-square310x310logo"
content="/assets/mstile-310x310.png"
/> */}
        <link rel="canonical" href={meta.canonicalUrl} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Braydon Coyer" />
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
      <MenuBar />
      <div className="z-10">
        <PageTransition>{children}</PageTransition>
      </div>
    </div>
  );
}

