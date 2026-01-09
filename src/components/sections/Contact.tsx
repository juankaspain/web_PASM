'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react'
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
      label: 'Email',
      value: 'info@pedroalmagro.com',
      link: 'mailto:info@pedroalmagro.com',
    },
    {
      icon: Phone,
      label: 'Teléfono',
      value: '+34 600 123 456',
      link: 'tel:+34600123456',
    },
    {
      icon: MapPin,
      label: 'Ubicación',
      value: 'Sevilla, España',
      link: '#',
    },
  ]

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 font-serif text-4xl font-bold lg:text-5xl">
            Contacto
          </h2>
          <div className="mx-auto h-1 w-24 bg-primary" />
          <p className="mx-auto mt-6 max-w-2xl text-muted-foreground">
            ¿Tienes un proyecto en mente? Hablemos
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
              <p className="text-muted-foreground">
                Estoy abierto a nuevos proyectos y colaboraciones. No dudes en
                contactarme para castings, propuestas o simplemente para
                conversar sobre el arte de la actuación.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon
                return (
                  <motion.a
                    key={index}
                    href={info.link}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 rounded-lg bg-muted/50 p-4 transition-colors hover:bg-muted"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      <Icon size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">
                        {info.label}
                      </p>
                      <p className="font-semibold">{info.value}</p>
                    </div>
                  </motion.a>
                )
              })}
            </div>

            {/* Availability */}
            <div className="rounded-lg bg-primary/10 p-6">
              <h4 className="mb-2 font-semibold">Disponibilidad</h4>
              <p className="text-sm text-muted-foreground">
                Actualmente disponible para proyectos desde Mayo 2026. Para
                fechas anteriores, consultar disponibilidad.
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
              className="space-y-6 rounded-xl bg-card p-8 shadow-lg"
            >
              {/* Success Message */}
              {status === 'success' && (
                <div className="flex items-center gap-3 rounded-lg bg-green-50 p-4 text-green-800 dark:bg-green-900/20 dark:text-green-400">
                  <CheckCircle2 size={20} />
                  <p className="text-sm font-medium">
                    ¡Mensaje enviado correctamente! Te responderé pronto.
                  </p>
                </div>
              )}

              {/* Error Message */}
              {status === 'error' && (
                <div className="flex items-center gap-3 rounded-lg bg-red-50 p-4 text-red-800 dark:bg-red-900/20 dark:text-red-400">
                  <AlertCircle size={20} />
                  <p className="text-sm font-medium">{errorMessage}</p>
                </div>
              )}

              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium"
                >
                  Nombre Completo
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formState.name}
                  onChange={(e) =>
                    setFormState({ ...formState, name: e.target.value })
                  }
                  className="w-full rounded-lg border border-input bg-background px-4 py-3 transition-colors focus:border-primary focus:outline-none"
                  placeholder="Tu nombre"
                  disabled={status === 'loading'}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formState.email}
                  onChange={(e) =>
                    setFormState({ ...formState, email: e.target.value })
                  }
                  className="w-full rounded-lg border border-input bg-background px-4 py-3 transition-colors focus:border-primary focus:outline-none"
                  placeholder="tu@email.com"
                  disabled={status === 'loading'}
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-medium"
                >
                  Asunto
                </label>
                <input
                  type="text"
                  id="subject"
                  required
                  value={formState.subject}
                  onChange={(e) =>
                    setFormState({ ...formState, subject: e.target.value })
                  }
                  className="w-full rounded-lg border border-input bg-background px-4 py-3 transition-colors focus:border-primary focus:outline-none"
                  placeholder="Motivo del contacto"
                  disabled={status === 'loading'}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium"
                >
                  Mensaje
                </label>
                <textarea
                  id="message"
                  required
                  value={formState.message}
                  onChange={(e) =>
                    setFormState({ ...formState, message: e.target.value })
                  }
                  rows={6}
                  className="w-full rounded-lg border border-input bg-background px-4 py-3 transition-colors focus:border-primary focus:outline-none"
                  placeholder="Cuéntame sobre tu proyecto..."
                  disabled={status === 'loading'}
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-all hover:scale-105 disabled:opacity-50 disabled:hover:scale-100"
              >
                {status === 'loading' ? (
                  <>
                    <div className="h-5 w-5 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent" />
                    Enviando...
                  </>
                ) : (
                  <>
                    Enviar Mensaje
                    <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
