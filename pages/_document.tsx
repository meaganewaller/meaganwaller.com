import Document, { Html, Head, Main, NextScript } from "next/document";

export const siteTitle = "Meagan Waller";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
          <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,700;1,400;1,700&family=IBM+Plex+Mono:ital,wght@0,400;0,600;1,400;1,600&family=Prata&display=swap" rel="stylesheet" />
          <meta name="description" content="Meta description" />
          <meta property="og:image" content="/images/open-graph-image.png" />
          <meta name="og:title" content={siteTitle} />
          <meta name="twitter:card" content={siteTitle} />
          <meta name="twitter:site" content="@meaganewaller" />
          <meta name="twitter:creator" content="@meaganewaller" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/icons/favicons/apple-touch-icon.png"
            />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/icons/favicons/favicon-32x32.png"
            />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/icons/favicons/favicon-16x16.png"
            />
          <link rel="manifest" href="/icons/favicons/site.webmanifest" />
        </Head>
        <body className="bg-champagne dark:bg-[#101010] text-onyx dark:text-champagne transition duration-300">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument;
