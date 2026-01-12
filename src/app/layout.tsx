import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Analytics from '@/components/Analytics'
import PWAInstall from '@/components/PWAInstall'
import Script from 'next/script'

// Optimized font configuration with display swap and fallbacks
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
  fallback: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Arial', 'sans-serif']
})

export const metadata: Metadata = {
  metadataBase: new URL('https://almagrosanmiguel.com'),
  title: {
    default: 'Almagro San Miguel - Actor Profesional | Portfolio Oficial',
    template: '%s | Almagro San Miguel - Actor',
  },
  description:
    'Actor profesional con 13+ años de experiencia en TV, cine y teatro. Más de 300 episodios en series como La Moderna (TVE), Vis a vis: El Oasis (Fox), Hernán (Prime Video). Formación ESAD Sevilla y CNTC. Especialista en verso clásico español, combate escénico y equitación. Disponible para castings y colaboraciones profesionales.',
  keywords: [
    // Nombre y variantes
    'Almagro San Miguel',
    'Pedro Francisco Almagro Gordillo',
    'Almagro actor',
    'San Miguel actor',
    
    // Series principales
    'La Moderna TVE',
    'La Moderna actor',
    'Íñigo Peñalver La Moderna',
    'Vis a vis El Oasis',
    'Diego Ramala Vis a vis',
    'Hernán Prime Video',
    'Gonzalo de Sandoval Hernán',
    'La Caza Guadiana',
    'Estoy vivo TVE',
    'Operación Barrio Inglés',
    
    // Localización
    'actor español',
    'actor Sevilla',
    'actor Madrid',
    'actor andaluz',
    'actor sevillano',
    
    // Tipo de actor
    'actor profesional',
    'actor televisión',
    'actor cine',
    'actor teatro',
    'galán actor',
    'protagonista series',
    
    // Formación
    'ESAD Sevilla',
    'CNTC actor',
    'Compañía Nacional Teatro Clásico',
    'verso clásico español',
    
    // Habilidades
    'esgrima teatral',
    'combate escénico',
    'equitación actor',
    'actor musical',
    'actor bilingüe',
    
    // Plataformas
    'actor TVE',
    'actor Prime Video',
    'actor Fox',
    'actor Netflix',
    'actor HBO',
    
    // Profesional
    'casting actor',
    'portfolio actor',
    'book actor',
    'reel actor',
    'headshots actor',
    'representación actor',
    'agencia actores',
    
    // Teatro específico
    'Oliver Twist musical',
    'Fuente Ovejuna CNTC',
    'teatro clásico',
  ],
  authors: [{ name: 'Almagro San Miguel', url: 'https://almagrosanmiguel.com' }],
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
    title: 'Almagro San Miguel - Actor Profesional | 300+ Episodios | TVE, Prime Video, Fox',
    description:
      'Actor con 13+ años de experiencia. Más de 300 episodios en TV. Protagonista de La Moderna (TVE) y Vis a vis: El Oasis (Fox). Formación ESAD Sevilla y CNTC. Especialista en verso clásico, combate escénico y equitación.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Almagro San Miguel - Actor Profesional',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@almagroSM',
    creator: '@almagroSM',
    title: 'Almagro San Miguel - Actor Profesional',
    description:
      'Actor con 13+ años de experiencia. Más de 300 episodios en TV. La Moderna (TVE), Vis a vis: El Oasis (Fox), Hernán (Prime Video).',
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
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    shortcut: '/favicon.svg',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  alternates: {
    canonical: 'https://almagrosanmiguel.com',
    languages: {
      'es-ES': 'https://almagrosanmiguel.com',
      'en-US': 'https://almagrosanmiguel.com/en',
    },
  },
  verification: {
    google: 'pending-verification',
  },
  category: 'entertainment',
  other: {
    'font-display': 'swap',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={inter.variable} suppressHydrationWarning>
      <head>
        {/* Preconnect to external domains for faster loading */}
        <link rel="preconnect" href="https://www.google-analytics.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://formspree.io" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://formspree.io" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        {children}
        <Analytics />
        <PWAInstall />
        
        {/* Enhanced Schema.org Person Markup - Deferred for performance */}
        <Script
          id="person-schema"
          type="application/ld+json"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              '@id': 'https://almagrosanmiguel.com/#person',
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
              homeLocation: {
                '@type': 'Place',
                address: {
                  '@type': 'PostalAddress',
                  addressLocality: 'Madrid y Sevilla',
                  addressCountry: 'ES',
                },
              },
              nationality: {
                '@type': 'Country',
                name: 'Spain',
              },
              jobTitle: [
                'Actor',
                'Television Actor',
                'Film Actor',
                'Theater Actor',
              ],
              hasOccupation: {
                '@type': 'Occupation',
                name: 'Actor',
                occupationLocation: {
                  '@type': 'Country',
                  name: 'Spain',
                },
                skills: [
                  'Acting',
                  'Classical Spanish Verse',
                  'Stage Combat',
                  'Fencing',
                  'Horseback Riding',
                  'Musical Theater',
                  'Cello',
                  'Singing',
                ],
              },
              alumniOf: [
                {
                  '@type': 'EducationalOrganization',
                  name: 'Escuela Superior de Arte Dramático de Sevilla',
                  alternateName: 'ESAD Sevilla',
                },
                {
                  '@type': 'Organization',
                  name: 'Compañía Nacional de Teatro Clásico',
                  alternateName: 'CNTC',
                },
              ],
              knowsAbout: [
                'Acting',
                'Theater',
                'Television',
                'Film',
                'Classical Spanish Verse',
                'Stage Combat',
                'Fencing',
                'Horseback Riding',
                'Musical Theater',
                'Drama',
                'Comedy',
              ],
              knowsLanguage: [
                {
                  '@type': 'Language',
                  name: 'Spanish',
                  alternateName: 'es',
                },
                {
                  '@type': 'Language',
                  name: 'English',
                  alternateName: 'en',
                },
                {
                  '@type': 'Language',
                  name: 'French',
                  alternateName: 'fr',
                },
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
              contactPoint: {
                '@type': 'ContactPoint',
                email: 'info@almagrosanmiguel.com',
                contactType: 'Professional Inquiries',
                availableLanguage: ['Spanish', 'English'],
              },
              award: [
                'Mejor Espectáculo del Año 2016 - Oliver Twist',
                'Nominación Mejor Actor Secundario 2015 - Fuente Ovejuna (Unión de Actores)',
              ],
              performerIn: [
                {
                  '@type': 'TVSeries',
                  name: 'La Moderna',
                  '@id': 'https://www.imdb.com/title/tt28688509/',
                },
                {
                  '@type': 'TVSeries',
                  name: 'Vis a vis: El Oasis',
                  '@id': 'https://www.imdb.com/title/tt11177074/',
                },
                {
                  '@type': 'TVSeries',
                  name: 'Hernán',
                  '@id': 'https://www.imdb.com/title/tt8741704/',
                },
              ],
            }),
          }}
        />

        {/* ItemList Schema for Filmography */}
        <Script
          id="filmography-schema"
          type="application/ld+json"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ItemList',
              itemListElement: [
                {
                  '@type': 'ListItem',
                  position: 1,
                  item: {
                    '@type': 'TVSeries',
                    name: 'La Moderna',
                    actor: {
                      '@type': 'Person',
                      name: 'Almagro San Miguel',
                      '@id': 'https://almagrosanmiguel.com/#person',
                    },
                    numberOfEpisodes: 236,
                    productionCompany: {
                      '@type': 'Organization',
                      name: 'TVE',
                    },
                    startDate: '2023',
                    endDate: '2024',
                    url: 'https://www.imdb.com/title/tt28688509/',
                  },
                },
                {
                  '@type': 'ListItem',
                  position: 2,
                  item: {
                    '@type': 'TVSeries',
                    name: 'Vis a vis: El Oasis',
                    actor: {
                      '@type': 'Person',
                      name: 'Almagro San Miguel',
                      '@id': 'https://almagrosanmiguel.com/#person',
                    },
                    numberOfEpisodes: 8,
                    productionCompany: {
                      '@type': 'Organization',
                      name: 'Fox Spain',
                    },
                    startDate: '2020',
                    url: 'https://www.imdb.com/title/tt11177074/',
                  },
                },
                {
                  '@type': 'ListItem',
                  position: 3,
                  item: {
                    '@type': 'TVSeries',
                    name: 'Hernán',
                    actor: {
                      '@type': 'Person',
                      name: 'Almagro San Miguel',
                      '@id': 'https://almagrosanmiguel.com/#person',
                    },
                    numberOfEpisodes: 8,
                    productionCompany: {
                      '@type': 'Organization',
                      name: 'Amazon Prime Video',
                    },
                    startDate: '2019',
                    url: 'https://www.imdb.com/title/tt8741704/',
                  },
                },
              ],
            }),
          }}
        />

        {/* BreadcrumbList Schema */}
        <Script
          id="breadcrumb-schema"
          type="application/ld+json"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                {
                  '@type': 'ListItem',
                  position: 1,
                  name: 'Inicio',
                  item: 'https://almagrosanmiguel.com',
                },
                {
                  '@type': 'ListItem',
                  position: 2,
                  name: 'Biografía',
                  item: 'https://almagrosanmiguel.com/#about',
                },
                {
                  '@type': 'ListItem',
                  position: 3,
                  name: 'Portfolio',
                  item: 'https://almagrosanmiguel.com/#portfolio',
                },
                {
                  '@type': 'ListItem',
                  position: 4,
                  name: 'Contacto',
                  item: 'https://almagrosanmiguel.com/#contact',
                },
              ],
            }),
          }}
        />

        {/* WebSite Schema */}
        <Script
          id="website-schema"
          type="application/ld+json"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              '@id': 'https://almagrosanmiguel.com/#website',
              url: 'https://almagrosanmiguel.com',
              name: 'Almagro San Miguel - Actor Profesional',
              description:
                'Portfolio oficial del actor Almagro San Miguel. 13+ años de experiencia en TV, cine y teatro.',
              publisher: {
                '@type': 'Person',
                '@id': 'https://almagrosanmiguel.com/#person',
              },
              inLanguage: 'es-ES',
              potentialAction: {
                '@type': 'SearchAction',
                target: {
                  '@type': 'EntryPoint',
                  urlTemplate:
                    'https://almagrosanmiguel.com/?s={search_term_string}',
                },
                'query-input': 'required name=search_term_string',
              },
            }),
          }}
        />

        {/* ProfilePage Schema */}
        <Script
          id="profilepage-schema"
          type="application/ld+json"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ProfilePage',
              mainEntity: {
                '@id': 'https://almagrosanmiguel.com/#person',
              },
              breadcrumb: {
                '@id': 'https://almagrosanmiguel.com/#breadcrumb',
              },
            }),
          }}
        />
      </body>
    </html>
  )
}
