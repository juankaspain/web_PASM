/* eslint-disable @typescript-eslint/no-require-imports */
const withBundleAnalyzer =
  process.env.ANALYZE === 'true'
    ? require('@next/bundle-analyzer')({ enabled: true })
    : (config) => config
/* eslint-enable @typescript-eslint/no-require-imports */

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,

  // Static export for Hostinger shared hosting. Deploy the generated `out/`
  // folder contents to public_html.
  output: 'export',

  // Images: unoptimized for static export (no server-side optimization)
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
      },
      {
        protocol: 'https',
        hostname: 'github.com',
        pathname: '/user-attachments/**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    qualities: [75, 80, 85, 90, 100],
    minimumCacheTTL: 31536000, // 1 year
    dangerouslyAllowSVG: false,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    unoptimized: true,
    loader: 'default',
  },

  // Security and cache headers for Hostinger are defined in public/.htaccess.

  // Compression
  compress: true,

  // Power optimization
  poweredByHeader: false,

  // Apache shared hosting resolves static directories more reliably with trailing slashes.
  trailingSlash: true,

  // Experimental features for better performance
  experimental: {
    optimizePackageImports: [
      'lucide-react',
      'react-hook-form',
      '@hookform/resolvers',
      'zod',
    ],
  },

  // Compiler optimizations (uses SWC by default)
  compiler: {
    removeConsole:
      process.env.NODE_ENV === 'production'
        ? {
            exclude: ['error', 'warn'],
          }
        : false,
    reactRemoveProperties: process.env.NODE_ENV === 'production',
  },
}

module.exports = withBundleAnalyzer(nextConfig)
