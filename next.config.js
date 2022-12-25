const { withSentryConfig } = require('@sentry/nextjs')

/** @type {import('next').NextConfig} */
const moduleExports = {
  swcMinify: true,
  images: {
    domains: [
      "res.cloudinary.com",
      "meaganwaller.com",
      "proxy.meaganwaller.com",
      "unsplash.com",
      "twemoji.maxcdn.com",
      "s3.us-west-2.amazonaws.com",
      "www.notion.so"
    ],
  },
  sentry: {
    // Use `hidden-source-map` rather than `source-map` as the Webpack `devtool`
    // for client-side builds. (This will be the default starting in
    // `@sentry/nextjs` version 8.0.0.) See
    // https://webpack.js.org/configuration/devtool/ and
    // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/#use-hidden-source-map
    // for more information.
    hideSourceMaps: true,
  },
  webpack: (config, { dev, isServer }) => {
    if (isServer) return config

    const { resolve } = config

    return {
      ...config,
      resolve: {
        ...resolve,
        fallback: {
          ...resolve.fallback,
          net: false,
          tls: false,
          fs: false,
          child_process: false,
        },
      },
    }
  },
  async redirects() {
    return [
      {
        source: "/sponsor",
        destination: "https://github.com/sponsors/meaganewaller",
        permanent: true,
      },
      {
        source: "/twitter",
        destination: "https://twitter.com/meaganewaller",
        permanent: true,
      },
      {
        source: "/github",
        destination: "https://github.com/meaganewaller",
        permanent: true,
      },
      {
        source: "/codepen",
        destination: "https://codepen.io/meaganewaller",
        permanent: true,
      },
    ]
  },
  async rewrites() {
    return [
      {
        source: "/feed/:format*",
        destination: "/api/feed?f=:format*",
      },
      {
        source: "/sitemap.xml",
        destination: "/sitemap",
      },
      {
        source: "/robots.txt",
        destination: "/.well-known/robots.txt",
      },
    ]
  },
}

const sentryWebpackPluginOptions = {
  silent: true
}


module.exports = withSentryConfig(moduleExports, sentryWebpackPluginOptions)
