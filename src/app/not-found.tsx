import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black px-4">
      <div className="max-w-lg text-center">
        <h1 className="mb-4 text-8xl font-bold text-yellow-400">404</h1>
        <h2 className="mb-4 text-2xl font-bold text-white">Página no encontrada</h2>
        <p className="mb-8 text-slate-400">
          La página que buscas no existe o ha sido movida. Vuelve al portfolio para
          descubrir mi trabajo.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full bg-yellow-400 px-6 py-3 font-semibold text-black transition-colors hover:bg-yellow-300"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  )
}
