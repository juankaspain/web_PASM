'use client'

import { useState, useEffect } from 'react'
import {
  X,
  Cookie,
  Shield,
  BarChart3,
  Target,
  Settings,
  CheckCircle2,
  XCircle,
} from 'lucide-react'

interface CookiePreferences {
  necessary: boolean
  analytics: boolean
  marketing: boolean
  preferences: boolean
}

const COOKIE_CONSENT_KEY = 'cookie-consent-pasm'
const COOKIE_PREFERENCES_KEY = 'cookie-preferences-pasm'

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true, // Siempre activas
    analytics: false,
    marketing: false,
    preferences: false,
  })

  useEffect(() => {
    // Comprobar si ya hay consentimiento guardado
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY)
    const savedPreferences = localStorage.getItem(COOKIE_PREFERENCES_KEY)

    if (!consent) {
      // Mostrar banner después de un pequeño delay para mejor UX
      setTimeout(() => setShowBanner(true), 1000)
    } else if (savedPreferences) {
      // Cargar preferencias guardadas
      setPreferences(JSON.parse(savedPreferences))
      // Aplicar cookies según preferencias
      applyPreferences(JSON.parse(savedPreferences))
    }
  }, [])

  const applyPreferences = (prefs: CookiePreferences) => {
    // Aquí implementarías la lógica real de activación de cookies
    // Por ejemplo, inicializar Google Analytics solo si analytics está activo

    if (prefs.analytics) {
      // Inicializar Google Analytics u otras herramientas de analítica
      console.log('Analytics cookies enabled')
      // window.gtag('consent', 'update', { 'analytics_storage': 'granted' })
    }

    if (prefs.marketing) {
      // Inicializar cookies de marketing
      console.log('Marketing cookies enabled')
      // window.gtag('consent', 'update', { 'ad_storage': 'granted' })
    }

    if (prefs.preferences) {
      // Habilitar cookies de preferencias
      console.log('Preference cookies enabled')
    }
  }

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
      preferences: true,
    }
    setPreferences(allAccepted)
    saveConsent(allAccepted)
    applyPreferences(allAccepted)
    setShowBanner(false)
    setShowSettings(false)
  }

  const handleRejectAll = () => {
    const onlyNecessary = {
      necessary: true,
      analytics: false,
      marketing: false,
      preferences: false,
    }
    setPreferences(onlyNecessary)
    saveConsent(onlyNecessary)
    applyPreferences(onlyNecessary)
    setShowBanner(false)
    setShowSettings(false)
  }

  const handleSavePreferences = () => {
    saveConsent(preferences)
    applyPreferences(preferences)
    setShowBanner(false)
    setShowSettings(false)
  }

  const saveConsent = (prefs: CookiePreferences) => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'true')
    localStorage.setItem(COOKIE_PREFERENCES_KEY, JSON.stringify(prefs))
  }

  const togglePreference = (key: keyof CookiePreferences) => {
    if (key === 'necessary') return // No se puede desactivar
    setPreferences((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  const cookieCategories = [
    {
      id: 'necessary' as keyof CookiePreferences,
      icon: Shield,
      title: 'Cookies Necesarias',
      description:
        'Estas cookies son esenciales para el funcionamiento del sitio web y no pueden desactivarse. Incluyen cookies de sesión y seguridad.',
      examples: 'Autenticación, seguridad, preferencias básicas',
      required: true,
      color: 'text-green-400',
      bgColor: 'bg-green-400/10',
      borderColor: 'border-green-400/30',
    },
    {
      id: 'analytics' as keyof CookiePreferences,
      icon: BarChart3,
      title: 'Cookies Analíticas',
      description:
        'Nos ayudan a entender cómo interactúas con el sitio web, proporcionando información sobre las áreas visitadas y el tiempo de permanencia.',
      examples: 'Google Analytics, estadísticas de uso',
      required: false,
      color: 'text-blue-400',
      bgColor: 'bg-blue-400/10',
      borderColor: 'border-blue-400/30',
    },
    {
      id: 'marketing' as keyof CookiePreferences,
      icon: Target,
      title: 'Cookies de Marketing',
      description:
        'Se utilizan para rastrear visitantes en sitios web y mostrar anuncios relevantes y atractivos para el usuario individual.',
      examples: 'Facebook Pixel, Google Ads, retargeting',
      required: false,
      color: 'text-purple-400',
      bgColor: 'bg-purple-400/10',
      borderColor: 'border-purple-400/30',
    },
    {
      id: 'preferences' as keyof CookiePreferences,
      icon: Settings,
      title: 'Cookies de Preferencias',
      description:
        'Permiten al sitio web recordar información que cambia la forma en que se comporta o se ve, como tu idioma preferido.',
      examples: 'Idioma, región, ajustes de visualización',
      required: false,
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-400/10',
      borderColor: 'border-yellow-400/30',
    },
  ]

  return (
    <>
      {/* Banner Principal */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 transition-all duration-500 ${
          showBanner && !showSettings
            ? 'translate-y-0 opacity-100'
            : 'translate-y-full opacity-0 pointer-events-none'
        }`}
      >
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/95 to-black/95 shadow-2xl backdrop-blur-xl">
            {/* Decorative gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 via-transparent to-yellow-400/5" />

            <div className="relative p-6 md:p-8">
              <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-center">
                {/* Icon & Content */}
                <div className="flex flex-1 gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-yellow-400/30 bg-yellow-400/10">
                      <Cookie className="h-6 w-6 text-yellow-400" />
                    </div>
                  </div>

                  <div className="flex-1">
                    <h3 className="mb-2 text-xl font-bold text-white">
                      Respetamos tu Privacidad
                    </h3>
                    <p className="mb-4 text-sm leading-relaxed text-slate-300">
                      Utilizamos cookies para mejorar tu experiencia, analizar el
                      tráfico del sitio y personalizar el contenido. Puedes aceptar
                      todas las cookies o personalizar tus preferencias.
                    </p>
                    <button
                      onClick={() => setShowSettings(true)}
                      className="inline-flex items-center gap-1 text-sm font-semibold text-yellow-400 transition-colors hover:text-yellow-300"
                    >
                      <Settings className="h-4 w-4" />
                      Configurar cookies
                    </button>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex w-full flex-col gap-3 sm:flex-row lg:w-auto">
                  <button
                    onClick={handleRejectAll}
                    className="whitespace-nowrap rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-all hover:border-white/20 hover:bg-white/10"
                  >
                    Solo Necesarias
                  </button>
                  <button
                    onClick={handleAcceptAll}
                    className="whitespace-nowrap rounded-xl bg-gradient-to-r from-yellow-400 to-amber-500 px-6 py-3 text-sm font-bold text-black shadow-lg transition-all hover:from-yellow-300 hover:to-amber-400 hover:shadow-xl"
                  >
                    Aceptar Todas
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Panel de Configuración */}
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm transition-all duration-300 ${
          showSettings ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setShowSettings(false)}
      >
        <div
          className={`max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 to-black shadow-2xl transition-all duration-300 ${
            showSettings ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="border-b border-white/10 p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-yellow-400/30 bg-yellow-400/10">
                  <Settings className="h-5 w-5 text-yellow-400" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">
                    Centro de Preferencias de Cookies
                  </h2>
                  <p className="text-sm text-slate-400">Personaliza tu experiencia</p>
                </div>
              </div>
              <button
                onClick={() => setShowSettings(false)}
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 transition-colors hover:bg-white/10"
              >
                <X className="h-5 w-5 text-white" />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="max-h-[calc(90vh-200px)] overflow-y-auto p-6">
            <div className="space-y-6">
              {cookieCategories.map((category) => {
                const Icon = category.icon
                const isEnabled = preferences[category.id]

                return (
                  <div
                    key={category.id}
                    className={`relative rounded-xl border p-6 transition-all ${
                      isEnabled
                        ? `${category.bgColor} ${category.borderColor}`
                        : 'border-white/10 bg-white/[0.02]'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg ${
                          isEnabled ? category.bgColor : 'bg-white/5'
                        } border ${isEnabled ? category.borderColor : 'border-white/10'}`}
                      >
                        <Icon
                          className={`h-6 w-6 ${isEnabled ? category.color : 'text-slate-400'}`}
                        />
                      </div>

                      <div className="flex-1">
                        <div className="mb-2 flex items-center justify-between">
                          <h3 className="text-lg font-bold text-white">
                            {category.title}
                          </h3>

                          {category.required ? (
                            <div className="flex items-center gap-2 rounded-lg border border-green-400/30 bg-green-400/10 px-3 py-1">
                              <CheckCircle2 className="h-4 w-4 text-green-400" />
                              <span className="text-xs font-bold text-green-400">
                                REQUERIDAS
                              </span>
                            </div>
                          ) : (
                            <button
                              onClick={() => togglePreference(category.id)}
                              className={`relative h-7 w-14 rounded-full transition-all ${
                                isEnabled ? 'bg-yellow-400' : 'bg-white/10'
                              }`}
                            >
                              <div
                                className={`absolute top-1 h-5 w-5 rounded-full transition-transform duration-200 ${
                                  isEnabled
                                    ? 'translate-x-[28px] bg-black'
                                    : 'translate-x-[2px] bg-white/40'
                                }`}
                              />
                            </button>
                          )}
                        </div>

                        <p className="mb-3 text-sm leading-relaxed text-slate-400">
                          {category.description}
                        </p>

                        <div className="flex items-start gap-2">
                          <span className="text-xs font-semibold text-slate-500">
                            Ejemplos:
                          </span>
                          <span className="text-xs text-slate-500">
                            {category.examples}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Legal Notice */}
            <div className="mt-6 rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <p className="text-xs leading-relaxed text-slate-300">
                <strong className="text-white">Aviso Legal:</strong> Al continuar
                navegando, aceptas el uso de cookies según tus preferencias. Puedes
                cambiar tu configuración en cualquier momento. Para más información,
                consulta nuestra{' '}
                <a
                  href="/privacy"
                  className="text-yellow-400 transition-colors hover:text-yellow-300"
                >
                  Política de Privacidad
                </a>{' '}
                y{' '}
                <a
                  href="/cookies"
                  className="text-yellow-400 transition-colors hover:text-yellow-300"
                >
                  Política de Cookies
                </a>
                .
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="border-t border-white/10 bg-white/[0.02] p-6">
            <div className="flex flex-col justify-end gap-3 sm:flex-row">
              <button
                onClick={handleRejectAll}
                className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 font-semibold text-white transition-all hover:border-white/20 hover:bg-white/10"
              >
                <XCircle className="h-4 w-4" />
                Rechazar Todas
              </button>
              <button
                onClick={handleSavePreferences}
                className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-yellow-400 to-amber-500 px-6 py-3 font-bold text-black shadow-lg transition-all hover:from-yellow-300 hover:to-amber-400 hover:shadow-xl"
              >
                <CheckCircle2 className="h-4 w-4" />
                Guardar Preferencias
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
