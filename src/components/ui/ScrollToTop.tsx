'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
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

    window.addEventListener('scroll', toggleVisibility)

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
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 group"
          aria-label="Volver arriba"
        >
          {/* Glow effect */}
          <div className="absolute inset-0 rounded-full bg-yellow-400/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Button */}
          <div className="relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-slate-900/95 to-black/95 border border-white/10 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.6)] transition-all duration-300 group-hover:border-yellow-400/50 group-hover:shadow-[0_8px_32px_rgba(250,204,21,0.3)]">
            <ArrowUp className="w-6 h-6 text-yellow-400 transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-0.5" />
          </div>
          
          {/* Tooltip */}
          <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <div className="bg-slate-900/95 border border-white/10 rounded-lg px-3 py-2 backdrop-blur-xl shadow-lg whitespace-nowrap">
              <p className="text-xs font-medium text-white">Volver arriba</p>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full">
                <div className="w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[6px] border-l-slate-900/95" />
              </div>
            </div>
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  )
}