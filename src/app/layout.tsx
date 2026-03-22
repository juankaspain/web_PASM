import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import CookieConsent from '@/components/CookieConsent'
import Script from 'next/script'
import PassiveEvents from '@/components/PassiveEvents'

// Optimized font configuration with display swap and fallbacks
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
  fallback: [
    'system-ui',
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Arial',
    'sans-serif',
  ],
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
    title:
      'Almagro San Miguel - Actor Profesional | 300+ Episodios | TVE, Prime Video, Fox',
    description:
      'Actor con 13+ años de experiencia. Más de 300 episodios en TV. Protagonista de La Moderna (TVE) y Vis a vis: El Oasis (Fox). Formación ESAD Sevilla y CNTC. Especialista en verso clásico, combate escénico y equitación.',
    images: [
      {
        url: '/assets/og/main.jpg',
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
      'Actor con 13+ años de experiencia. Más de 300 episodios en TV. La Moderna (TVE), Vis a vis: El Oasis (Fox), Hernán (Prime Video).',
    images: ['/assets/og/main.jpg'],
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
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
    shortcut: '/favicon.svg',
  },
  manifest: '/site.webmanifest',
  alternates: {
    canonical: 'https://almagrosanmiguel.com',
    languages: {
      'es-ES': 'https://almagrosanmiguel.com',
    },
  },
  category: 'entertainment',
  applicationName: 'Almagro San Miguel Portfolio',
  referrer: 'origin-when-cross-origin',
  other: {
    'font-display': 'swap',
    'color-scheme': 'dark',
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={inter.variable} suppressHydrationWarning>
      <head>
        {/* Theme Color for PWA - unified with site.webmanifest */}
        <meta name="theme-color" content="#f59e0b" />
        <meta name="color-scheme" content="dark" />

        {/* Apple-specific meta tags */}
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="format-detection" content="telephone=no" />

        {/* Humans.txt reference */}
        <link rel="author" href="/humans.txt" />

        {/* Preload hero image for faster LCP */}
        <link rel="preload" as="image" href="/assets/hero/main.jpg" />
      </head>
      <body className={inter.className}>
        <PassiveEvents />
        {/* D.1 - Skip to content link for keyboard/screen reader users */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-yellow-400 focus:px-4 focus:py-2 focus:font-semibold focus:text-black focus:outline-none"
        >
          Saltar al contenido principal
        </a>
        {children}
        <CookieConsent />

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
              jobTitle: ['Actor', 'Television Actor', 'Film Actor', 'Theater Actor'],
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
              image: '/assets/og/main.jpg',
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
                  name: 'Series',
                  item: 'https://almagrosanmiguel.com/#series',
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

        {/* VideoObject Schema for Showreel */}
        <Script
          id="video-schema"
          type="application/ld+json"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'VideoObject',
              name: 'Almagro San Miguel - Showreel Profesional',
              description:
                'Showreel profesional del actor Almagro San Miguel con escenas de sus trabajos en televisión, cine y teatro',
              thumbnailUrl: 'https://img.youtube.com/vi/JjPtvXw-gyo/maxresdefault.jpg',
              uploadDate: '2024-01-01',
              duration: 'PT2M',
              contentUrl: 'https://www.youtube.com/watch?v=JjPtvXw-gyo',
              embedUrl: 'https://www.youtube.com/embed/JjPtvXw-gyo',
              publisher: {
                '@type': 'Person',
                '@id': 'https://almagrosanmiguel.com/#person',
              },
            }),
          }}
        />
      </body>
    </html>
  )
}
