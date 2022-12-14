/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  images: {
    domains: ["meaganwaller.com", "proxy.meaganwaller.com", "unsplash.com", "twemoji.maxcdn.com", "s3.us-west-2.amazonaws.com", "www.notion.so"],
  },
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      Object.assign(config.resolve.alias, {
        fs: "browserify-fs",
      })
    }
    return config
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
  async redirects() {
    return [
      {
        source: "/sponsor",
        destination: "https://github.com/sponsors/meaganewaller",
        permanent: true,
      },
    ]
  },
}

module.exports = config
