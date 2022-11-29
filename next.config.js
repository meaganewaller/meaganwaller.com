/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com", "www.google.com", "www.notion.so"],
  },
  swcMinify: true,
}

module.exports = nextConfig
