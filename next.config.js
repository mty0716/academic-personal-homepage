/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
const isGitHubPages = process.env.GITHUB_PAGES === 'true'

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
  // 输出静态文件（用于静态网站托管）
  output: 'export',
  trailingSlash: true,
  // GitHub Pages 配置（仅在GitHub Pages部署时启用）
  assetPrefix: isProd && isGitHubPages ? '/academic-personal-homepage' : '',
  basePath: isProd && isGitHubPages ? '/academic-personal-homepage' : '',
}

module.exports = nextConfig
