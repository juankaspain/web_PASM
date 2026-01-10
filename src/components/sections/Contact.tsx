'use client'

import { motion } from 'framer-motion'
import {
  Mail,
  MapPin,
  Calendar,
  Instagram,
  Facebook,
  ExternalLink,
  CheckCircle,
  AlertCircle,
  Twitter,
  Loader2,
  Send,
  Sparkles,
  Clock,
} from 'lucide-react'
import { useState } from 'react'
import { trackEvent } from '@/lib/analytics'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xlggrndl'

const categories = [
  'Casting / Audición',
  'Colaboración Profesional',
  'Medios / Prensa',
  'Evento / Aparición',
  'Consulta General',
  'Otro',
]

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'info@almagrosanmiguel.com',
    link: 'mailto:info@almagrosanmiguel.com',
    gradient: 'from-yellow-500 to-orange-500',
  },
  {
    icon: MapPin,
    label: 'Ubicación',
    value: 'Sevilla, Andalucía, España',
    link: null,
    gradient: 'from-red-500 to-pink-500',
  },
  {
    icon: Calendar,
    label: 'Disponibilidad',
    value: 'A partir de Mayo 2026',
    link: null,
    gradient: 'from-green-500 to-teal-500',
  },
]

const socialLinks = [
  {
    icon: Instagram,
    label: 'Instagram',
    handle: '@almagrosanmiguel',
    url: 'https://www.instagram.com/almagrosanmiguel/',
    color: 'from-pink-500 via-purple-500 to-indigo-500',
  },
  {
    icon: Twitter,
    label: 'Twitter / X',
    handle: '@almagroSM',
    url: 'https://x.com/almagroSM',
    color: 'from-slate-600 via-slate-700 to-black',
  },
  {
    icon: Facebook,
    label: 'Facebook',
    handle: '/almagrosanmiguel',
    url: 'https://www.facebook.com/almagrosanmiguel/',
    color: 'from-blue-500 via-blue-600 to-blue-700',
  },
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: categories[0],
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>(
    'idle',
  )
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    setErrorMessage('')

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          category: formData.category,
          message: formData.message,
          _subject: `Nuevo mensaje de ${formData.name} - ${formData.category}`,
          _replyto: formData.email,
        }),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus('success')
        trackEvent('submit_contact_form', 'engagement', formData.category)
        
        setFormData({
          name: '',
          email: '',
          category: categories[0],
          message: '',
        })

        setTimeout(() => {
          setStatus('idle')
        }, 5000)
      } else {
        setStatus('error')
        setErrorMessage(
          data.error || data.errors?.[0]?.message || 'Error al enviar el mensaje. Por favor, inténtalo de nuevo.'
        )
      }
    } catch (error) {
      setStatus('error')
      setErrorMessage(
        'Error de conexión. Verifica tu internet e inténtalo de nuevo.'
      )
      console.error('Contact form error:', error)
    }
  }

  return (
    <section id="contact" className="relative py-24 sm:py-32 overflow-hidden bg-black">
      {/* Fondo cinematográfico */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-950 to-black" />
      
      {/* Resplandor dorado superior */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-yellow-500/10 rounded-full blur-[150px]" />

      {/* Partículas */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-yellow-400 rounded-full"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1920),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1080),
            }}
            animate={{
              y: [null, Math.random() * -300],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 6 + 4,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      {/* Contenido */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Header */}
          <div className="text-center mb-16 sm:mb-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-5 py-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full mb-6 backdrop-blur-sm"
            >
              <Sparkles className="w-4 h-4 text-yellow-300" />
              <span className="text-yellow-300 text-sm font-bold uppercase tracking-wider">Hablemos</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-white via-yellow-100 to-yellow-300 bg-clip-text text-transparent">
                Contacto Profesional
              </span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
            >
              Disponible para castings, colaboraciones y consultas profesionales.
              Respondo personalmente a todos los mensajes
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto">
            {/* Formulario */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Resplandor */}
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500/30 to-orange-500/30 rounded-3xl blur-2xl opacity-50" />
              
              {/* Card del formulario */}
              <div className="relative bg-gradient-to-br from-slate-900/90 via-slate-950/90 to-black/90 rounded-3xl p-8 border border-slate-700/50 backdrop-blur-xl shadow-[0_25px_70px_rgba(0,0,0,0.9)]">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Nombre */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-bold mb-2 text-slate-200"
                    >
                      Nombre Completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      minLength={2}
                      maxLength={100}
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      disabled={status === 'sending'}
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-xl text-white placeholder-slate-400 focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder="Tu nombre"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-bold mb-2 text-slate-200"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      maxLength={100}
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      disabled={status === 'sending'}
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-xl text-white placeholder-slate-400 focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder="tu@email.com"
                    />
                  </div>

                  {/* Categoría */}
                  <div>
                    <label
                      htmlFor="category"
                      className="block text-sm font-bold mb-2 text-slate-200"
                    >
                      Categoría *
                    </label>
                    <select
                      id="category"
                      required
                      value={formData.category}
                      onChange={(e) =>
                        setFormData({ ...formData, category: e.target.value })
                      }
                      disabled={status === 'sending'}
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-xl text-white focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {categories.map((cat) => (
                        <option key={cat} value={cat}>
                          {cat}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Mensaje */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-bold mb-2 text-slate-200"
                    >
                      Mensaje *
                    </label>
                    <textarea
                      id="message"
                      required
                      minLength={10}
                      maxLength={2000}
                      rows={6}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      disabled={status === 'sending'}
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-xl text-white placeholder-slate-400 focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder="Cuéntame sobre tu proyecto o consulta..."
                    />
                    <p className="text-xs text-slate-400 mt-1">
                      {formData.message.length} / 2000 caracteres
                    </p>
                  </div>

                  {/* Mensajes de estado */}
                  {status === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-3 p-4 bg-green-500/10 border border-green-500/30 rounded-xl"
                    >
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-sm font-semibold text-green-300">
                        ¡Mensaje enviado! Te responderé en menos de 48 horas.
                      </span>
                    </motion.div>
                  )}

                  {status === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/30 rounded-xl"
                    >
                      <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                      <span className="text-sm font-semibold text-red-300">{errorMessage}</span>
                    </motion.div>
                  )}

                  {/* Botón de envío */}
                  <motion.button
                    type="submit"
                    disabled={status === 'sending'}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-black rounded-xl transition-all font-bold disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 shadow-[0_10px_40px_rgba(251,191,36,0.3)]"
                  >
                    {status === 'sending' ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Enviando...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Enviar Mensaje</span>
                      </>
                    )}
                  </motion.button>

                  <p className="text-xs text-center text-slate-400">
                    Formulario protegido por Formspree • Tus datos son privados
                  </p>
                </form>
              </div>
            </motion.div>

            {/* Información de contacto */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Info cards */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon
                  return (
                    <motion.div
                      key={index}
                      whileHover={{ y: -4, scale: 1.02 }}
                      className="group relative"
                    >
                      <div className={`absolute -inset-0.5 bg-gradient-to-r ${info.gradient} rounded-2xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity`} />
                      <div className="relative flex items-center gap-4 p-5 bg-gradient-to-br from-slate-900/90 to-black/90 rounded-2xl border border-slate-700/50 backdrop-blur-xl">
                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${info.gradient} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                          <Icon className="w-7 h-7 text-white" />
                        </div>
                        <div className="flex-1">
                          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                            {info.label}
                          </p>
                          {info.link ? (
                            <a
                              href={info.link}
                              className="text-white hover:text-yellow-300 transition-colors font-bold"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-white font-bold">
                              {info.value}
                            </p>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>

              {/* Redes sociales */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-yellow-300" />
                  Redes Sociales
                </h3>
                <div className="space-y-3">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon
                    return (
                      <motion.a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => trackEvent('click_social', 'engagement', social.label)}
                        whileHover={{ x: 5, scale: 1.02 }}
                        className="group relative flex items-center justify-between p-4 bg-gradient-to-br from-slate-900/80 to-black/80 rounded-2xl border border-slate-700/50 backdrop-blur-xl transition-all"
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-12 h-12 rounded-xl bg-gradient-to-br ${social.color} flex items-center justify-center shadow-lg`}
                          >
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <p className="font-bold text-white">
                              {social.label}
                            </p>
                            <p className="text-sm text-slate-400">
                              {social.handle}
                            </p>
                          </div>
                        </div>
                        <ExternalLink className="w-5 h-5 text-slate-500 group-hover:text-yellow-300 transition-colors" />
                      </motion.a>
                    )
                  })}
                </div>
              </div>

              {/* Tiempo de respuesta */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur-lg opacity-40" />
                <div className="relative p-6 bg-gradient-to-br from-blue-900/30 to-cyan-900/30 rounded-2xl border border-blue-500/30 backdrop-blur-xl">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-2 text-white text-lg">Tiempo de Respuesta</h4>
                      <p className="text-sm text-slate-300 leading-relaxed">
                        Respondo personalmente a todos los mensajes en un plazo
                        máximo de <strong className="text-white">48 horas hábiles</strong>. Para consultas urgentes,
                        contacta directamente por email o redes sociales.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Vignette */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  )
}
