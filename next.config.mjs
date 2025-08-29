/** @type {import('next').NextConfig} */

// Configure base path dynamically for GitHub Pages.
// - For project pages (no custom domain): set PAGES_BASE_PATH=lera-rps
// - For custom domain hosting: leave PAGES_BASE_PATH empty/undefined
const normalizeBase = (v) =>
  typeof v === 'string' && v.trim() !== ''
    ? '/' + v.replace(/^\/+|\/+$/g, '')
    : ''

const base = normalizeBase(process.env.PAGES_BASE_PATH)

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  ...(base
    ? { basePath: base, assetPrefix: base + '/' }
    : {}),
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  images: { unoptimized: true },
}

export default nextConfig
