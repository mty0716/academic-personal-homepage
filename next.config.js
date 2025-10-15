/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
  // 输出静态文件（用于静态网站托管）
  output: 'export',
  trailingSlash: true,
  // GitHub Pages 配置
  assetPrefix: isProd ? '/academic-personal-homepage' : '',
  basePath: isProd ? '/academic-personal-homepage' : '',
}

module.exports = nextConfig
