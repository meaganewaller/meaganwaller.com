import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html className="h-full antialiased" lang="en">
      <title>meagan waller  |  software engineer</title>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <meta name="theme-color" content="#18181b" />
      </Head>
      <body className="flex h-full flex-col bg-zinc-50 dark:bg-black text-zinc-700 dark:text-zinc-300">
        <script data-goatcounter="https://konfusion.goatcounter.com/count" async src="//gc.zgo.at/count.js" />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
