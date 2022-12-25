import React from 'react'
import { Html, Head, Main, NextScript } from "next/document"

export default function Document({ props }) {
  return (
    <Html lang="en">
      <Head>
        <meta name="robots" content="follow, index" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#000000" />
        <link rel="shortcut icon" href="/favicons/favicon.ico" />
        <meta name="msapplication-config" content="/favicons/browserconfig.xml" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com/" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,700;1,400;1,700&family=IBM+Plex+Mono:ital,wght@0,400;0,600;1,400;1,600&family=Prata&display=swap" rel="stylesheet"/>
      </Head>
      <body className="bg-white dark:bg-primary-darker text-primary dark:text-white">
        <Main {...props} />
        <NextScript />
      </body>
    </Html>
  )
}
