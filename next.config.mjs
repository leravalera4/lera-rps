/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_ACTIONS === 'true' || process.env.GITHUB_PAGES === 'true'
const repo = 'lera-rps'

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  ...(isGithubPages ? { basePath: `/${repo}`, assetPrefix: `/${repo}/` } : {}),
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
