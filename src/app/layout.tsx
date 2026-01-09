import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Analytics from '@/components/Analytics'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://almagrosanmiguel.com'),
  title: 'Almagro San Miguel - Actor Profesional | Sevilla, España',
  description:
    'Actor profesional con 13+ años de experiencia en TV, cine y teatro. 300+ episodios en series como La Moderna, Vis a vis: El Oasis, Hernán. ESAD Sevilla, CNTC. Disponible para castings.',
  keywords: [
    'Almagro San Miguel',
    'actor español',
    'actor Sevilla',
    'La Moderna',
    'Vis a vis El Oasis',
    'Hernán Prime Video',
    'actor TVE',
    'teatro clásico',
    'ESAD Sevilla',
    'CNTC',
    'actor profesional',
    'casting actor',
    'portfolio actor',
  ],
  authors: [{ name: 'Almagro San Miguel' }],
  creator: 'Almagro San Miguel',
  publisher: 'Almagro San Miguel',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'profile',
    locale: 'es_ES',
    url: 'https://almagrosanmiguel.com',
    siteName: 'Almagro San Miguel - Actor Profesional',
    title: 'Almagro San Miguel - Actor Profesional | Portfolio',
    description:
      'Actor con 13+ años de experiencia. 300+ episodios en TV. Protagonista de La Moderna (TVE) y Vis a vis: El Oasis. ESAD Sevilla, CNTC.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Almagro San Miguel - Actor Profesional',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@almagroSM',
    creator: '@almagroSM',
    title: 'Almagro San Miguel - Actor Profesional',
    description:
      'Actor con 13+ años de experiencia. 300+ episodios en TV. La Moderna, Vis a vis: El Oasis, Hernán.',
    images: ['/twitter-image.jpg'],
  },
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
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  alternates: {
    canonical: 'https://almagrosanmiguel.com',
    languages: {
      'es-ES': 'https://almagrosanmiguel.com',
    },
  },
  verification: {
    google: 'google-site-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        {/* Schema.org Person Markup */}
        <Script
          id="person-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Almagro San Miguel',
              alternateName: 'Pedro Francisco Almagro Gordillo',
              birthDate: '1990-03-07',
              birthPlace: {
                '@type': 'Place',
                address: {
                  '@type': 'PostalAddress',
                  addressLocality: 'Sevilla',
                  addressRegion: 'Andalucía',
                  addressCountry: 'ES',
                },
              },
              nationality: {
                '@type': 'Country',
                name: 'Spain',
              },
              jobTitle: 'Actor',
              alumniOf: [
                {
                  '@type': 'EducationalOrganization',
                  name: 'Escuela Superior de Arte Dramático de Sevilla',
                },
                {
                  '@type': 'Organization',
                  name: 'Compañía Nacional de Teatro Clásico',
                },
              ],
              knowsAbout: [
                'Acting',
                'Theater',
                'Television',
                'Film',
                'Classical Spanish Verse',
                'Stage Combat',
                'Horseback Riding',
              ],
              url: 'https://almagrosanmiguel.com',
              image: 'https://almagrosanmiguel.com/profile-image.jpg',
              sameAs: [
                'https://www.imdb.com/name/nm9017709/',
                'https://es.wikipedia.org/wiki/Almagro_San_Miguel',
                'https://www.instagram.com/almagrosanmiguel/',
                'https://x.com/almagroSM',
                'https://www.facebook.com/almagrosanmiguel/',
              ],
              email: 'info@almagrosanmiguel.com',
              award: [
                'Mejor Espectáculo del Año 2016 - Oliver Twist',
                'Nominación Mejor Actor Secundario 2015 - Fuente Ovejuna',
              ],
            }),
          }}
        />

        {/* Schema.org PerformanceRole for TV Series */}
        <Script
          id="performance-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'TVSeries',
              name: 'La Moderna',
              actor: {
                '@type': 'Person',
                name: 'Almagro San Miguel',
              },
              numberOfEpisodes: 236,
              productionCompany: {
                '@type': 'Organization',
                name: 'TVE',
              },
            }),
          }}
        />

        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
