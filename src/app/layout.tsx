import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import { GoogleAnalytics } from '@next/third-parties/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Almagro San Miguel - Actor Profesional | Sevilla',
  description:
    'Actor sevillano con más de 13 años de experiencia. Protagonista de La Moderna (TVE), Vis a vis: El Oasis, Hernán (Prime Video), Estoy vivo y La Caza. Graduado ESAD Sevilla y Compañía Nacional Teatro Clásico.',
  keywords: [
    'Almagro San Miguel',
    'Pedro Almagro',
    'actor español',
    'actor sevillano',
    'La Moderna TVE',
    'Vis a vis El Oasis',
    'Hernán Prime Video',
    'actor teatro clásico',
    'ESAD Sevilla',
    'Estoy vivo',
    'La Caza Guadiana',
    'Operación Barrio Inglés',
    'actor profesional España',
  ],
  authors: [{ name: 'Almagro San Miguel' }],
  creator: 'Almagro San Miguel',
  publisher: 'Almagro San Miguel',
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://almagrosanmiguel.com',
    siteName: 'Almagro San Miguel - Actor Profesional',
    title: 'Almagro San Miguel - Actor Profesional | Sevilla',
    description:
      'Actor sevillano protagonista de La Moderna, Vis a vis: El Oasis, Hernán y más. +13 años de experiencia en TV, cine y teatro.',
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
      'Actor sevillano protagonista de La Moderna (TVE), Vis a vis: El Oasis y Hernán. Portfolio completo.',
    images: ['/og-image.jpg'],
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
  alternates: {
    canonical: 'https://almagrosanmiguel.com',
    languages: {
      'es-ES': 'https://almagrosanmiguel.com',
    },
  },
  category: 'entertainment',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#1e293b" />
      </head>
      <body className="antialiased">{children}</body>
      {process.env.NEXT_PUBLIC_GA_ID && (
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
      )}
    </html>
  )
}
