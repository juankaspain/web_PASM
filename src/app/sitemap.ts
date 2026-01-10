import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://almagrosanmiguel.com'
  const currentDate = new Date()

  // Main pages with high priority
  const mainPages = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/#about`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/#portfolio`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.95,
    },
    {
      url: `${baseUrl}/#timeline`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#skills`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/#stats`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
  ]

  // Project pages (TODO: Add individual project pages)
  const projects = [
    'la-moderna',
    'vis-a-vis-el-oasis',
    'hernan',
    'operacion-barrio-ingles',
    'la-caza-guadiana',
    'un-fantasma-en-la-batalla',
  ]

  const projectPages = projects.map((slug) => ({
    url: `${baseUrl}/projects/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }))

  return [...mainPages, ...projectPages]
}
