import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://almagrosanmiguel.com'
  
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/private/',
          '/_next/',
          '/admin/',
        ],
      },
      // Google bots - full access
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: [
          '/api/',
          '/private/',
        ],
        crawlDelay: 0,
      },
      {
        userAgent: 'Googlebot-Image',
        allow: '/',
        disallow: [
          '/api/',
          '/private/',
        ],
      },
      // Bing
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: [
          '/api/',
          '/private/',
        ],
        crawlDelay: 1,
      },
      // Social media bots
      {
        userAgent: ['Twitterbot', 'facebookexternalhit'],
        allow: '/',
      },
      // Block bad bots
      {
        userAgent: [
          'AhrefsBot',
          'SemrushBot',
          'DotBot',
          'MJ12bot',
          'BLEXBot',
        ],
        disallow: '/',
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}
