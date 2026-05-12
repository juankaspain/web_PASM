import type { Metadata } from 'next'
import LegalNoticeClient from './LegalNoticeClient'

export const metadata: Metadata = {
  title: 'Aviso Legal',
  description:
    'Aviso legal del sitio web de Almagro San Miguel, actor profesional. Información sobre el titular, propiedad intelectual y condiciones de uso.',
  alternates: {
    canonical: 'https://almagrosanmiguel.com/legal',
  },
  robots: {
    index: false,
    follow: true,
  },
  openGraph: {
    title: 'Aviso Legal | Almagro San Miguel',
    description:
      'Aviso legal del sitio web de Almagro San Miguel, actor profesional.',
    url: 'https://almagrosanmiguel.com/legal',
  },
}

export default function LegalPage() {
  return <LegalNoticeClient />
}
