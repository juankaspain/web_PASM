'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Cookie, Shield, BarChart3, Target, Settings, CheckCircle2, XCircle } from 'lucide-react'

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
    setPreferences(prev => ({ ...prev, [key]: !prev[key] }))
  }

  const cookieCategories = [
    {
      id: 'necessary' as keyof CookiePreferences,
      icon: Shield,
      title: 'Cookies Necesarias',
      description: 'Estas cookies son esenciales para el funcionamiento del sitio web y no pueden desactivarse. Incluyen cookies de sesión y seguridad.',
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
      description: 'Nos ayudan a entender cómo interactúas con el sitio web, proporcionando información sobre las áreas visitadas y el tiempo de permanencia.',
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
      description: 'Se utilizan para rastrear visitantes en sitios web y mostrar anuncios relevantes y atractivos para el usuario individual.',
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
      description: 'Permiten al sitio web recordar información que cambia la forma en que se comporta o se ve, como tu idioma preferido.',
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
      <AnimatePresence>
        {showBanner && !showSettings && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
          >
            <div className="max-w-7xl mx-auto">
              <div className="relative bg-gradient-to-br from-slate-900/95 to-black/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
                {/* Decorative gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 via-transparent to-yellow-400/5" />
                
                <div className="relative p-6 md:p-8">
                  <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center">
                    {/* Icon & Content */}
                    <div className="flex gap-4 flex-1">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-yellow-400/10 border border-yellow-400/30 rounded-xl flex items-center justify-center">
                          <Cookie className="w-6 h-6 text-yellow-400" />
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2">
                          Respetamos tu Privacidad
                        </h3>
                        <p className="text-slate-300 text-sm leading-relaxed mb-4">
                          Utilizamos cookies para mejorar tu experiencia, analizar el tráfico del sitio y personalizar el contenido. 
                          Puedes aceptar todas las cookies o personalizar tus preferencias.
                        </p>
                        <button
                          onClick={() => setShowSettings(true)}
                          className="text-yellow-400 text-sm font-semibold hover:text-yellow-300 transition-colors inline-flex items-center gap-1"
                        >
                          <Settings className="w-4 h-4" />
                          Configurar cookies
                        </button>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                      <button
                        onClick={handleRejectAll}
                        className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl font-semibold text-white transition-all text-sm whitespace-nowrap"
                      >
                        Solo Necesarias
                      </button>
                      <button
                        onClick={handleAcceptAll}
                        className="px-6 py-3 bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-300 hover:to-amber-400 rounded-xl font-bold text-black transition-all shadow-lg hover:shadow-xl text-sm whitespace-nowrap"
                      >
                        Aceptar Todas
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Panel de Configuración */}
      <AnimatePresence>
        {showSettings && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowSettings(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="bg-gradient-to-br from-slate-900 to-black border border-white/10 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="border-b border-white/10 p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-yellow-400/10 border border-yellow-400/30 rounded-lg flex items-center justify-center">
                      <Settings className="w-5 h-5 text-yellow-400" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-white">Centro de Preferencias de Cookies</h2>
                      <p className="text-sm text-slate-400">Personaliza tu experiencia</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setShowSettings(false)}
                    className="w-10 h-10 bg-white/5 hover:bg-white/10 rounded-lg flex items-center justify-center transition-colors"
                  >
                    <X className="w-5 h-5 text-white" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
                <div className="space-y-6">
                  {cookieCategories.map((category) => {
                    const Icon = category.icon
                    const isEnabled = preferences[category.id]
                    
                    return (
                      <div
                        key={category.id}
                        className={`relative border rounded-xl p-6 transition-all ${
                          isEnabled
                            ? `${category.bgColor} ${category.borderColor}`
                            : 'bg-white/[0.02] border-white/10'
                        }`}
                      >
                        <div className="flex items-start gap-4">
                          <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                            isEnabled ? category.bgColor : 'bg-white/5'
                          } border ${isEnabled ? category.borderColor : 'border-white/10'}`}>
                            <Icon className={`w-6 h-6 ${isEnabled ? category.color : 'text-slate-400'}`} />
                          </div>
                          
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <h3 className="text-lg font-bold text-white">{category.title}</h3>
                              
                              {category.required ? (
                                <div className="flex items-center gap-2 px-3 py-1 bg-green-400/10 border border-green-400/30 rounded-lg">
                                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                                  <span className="text-xs font-bold text-green-400">REQUERIDAS</span>
                                </div>
                              ) : (
                                <button
                                  onClick={() => togglePreference(category.id)}
                                  className={`relative w-14 h-7 rounded-full transition-all ${
                                    isEnabled ? 'bg-yellow-400' : 'bg-white/10'
                                  }`}
                                >
                                  <motion.div
                                    animate={{ x: isEnabled ? 28 : 2 }}
                                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                                    className={`absolute top-1 w-5 h-5 rounded-full ${
                                      isEnabled ? 'bg-black' : 'bg-white/40'
                                    }`}
                                  />
                                </button>
                              )}
                            </div>
                            
                            <p className="text-sm text-slate-400 leading-relaxed mb-3">
                              {category.description}
                            </p>
                            
                            <div className="flex items-start gap-2">
                              <span className="text-xs text-slate-500 font-semibold">Ejemplos:</span>
                              <span className="text-xs text-slate-500">{category.examples}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>

                {/* Legal Notice */}
                <div className="mt-6 p-4 bg-white/[0.02] border border-white/10 rounded-xl">
                  <p className="text-xs text-slate-400 leading-relaxed">
                    <strong className="text-white">Aviso Legal:</strong> Al continuar navegando, aceptas el uso de cookies según tus preferencias. 
                    Puedes cambiar tu configuración en cualquier momento. Para más información, consulta nuestra{' '}
                    <a href="/privacy" className="text-yellow-400 hover:text-yellow-300 transition-colors">
                      Política de Privacidad
                    </a>
                    {' '}y{' '}
                    <a href="/cookies" className="text-yellow-400 hover:text-yellow-300 transition-colors">
                      Política de Cookies
                    </a>.
                  </p>
                </div>
              </div>

              {/* Footer */}
              <div className="border-t border-white/10 p-6 bg-white/[0.02]">
                <div className="flex flex-col sm:flex-row gap-3 justify-end">
                  <button
                    onClick={handleRejectAll}
                    className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl font-semibold text-white transition-all flex items-center justify-center gap-2"
                  >
                    <XCircle className="w-4 h-4" />
                    Rechazar Todas
                  </button>
                  <button
                    onClick={handleSavePreferences}
                    className="px-6 py-3 bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-300 hover:to-amber-400 rounded-xl font-bold text-black transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    Guardar Preferencias
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
