/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["res.cloudinary.com", "meaganwaller.com", "proxy.meaganwaller.com", "unsplash.com", "twemoji.maxcdn.com", "s3.us-west-2.amazonaws.com", "www.notion.so"],
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
