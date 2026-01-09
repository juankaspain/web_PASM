'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Instagram, Twitter, Facebook } from 'lucide-react'
import { useState } from 'react'

type FormStatus = 'idle' | 'loading' | 'success' | 'error'

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState<FormStatus>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus('success')
        setFormState({ name: '', email: '', subject: '', message: '' })
      } else {
        setStatus('error')
        setErrorMessage(data.message || 'Error al enviar el mensaje')
      }
    } catch (error) {
      setStatus('error')
      setErrorMessage('Error de conexión. Intenta de nuevo.')
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email Profesional',
      value: 'info@almagrosanmiguel.com',
      link: 'mailto:info@almagrosanmiguel.com',
      description: 'Para propuestas profesionales y castings'
    },
    {
      icon: MapPin,
      label: 'Ubicación',
      value: 'Sevilla, Andalucía',
      link: '#',
      description: 'Disponible para proyectos en toda España'
    },
  ]

  const socialLinks = [
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://www.instagram.com/almagrosanmiguel/',
      color: 'hover:text-pink-600'
    },
    {
      name: 'Twitter / X',
      icon: Twitter,
      url: 'https://x.com/almagroSM',
      color: 'hover:text-blue-400'
    },
    {
      name: 'Facebook',
      icon: Facebook,
      url: 'https://www.facebook.com/almagrosanmiguel/',
      color: 'hover:text-blue-600'
    },
  ]

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 font-serif text-4xl font-bold lg:text-5xl">
            Contacto Profesional
          </h2>
          <div className="mx-auto h-1 w-24 bg-slate-700" />
          <p className="mx-auto mt-6 max-w-2xl text-gray-600">
            Abierto a nuevos proyectos, castings y colaboraciones artísticas
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="mb-4 font-serif text-2xl font-bold">
                Información de Contacto
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Para propuestas profesionales, castings, entrevistas o colaboraciones artísticas, 
                puedes contactarme a través de los siguientes medios. Respondo personalmente a todas las consultas.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4 rounded-lg bg-white border border-gray-200 p-5 transition-all hover:shadow-lg"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-700 text-white flex-shrink-0">
                      <Icon size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-700 mb-1">
                        {info.label}
                      </p>
                      {info.link !== '#' ? (
                        <a href={info.link} className="font-bold text-lg hover:text-slate-700 transition-colors">
                          {info.value}
                        </a>
                      ) : (
                        <p className="font-bold text-lg">{info.value}</p>
                      )}
                      <p className="text-sm text-gray-500 mt-1">{info.description}</p>
                    </div>
                  </motion.div>
                )
              })}}
            </div>

            {/* Social Media */}
            <div className="rounded-lg bg-slate-50 border border-slate-200 p-6">
              <h4 className="font-bold mb-4 text-lg">Sígueme en Redes Sociales</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center w-12 h-12 rounded-full bg-white border-2 border-gray-200 transition-all hover:scale-110 hover:border-slate-700 ${social.color}`}
                    aria-label={social.name}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
              <p className="text-sm text-gray-600 mt-4">
                @almagrosanmiguel en Instagram • @almagroSM en Twitter
              </p>
            </div>

            {/* Availability */}
            <div className="rounded-lg bg-green-50 border border-green-200 p-6">
              <h4 className="font-bold mb-2 text-green-900">✅ Disponibilidad Actual</h4>
              <p className="text-sm text-green-800">
                Disponible para nuevos proyectos a partir de <strong>Mayo 2026</strong>.
              </p>
              <p className="text-xs text-green-700 mt-2">
                Para fechas anteriores o proyectos urgentes, consultar disponibilidad específica.
              </p>
            </div>

            {/* Representation */}
            <div className="rounded-lg bg-slate-100 border border-slate-200 p-6">
              <h4 className="font-bold mb-2">🎬 Representación</h4>
              <p className="text-sm text-gray-700">
                Para consultas de representación, casting directo o colaboraciones con productoras, 
                contactar a través del email profesional.
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <form
              onSubmit={handleSubmit}
              className="space-y-6 rounded-xl bg-white border border-gray-200 p-8 shadow-xl"
            >
              <div className="mb-6">
                <h3 className="font-serif text-2xl font-bold mb-2">Envíame un Mensaje</h3>
                <p className="text-sm text-gray-600">
                  Completa el formulario y me pondré en contacto contigo lo antes posible.
                </p>
              </div>

              {/* Success Message */}
              {status === 'success' && (
                <div className="flex items-center gap-3 rounded-lg bg-green-50 border border-green-200 p-4 text-green-800">
                  <CheckCircle2 size={20} />
                  <p className="text-sm font-medium">
                    ¡Mensaje enviado correctamente! Te responderé pronto.
                  </p>
                </div>
              )}

              {/* Error Message */}
              {status === 'error' && (
                <div className="flex items-center gap-3 rounded-lg bg-red-50 border border-red-200 p-4 text-red-800">
                  <AlertCircle size={20} />
                  <p className="text-sm font-medium">{errorMessage}</p>
                </div>
              )}

              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Nombre Completo *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formState.name}
                  onChange={(e) =>
                    setFormState({ ...formState, name: e.target.value })
                  }
                  className="w-full rounded-lg border-2 border-gray-200 bg-white px-4 py-3 transition-colors focus:border-slate-700 focus:outline-none"
                  placeholder="Tu nombre"
                  disabled={status === 'loading'}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formState.email}
                  onChange={(e) =>
                    setFormState({ ...formState, email: e.target.value })
                  }
                  className="w-full rounded-lg border-2 border-gray-200 bg-white px-4 py-3 transition-colors focus:border-slate-700 focus:outline-none"
                  placeholder="tu@email.com"
                  disabled={status === 'loading'}
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Asunto *
                </label>
                <select
                  id="subject"
                  required
                  value={formState.subject}
                  onChange={(e) =>
                    setFormState({ ...formState, subject: e.target.value })
                  }
                  className="w-full rounded-lg border-2 border-gray-200 bg-white px-4 py-3 transition-colors focus:border-slate-700 focus:outline-none"
                  disabled={status === 'loading'}
                >
                  <option value="">Selecciona un motivo</option>
                  <option value="casting">Casting / Audición</option>
                  <option value="proyecto">Propuesta de Proyecto</option>
                  <option value="entrevista">Entrevista / Prensa</option>
                  <option value="colaboracion">Colaboración Artística</option>
                  <option value="otro">Otro</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Mensaje *
                </label>
                <textarea
                  id="message"
                  required
                  value={formState.message}
                  onChange={(e) =>
                    setFormState({ ...formState, message: e.target.value })
                  }
                  rows={6}
                  className="w-full rounded-lg border-2 border-gray-200 bg-white px-4 py-3 transition-colors focus:border-slate-700 focus:outline-none"
                  placeholder="Cuéntame sobre tu proyecto, casting o propuesta..."
                  disabled={status === 'loading'}
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-slate-900 px-6 py-4 font-bold text-white transition-all hover:bg-slate-800 hover:scale-105 disabled:opacity-50 disabled:hover:scale-100"
              >
                {status === 'loading' ? (
                  <>
                    <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    Enviando...
                  </>
                ) : (
                  <>
                    Enviar Mensaje
                    <Send size={18} />
                  </>
                )}
              </button>

              <p className="text-xs text-gray-500 text-center">
                * Campos obligatorios. Tus datos serán tratados con total confidencialidad.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
