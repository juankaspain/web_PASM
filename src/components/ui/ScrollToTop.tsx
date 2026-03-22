'use client'

import { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      // Mostrar el botón después de hacer scroll 400px
      if (window.scrollY > 400) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility, { passive: true })

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <button
      onClick={scrollToTop}
      aria-label="Volver arriba"
      className={`group fixed bottom-8 right-8 z-50 transition-all duration-300 ${
        isVisible
          ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 scale-75 translate-y-5 pointer-events-none'
      }`}
    >
      {/* Glow effect */}
      <div className="absolute inset-0 rounded-full bg-yellow-400/30 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" />

      {/* Button */}
      <div className="relative flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-gradient-to-br from-slate-900/95 to-black/95 shadow-[0_8px_32px_rgba(0,0,0,0.6)] backdrop-blur-xl transition-all duration-300 group-hover:border-yellow-400/50 group-hover:shadow-[0_8px_32px_rgba(250,204,21,0.3)]">
        <ArrowUp className="h-6 w-6 text-yellow-400 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-110" />
      </div>

      {/* Tooltip */}
      <div className="pointer-events-none absolute right-full top-1/2 mr-3 -translate-y-1/2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="whitespace-nowrap rounded-lg border border-white/10 bg-slate-900/95 px-3 py-2 shadow-lg backdrop-blur-xl">
          <p className="text-xs font-medium text-white">Volver arriba</p>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full">
            <div className="h-0 w-0 border-b-[6px] border-l-[6px] border-t-[6px] border-b-transparent border-l-slate-900/95 border-t-transparent" />
          </div>
        </div>
      </div>
    </button>
  )
}
