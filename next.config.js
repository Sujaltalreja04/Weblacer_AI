/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'images.pexels.com',
      'i.postimg.cc',
      'i.ibb.co',
      'media.licdn.com',
      'cdn.jsdelivr.net'
    ],
    unoptimized: true
  },
  experimental: {
    optimizePackageImports: ['lucide-react']
  }
}

module.exports = nextConfig