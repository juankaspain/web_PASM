'use client'

import { RefreshCw } from 'lucide-react'

export default function ReloadButton() {
  return (
    <button
      onClick={() => window.location.reload()}
      className="inline-flex w-full transform items-center justify-center gap-2 rounded-xl bg-yellow-400 px-6 py-4 font-semibold text-black transition-all hover:scale-105 hover:bg-yellow-500 active:scale-95"
    >
      <RefreshCw className="h-5 w-5" />
      Reintentar
    </button>
  )
}
