/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true, // 如果部署到静态网站托管服务，需要设置为true
    domains: [],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // 输出静态文件（用于静态网站托管）
  output: 'export',
  trailingSlash: true,
  // 禁用图片优化（用于静态导出）
  experimental: {
    images: {
      unoptimized: true
    }
  }
}

module.exports = nextConfig
