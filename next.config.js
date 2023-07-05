/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains:["localhost","185.74.5.188","api.getter.uz"]
  },
}

module.exports = nextConfig
