/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
  // 输出静态文件（用于静态网站托管）
  output: 'export',
  trailingSlash: true,
}

module.exports = nextConfig
