/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com", "www.google.com", "www.notion.so", "via.placeholder.com"],
  },
  swcMinify: true,
}

module.exports = nextConfig
