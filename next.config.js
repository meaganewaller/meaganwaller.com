/** @type {import('next').NextConfig} */
const nextConfig = {
  future: {
    strictPostCssConfiguration: true,
  },
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com", "www.google.com", "www.notion.so", "via.placeholder.com", "s3.us-west-2.amazonaws.com"],
  },
  swcMinify: true,
}

module.exports = nextConfig
