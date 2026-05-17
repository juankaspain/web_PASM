import type { Metadata } from 'next'
import CookiesPolicyClient from './CookiesPolicyClient'

export const metadata: Metadata = {
  title: 'Política de Cookies',
  description:
    'Información sobre el uso de cookies necesarias, analíticas, preferencias y marketing en el portfolio oficial de Almagro San Miguel.',
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: 'https://almagrosanmiguel.com/cookies/',
  },
}

export default function CookiesPolicyPage() {
  return <CookiesPolicyClient />
}
