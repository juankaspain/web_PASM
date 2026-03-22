/* eslint-disable @typescript-eslint/no-require-imports */
const withBundleAnalyzer =
  process.env.ANALYZE === 'true'
    ? require('@next/bundle-analyzer')({ enabled: true })
    : (config) => config
/* eslint-enable @typescript-eslint/no-require-imports */

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

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
    optimizePackageImports: ['lucide-react', 'react-icons'],
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
        splitChunks: {
          chunks: 'all',
          cacheGroups: {
            default: false,
            vendors: false,
            framework: {
              name: 'framework',
              chunks: 'all',
              test: /[\\/]node_modules[\\/](react|react-dom|scheduler)[\\/]/,
              priority: 40,
              enforce: true,
            },
            lib: {
              test: /[\\/]node_modules[\\/]/,
              name(module) {
                const packageName = module.context.match(
                  /[\\/]node_modules[\\/](.*?)([\\/]|$)/
                )?.[1]
                return `npm.${packageName?.replace('@', '')}`
              },
              priority: 30,
              minChunks: 1,
              reuseExistingChunk: true,
            },
            commons: {
              name: 'commons',
              minChunks: 2,
              priority: 20,
            },
          },
        },
        minimize: process.env.NODE_ENV === 'production',
      }

      config.performance = {
        ...config.performance,
        hints: process.env.NODE_ENV === 'production' ? 'warning' : false,
        maxAssetSize: 244000,
        maxEntrypointSize: 244000,
      }
    }

    return config
  },
}

module.exports = withBundleAnalyzer(nextConfig)
