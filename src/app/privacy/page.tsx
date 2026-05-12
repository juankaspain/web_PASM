import type { Metadata } from 'next'
import PrivacyPolicyClient from './PrivacyPolicyClient'

export const metadata: Metadata = {
  title: 'Política de Privacidad',
  description:
    'Política de privacidad de almagrosanmiguel.com. Información sobre el tratamiento de datos personales conforme al RGPD y la LOPDGDD.',
  alternates: {
    canonical: 'https://almagrosanmiguel.com/privacy',
  },
  robots: {
    index: false,
    follow: true,
  },
  openGraph: {
    title: 'Política de Privacidad | Almagro San Miguel',
    description:
      'Información sobre el tratamiento de datos personales conforme al RGPD y la LOPDGDD.',
    url: 'https://almagrosanmiguel.com/privacy',
  },
}

export default function PrivacyPage() {
  return <PrivacyPolicyClient />
}
