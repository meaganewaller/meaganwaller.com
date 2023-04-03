/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true,
  },
  images: {
    domains: [
      "res.cloudinary.com",
      "meaganwaller.com",
      "proxy.meaganwaller.com",
      "unsplash.com",
      "twemoji.maxcdn.com",
      "s3.us-west-2.amazonaws.com",
      "counter1.fc2.com",
      "www.notion.so",
      "picsum.photos",
      "images.unsplash.com",
    ],
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
    ];
  },
  async redirects() {
    return [
      // {
      //   source: '/pgp',
      //   destination: 'https://keybase.io/meaganewaller/pgp_keys.asc',
      //   permanent: false,
      // },
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
    ];
  },
};

module.exports = config;
