import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import Analytics from '@/components/Analytics'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  preload: true,
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
  preload: true,
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL('https://pedroalmagro.com'),
  title: {
    default: 'Pedro Almagro | Actor Profesional - Teatro, Cine y Televisión',
    template: '%s | Pedro Almagro',
  },
  description:
    'Pedro Almagro es un actor y performer profesional con más de 15 años de experiencia en teatro, cine y televisión. Descubre su portafolio, showreel y trayectoria artística.',
  keywords: [
    'Pedro Almagro',
    'actor',
    'actor español',
    'actor Sevilla',
    'teatro',
    'cine español',
    'televisión',
    'performer',
    'portafolio actor',
    'showreel',
    'casting',
    'actor profesional',
    'Andalucía',
    'Sevilla',
    'España',
  ],
  authors: [{ name: 'Pedro Almagro', url: 'https://pedroalmagro.com' }],
  creator: 'Pedro Almagro',
  publisher: 'Pedro Almagro',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://pedroalmagro.com',
    title: 'Pedro Almagro | Actor Profesional - Teatro, Cine y Televisión',
    description:
      'Actor y performer con más de 15 años de experiencia. Portfolio completo con trabajos en cine, teatro y televisión.',
    siteName: 'Pedro Almagro - Actor',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Pedro Almagro - Actor Profesional',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pedro Almagro | Actor Profesional',
    description:
      'Actor con 15+ años de experiencia en teatro, cine y TV. Descubre mi portfolio y showreel.',
    images: ['/og-image.jpg'],
    creator: '@pedroalmagro',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://pedroalmagro.com',
    languages: {
      'es-ES': 'https://pedroalmagro.com',
    },
  },
  category: 'Entertainment',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Pedro Almagro',
  jobTitle: 'Actor & Performer',
  url: 'https://pedroalmagro.com',
  image: 'https://pedroalmagro.com/og-image.jpg',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Sevilla',
    addressRegion: 'Andalucía',
    addressCountry: 'ES',
  },
  alumniOf: {
    '@type': 'EducationalOrganization',
    name: 'Escuela Superior de Arte Dramático de Sevilla',
  },
  knowsAbout: [
    'Acting',
    'Theater',
    'Film',
    'Television',
    'Performance Art',
  ],
  performerIn: [
    {
      '@type': 'Movie',
      name: 'El Último Adiós',
      datePublished: '2024',
    },
    {
      '@type': 'TVSeries',
      name: 'Sombras de Medianoche',
      datePublished: '2023',
    },
    {
      '@type': 'TheaterEvent',
      name: 'Hamlet',
      location: {
        '@type': 'Place',
        name: 'Teatro Central',
        address: 'Sevilla, Spain',
      },
      startDate: '2023',
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          inter.variable,
          playfair.variable
        )}
      >
        {children}
        <Analytics />
      </body>
    </html>
  )
}
