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
} from 'lucide-react'
import { useState } from 'react'
import { trackEvent } from '@/lib/analytics'

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
  },
  {
    icon: MapPin,
    label: 'Ubicación',
    value: 'Sevilla, Andalucía, España',
    link: null,
  },
  {
    icon: Calendar,
    label: 'Disponibilidad',
    value: 'A partir de Mayo 2026',
    link: null,
  },
]

const socialLinks = [
  {
    icon: Instagram,
    label: 'Instagram',
    handle: '@almagrosanmiguel',
    url: 'https://www.instagram.com/almagrosanmiguel/',
    color: 'from-pink-500 to-purple-500',
  },
  {
    icon: Twitter,
    label: 'Twitter / X',
    handle: '@almagroSM',
    url: 'https://x.com/almagroSM',
    color: 'from-slate-700 to-slate-900',
  },
  {
    icon: Facebook,
    label: 'Facebook',
    handle: '/almagrosanmiguel',
    url: 'https://www.facebook.com/almagrosanmiguel/',
    color: 'from-blue-600 to-blue-800',
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
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
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
      } else {
        setStatus('error')
        setErrorMessage(data.error || 'Error al enviar el mensaje')
      }
    } catch (error) {
      setStatus('error')
      setErrorMessage('Error de conexión. Inténtalo de nuevo.')
    }
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Contacto Profesional
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Disponible para castings, colaboraciones y consultas profesionales.
              Respondo personalmente a todos los mensajes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold mb-2"
                  >
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all"
                    placeholder="Tu nombre"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="category"
                    className="block text-sm font-semibold mb-2"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all"
                  >
                    {categories.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold mb-2"
                  >
                    Mensaje *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all resize-none"
                    placeholder="Cuéntame sobre tu proyecto o consulta..."
                  />
                </div>

                {status === 'success' && (
                  <div className="flex items-center gap-2 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
                    <CheckCircle className="w-5 h-5" />
                    <span className="text-sm font-semibold">
                      ¡Mensaje enviado! Te responderé pronto.
                    </span>
                  </div>
                )}

                {status === 'error' && (
                  <div className="flex items-center gap-2 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800">
                    <AlertCircle className="w-5 h-5" />
                    <span className="text-sm font-semibold">{errorMessage}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white rounded-lg transition-colors font-bold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? 'Enviando...' : 'Enviar Mensaje'}
                </button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon
                  return (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-4 bg-white rounded-lg border border-gray-200 hover:border-slate-400 transition-colors"
                    >
                      <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-slate-700" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-500 mb-1">
                          {info.label}
                        </p>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-slate-900 hover:text-slate-600 transition-colors font-semibold"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-slate-900 font-semibold">
                            {info.value}
                          </p>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>

              <div>
                <h3 className="text-xl font-serif font-bold mb-4">
                  Redes Sociales
                </h3>
                <div className="space-y-3">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon
                    return (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200 hover:border-slate-400 transition-all group"
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-10 h-10 rounded-full bg-gradient-to-br ${social.color} flex items-center justify-center`}
                          >
                            <Icon className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <p className="font-bold text-slate-900">
                              {social.label}
                            </p>
                            <p className="text-sm text-gray-600">
                              {social.handle}
                            </p>
                          </div>
                        </div>
                        <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-slate-700 transition-colors" />
                      </a>
                    )
                  })}
                </div>
              </div>

              <div className="p-6 bg-slate-50 rounded-lg border border-slate-200">
                <h4 className="font-bold mb-2">Tiempo de Respuesta</h4>
                <p className="text-sm text-gray-600">
                  Respondo personalmente a todos los mensajes en un plazo
                  máximo de 48 horas hábiles. Para consultas urgentes, puedes
                  contactar directamente por email.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
