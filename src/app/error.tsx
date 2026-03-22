'use client'

export default function Error({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black px-4">
      <div className="max-w-lg text-center">
        <h1 className="mb-4 text-6xl font-bold text-yellow-400">Error</h1>
        <h2 className="mb-4 text-2xl font-bold text-white">Algo ha salido mal</h2>
        <p className="mb-8 text-slate-400">
          Ha ocurrido un error inesperado. Intenta recargar la página.
        </p>
        <button
          onClick={reset}
          className="inline-flex items-center gap-2 rounded-full bg-yellow-400 px-6 py-3 font-semibold text-black transition-colors hover:bg-yellow-300"
        >
          Intentar de nuevo
        </button>
      </div>
    </div>
  )
}
