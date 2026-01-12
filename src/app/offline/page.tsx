import { WifiOff, RefreshCw, Home } from 'lucide-react'
import Link from 'next/link'

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
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-950 to-slate-900 flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8 inline-flex p-6 bg-slate-900/50 rounded-full border border-slate-700/50">
          <WifiOff className="w-16 h-16 text-yellow-400" />
        </div>

        <h1 className="text-4xl font-bold text-white mb-4">
          Sin conexión a Internet
        </h1>

        <p className="text-lg text-gray-300 mb-8">
          Parece que no tienes conexión a Internet. Por favor, verifica tu conexión e intenta nuevamente.
        </p>

        <div className="space-y-4">
          <button
            onClick={() => window.location.reload()}
            className="w-full inline-flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-4 px-6 rounded-xl transition-all transform hover:scale-105 active:scale-95"
          >
            <RefreshCw className="w-5 h-5" />
            Reintentar
          </button>

          <Link
            href="/"
            className="w-full inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-semibold py-4 px-6 rounded-xl transition-all transform hover:scale-105 active:scale-95"
          >
            <Home className="w-5 h-5" />
            Volver al inicio
          </Link>
        </div>

        <div className="mt-12 p-6 bg-slate-900/50 rounded-xl border border-slate-700/50">
          <h2 className="text-sm font-semibold text-yellow-400 mb-3 uppercase tracking-wider">
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
