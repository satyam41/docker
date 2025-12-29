/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  experimental: { runtime: 'edge' },
  distDir: 'build',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    appDir: true,
  },
}

export default nextConfig
