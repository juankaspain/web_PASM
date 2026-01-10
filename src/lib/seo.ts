// SEO utilities and helpers

import { SITE_CONFIG } from './constants'
import type { Metadata } from 'next'

interface SEOProps {
  title?: string
  description?: string
  image?: string
  url?: string
  type?: 'website' | 'profile' | 'article'
  keywords?: string[]
}

/**
 * Generate metadata for pages
 */
export function generateMetadata({
  title,
  description,
  image = '/images/og-image.jpg',
  url,
  type = 'website',
  keywords = [],
}: SEOProps = {}): Metadata {
  const pageTitle = title ? `${title} | ${SITE_CONFIG.name}` : SITE_CONFIG.title
  const pageDescription = description || SITE_CONFIG.description
  const pageUrl = url ? `${SITE_CONFIG.url}${url}` : SITE_CONFIG.url
  const imageUrl = image.startsWith('http') ? image : `${SITE_CONFIG.url}${image}`

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: keywords.join(', '),
    authors: [{ name: SITE_CONFIG.author }],
    creator: SITE_CONFIG.author,
    publisher: SITE_CONFIG.author,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      type,
      locale: SITE_CONFIG.locale,
      url: pageUrl,
      title: pageTitle,
      description: pageDescription,
      siteName: SITE_CONFIG.name,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: pageTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: pageDescription,
      images: [imageUrl],
      creator: '@almagroSM',
    },
    alternates: {
      canonical: pageUrl,
    },
  }
}

/**
 * Generate JSON-LD structured data
 */
export function generatePersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    email: SITE_CONFIG.email,
    jobTitle: 'Actor',
    worksFor: {
      '@type': 'Organization',
      name: 'Actor Independiente',
    },
    sameAs: Object.values([
      'https://www.instagram.com/almagrosanmiguel/',
      'https://x.com/almagroSM',
      'https://www.imdb.com/name/nm9017709/',
    ]),
  }
}

/**
 * Generate breadcrumb schema
 */
export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_CONFIG.url}${item.url}`,
    })),
  }
}
