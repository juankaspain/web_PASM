import { WifiOff, Home } from 'lucide-react'
import Link from 'next/link'
import ReloadButton from '@/components/ReloadButton'

export const metadata = {
  title: 'Sin conexión | Almagro San Miguel',
  description: 'Página offline',
  robots: {
    index: false,
    follow: false,
  },
}

export default function OfflinePage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-black via-slate-950 to-slate-900 p-4">
      <div className="w-full max-w-md text-center">
        <div className="mb-8 inline-flex rounded-full border border-slate-700/50 bg-slate-900/50 p-6">
          <WifiOff className="h-16 w-16 text-yellow-400" />
        </div>

        <h1 className="mb-4 text-4xl font-bold text-white">Sin conexión a Internet</h1>

        <p className="mb-8 text-lg text-gray-300">
          Parece que no tienes conexión a Internet. Por favor, verifica tu conexión e
          intenta nuevamente.
        </p>

        <div className="space-y-4">
          <ReloadButton />

          <Link
            href="/"
            className="inline-flex w-full transform items-center justify-center gap-2 rounded-xl bg-slate-800 px-6 py-4 font-semibold text-white transition-all hover:scale-105 hover:bg-slate-700 active:scale-95"
          >
            <Home className="h-5 w-5" />
            Volver al inicio
          </Link>
        </div>

        <div className="mt-12 rounded-xl border border-slate-700/50 bg-slate-900/50 p-6">
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-yellow-400">
            Contenido en caché
          </h2>
          <p className="text-sm text-gray-400">
            Algunas páginas visitadas recientemente pueden estar disponibles sin conexión.
            Intenta navegar a una página que hayas visitado antes.
          </p>
        </div>

        <div className="mt-8 text-sm text-gray-500">
          <p>Almagro San Miguel - Portfolio Profesional</p>
        </div>
      </div>
    </div>
  )
}
