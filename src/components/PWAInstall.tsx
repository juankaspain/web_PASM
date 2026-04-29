'use client'

import { useEffect, useState } from 'react'
import { Download, X } from 'lucide-react'

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed'; platform: string }>
}

function isStandaloneDisplayMode(): boolean {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia('(display-mode: standalone)').matches
  )
}

function wasInstallDismissedRecently(): boolean {
  if (typeof window === 'undefined') return false

  const dismissed = localStorage.getItem('pwa-dismissed')
  if (!dismissed) return false

  const dismissedTime = Number.parseInt(dismissed, 10)
  const daysSinceDismissed = (Date.now() - dismissedTime) / (1000 * 60 * 60 * 24)
  return daysSinceDismissed < 7
}

export default function PWAInstall() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(
    null
  )
  const [showInstallPrompt, setShowInstallPrompt] = useState(false)
  const [isInstalled, setIsInstalled] = useState(isStandaloneDisplayMode)

  useEffect(() => {
    if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
      const registerServiceWorker = () => {
        navigator.serviceWorker
          .register('/sw.js')
          .then((registration) => {
            registration.addEventListener('updatefound', () => {
              const newWorker = registration.installing
              if (!newWorker) return

              newWorker.addEventListener('statechange', () => {
                if (
                  newWorker.state === 'installed' &&
                  navigator.serviceWorker.controller &&
                  confirm('Nueva versión disponible. ¿Actualizar ahora?')
                ) {
                  window.location.reload()
                }
              })
            })
          })
          .catch((error: unknown) => {
            console.error('Service Worker registration failed:', error)
          })
      }

      window.addEventListener('load', registerServiceWorker)

      return () => {
        window.removeEventListener('load', registerServiceWorker)
      }
    }
  }, [])

  useEffect(() => {
    const handleBeforeInstallPrompt = (event: Event) => {
      event.preventDefault()
      setDeferredPrompt(event as BeforeInstallPromptEvent)

      window.setTimeout(() => {
        if (!wasInstallDismissedRecently()) {
          setShowInstallPrompt(true)
        }
      }, 30000)
    }

    const handleAppInstalled = () => {
      setIsInstalled(true)
      setShowInstallPrompt(false)
      setDeferredPrompt(null)
    }

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
    window.addEventListener('appinstalled', handleAppInstalled)

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
      window.removeEventListener('appinstalled', handleAppInstalled)
    }
  }, [])

  const handleInstallClick = async () => {
    if (!deferredPrompt) return

    await deferredPrompt.prompt()
    await deferredPrompt.userChoice

    setDeferredPrompt(null)
    setShowInstallPrompt(false)
  }

  const handleDismiss = () => {
    setShowInstallPrompt(false)
    localStorage.setItem('pwa-dismissed', Date.now().toString())
  }

  if (isInstalled || !showInstallPrompt) {
    return null
  }

  return (
    <div className="animate-slide-up fixed bottom-4 left-4 right-4 z-50 md:left-auto md:right-4 md:max-w-sm">
      <div className="rounded-2xl border border-yellow-400/20 bg-gradient-to-br from-slate-900 to-slate-800 p-6 shadow-2xl backdrop-blur-xl">
        <button
          onClick={handleDismiss}
          className="absolute right-3 top-3 text-gray-400 transition-colors hover:text-white"
          aria-label="Cerrar"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-yellow-400">
            <Download className="h-6 w-6 text-black" />
          </div>

          <div className="flex-1">
            <h3 className="mb-2 text-lg font-bold text-white">Instalar App</h3>
            <p className="mb-4 text-sm text-gray-300">
              Instala la app para acceso rápido y funciones offline
            </p>

            <button
              onClick={handleInstallClick}
              className="w-full rounded-lg bg-yellow-400 px-4 py-3 font-semibold text-black transition-all hover:scale-105 hover:bg-yellow-500 active:scale-95"
            >
              Instalar ahora
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slide-up {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-slide-up {
          animation: slide-up 0.4s ease-out;
        }
      `}</style>
    </div>
  )
}
