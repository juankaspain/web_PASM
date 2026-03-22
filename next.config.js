/* eslint-disable @typescript-eslint/no-require-imports */
const withBundleAnalyzer =
  process.env.ANALYZE === 'true'
    ? require('@next/bundle-analyzer')({ enabled: true })
    : (config) => config
/* eslint-enable @typescript-eslint/no-require-imports */

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,

  // Static export for Hostinger shared hosting
  output: 'export',

  // Images: unoptimized for static export (no server-side optimization)
  images: {
    unoptimized: true,
  },

  // Compression
  compress: true,

  // Power optimization
  poweredByHeader: false,

  // Trailing slashes
  trailingSlash: false,

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

  // Webpack optimizations
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.optimization = {
        ...config.optimization,
        usedExports: true,
        sideEffects: true,
        splitChunks: {
          ...config.optimization.splitChunks,
          chunks: 'all',
          minSize: 20000,
          maxSize: 60000,
          cacheGroups: {
            ...config.optimization.splitChunks?.cacheGroups,
            framework: {
              name: 'framework',
              test: /[\\/]node_modules[\\/](react|react-dom|scheduler)[\\/]/,
              priority: 40,
              enforce: true,
            },
            forms: {
              name: 'forms',
              test: /[\\/]node_modules[\\/](react-hook-form|@hookform|zod)[\\/]/,
              priority: 30,
              enforce: true,
            },
          },
        },
        minimize: process.env.NODE_ENV === 'production',
      }
    }

    return config
  },
}

module.exports = withBundleAnalyzer(nextConfig)
