'use client'

import { motion } from 'framer-motion'
import {
  Mail,
  MapPin,
  Calendar,
  Instagram,
  Facebook,
  Youtube,
  ExternalLink,
  CheckCircle,
  AlertCircle,
  X,
  Loader2,
  Send,
  Sparkles,
  Clock,
} from 'lucide-react'
import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { trackEvent } from '@/lib/analytics'
import { SiTiktok } from 'react-icons/si'
import Link from 'next/link'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xlggrndl'

// F.4 - Zod schema for client-side validation
const contactSchema = z.object({
  name: z
    .string()
    .min(2, 'El nombre debe tener al menos 2 caracteres')
    .max(100, 'El nombre no puede exceder 100 caracteres'),
  email: z.string().email('Correo electrónico inválido'),
  category: z.string().min(1, 'Selecciona una categoría'),
  message: z
    .string()
    .min(10, 'El mensaje debe tener al menos 10 caracteres')
    .max(2000, 'El mensaje no puede exceder 2000 caracteres'),
  acceptPrivacy: z.literal(true, {
    errorMap: () => ({ message: 'Debes aceptar la Política de Privacidad' }),
  }),
  acceptNewsletter: z.boolean().optional(),
})

type ContactFormValues = z.infer<typeof contactSchema>

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
    value: 'Madrid y Sevilla, España',
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
  },
  {
    icon: X,
    label: 'X',
    handle: '@almagroSM',
    url: 'https://x.com/almagroSM',
  },
  {
    icon: 'tiktok',
    label: 'TikTok',
    handle: '@almagro.san.migue',
    url: 'https://www.tiktok.com/@almagro.san.migue',
  },
  {
    icon: Youtube,
    label: 'YouTube',
    handle: '@almagrosanmiguel7219',
    url: 'https://www.youtube.com/@almagrosanmiguel7219',
  },
  {
    icon: Facebook,
    label: 'Facebook',
    handle: 'almagrosanmiguel',
    url: 'https://www.facebook.com/almagrosanmiguel/',
  },
]

interface Particle {
  id: number
  x: number
  y: number
}

// Skeleton Loader Component
function ContactSkeleton() {
  return (
    <section className="relative overflow-hidden bg-black py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-950 to-black" />
      <div className="absolute left-1/2 top-0 h-[500px] w-[1000px] -translate-x-1/2 rounded-full bg-yellow-500/10 blur-[150px]" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center sm:mb-20">
          {/* Skeleton Header */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2">
            <div className="h-4 w-4 animate-pulse rounded bg-white/10" />
            <div className="h-4 w-20 animate-pulse rounded bg-white/10" />
          </div>

          <div className="mx-auto mb-6 h-12 w-96 animate-pulse rounded bg-white/5" />
          <div className="mx-auto h-6 w-full max-w-2xl animate-pulse rounded bg-white/5" />
        </div>

        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Skeleton Form */}
          <div className="space-y-6">
            <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8">
              <div className="space-y-6">
                {[...Array(4)].map((_, i) => (
                  <div key={i}>
                    <div className="mb-2 h-4 w-32 animate-pulse rounded bg-white/10" />
                    <div className="h-12 w-full animate-pulse rounded-xl bg-white/5" />
                  </div>
                ))}
                <div className="h-14 w-full animate-pulse rounded-xl bg-yellow-400/20" />
              </div>
            </div>
          </div>

          {/* Skeleton Info */}
          <div className="space-y-6">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-5"
              >
                <div className="h-14 w-14 animate-pulse rounded-xl bg-yellow-400/20" />
                <div className="flex-1">
                  <div className="mb-2 h-3 w-20 animate-pulse rounded bg-white/10" />
                  <div className="h-5 w-32 animate-pulse rounded bg-white/10" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Contact() {
  const {
    register,
    handleSubmit: handleFormSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      category: categories[0],
      message: '',
      acceptPrivacy: undefined as unknown as true,
      acceptNewsletter: false,
    },
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [particles, setParticles] = useState<Particle[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const messageValue = watch('message', '')

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 100)

    if (typeof window !== 'undefined') {
      const newParticles = [...Array(30)].map((_, i) => ({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
      }))
      setParticles(newParticles)
    }

    return () => clearTimeout(timer)
  }, [])

  const handleSubmit = async (data: ContactFormValues) => {
    setStatus('sending')
    setErrorMessage('')

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          category: data.category,
          message: data.message,
          acceptNewsletter: data.acceptNewsletter,
          _subject: `Nuevo mensaje de ${data.name} - ${data.category}`,
          _replyto: data.email,
        }),
      })

      const responseData = await response.json()

      if (response.ok) {
        setStatus('success')
        trackEvent('submit_contact_form', {
          category: 'engagement',
          label: data.category,
        })

        reset()

        setTimeout(() => {
          setStatus('idle')
        }, 5000)
      } else {
        setStatus('error')
        setErrorMessage(
          responseData.error ||
            responseData.errors?.[0]?.message ||
            'Error al enviar el mensaje. Por favor, inténtalo de nuevo.'
        )
      }
    } catch (error) {
      setStatus('error')
      setErrorMessage('Error de conexión. Verifica tu internet e inténtalo de nuevo.')
      console.error('Contact form error:', error)
    }
  }

  // Show skeleton while loading
  if (isLoading) {
    return <ContactSkeleton />
  }

  return (
    <section id="contact" className="relative overflow-hidden bg-black py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-950 to-black" />
      <div className="absolute left-1/2 top-0 h-[500px] w-[1000px] -translate-x-1/2 rounded-full bg-yellow-500/10 blur-[150px]" />

      {particles.length > 0 && (
        <div className="absolute inset-0 opacity-20">
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute h-1 w-1 rounded-full bg-yellow-400"
              initial={{
                x: particle.x,
                y: particle.y,
              }}
              animate={{
                y: [null, particle.y - 300],
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
      )}

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="mb-16 text-center sm:mb-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 backdrop-blur-sm"
            >
              <Sparkles className="h-4 w-4 text-yellow-400" />
              <span className="text-sm font-bold uppercase tracking-wider text-slate-300">
                Hablemos
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="mb-6 text-4xl font-bold text-white sm:text-5xl lg:text-6xl"
            >
              Contacto Profesional
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="mx-auto max-w-3xl text-lg leading-relaxed text-slate-300 sm:text-xl"
            >
              Disponible para castings, colaboraciones y consultas profesionales
            </motion.p>
          </div>

          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Columna izquierda: Formulario + Tiempo de Respuesta */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="relative">
                <div className="absolute -inset-1 rounded-3xl bg-yellow-400/20 opacity-50 blur-2xl" />

                <div className="relative rounded-3xl border border-white/10 bg-white/[0.02] p-8 shadow-2xl backdrop-blur-xl">
                  <form onSubmit={handleFormSubmit(handleSubmit)} className="space-y-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-bold text-slate-200"
                      >
                        Nombre Completo *
                      </label>
                      <input
                        type="text"
                        id="name"
                        {...register('name')}
                        disabled={status === 'sending'}
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-400 transition-all focus:border-transparent focus:ring-2 focus:ring-yellow-400 disabled:opacity-50"
                        placeholder="Tu nombre"
                      />
                      {errors.name && (
                        <p className="mt-1 text-xs text-red-400">{errors.name.message}</p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-bold text-slate-200"
                      >
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        {...register('email')}
                        disabled={status === 'sending'}
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-400 transition-all focus:border-transparent focus:ring-2 focus:ring-yellow-400 disabled:opacity-50"
                        placeholder="tu@email.com"
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-red-400">
                          {errors.email.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="category"
                        className="mb-2 block text-sm font-bold text-slate-200"
                      >
                        Categoría *
                      </label>
                      <div className="relative">
                        <select
                          id="category"
                          {...register('category')}
                          disabled={status === 'sending'}
                          className="w-full cursor-pointer appearance-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white transition-all focus:border-transparent focus:ring-2 focus:ring-yellow-400 disabled:opacity-50"
                        >
                          {categories.map((cat) => (
                            <option
                              key={cat}
                              value={cat}
                              className="bg-neutral-900 py-2 text-white"
                            >
                              {cat}
                            </option>
                          ))}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                          <svg
                            className="h-5 w-5 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </div>
                      </div>
                      {errors.category && (
                        <p className="mt-1 text-xs text-red-400">
                          {errors.category.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="mb-2 block text-sm font-bold text-slate-200"
                      >
                        Mensaje *
                      </label>
                      <textarea
                        id="message"
                        rows={6}
                        {...register('message')}
                        disabled={status === 'sending'}
                        className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-400 transition-all focus:border-transparent focus:ring-2 focus:ring-yellow-400 disabled:opacity-50"
                        placeholder="Cuéntame sobre tu proyecto o consulta..."
                      />
                      <p className="mt-1 text-xs text-slate-400">
                        {messageValue.length} / 2000 caracteres
                      </p>
                      {errors.message && (
                        <p className="mt-1 text-xs text-red-400">
                          {errors.message.message}
                        </p>
                      )}
                    </div>

                    {/* Legal Checkboxes */}
                    <div className="space-y-3 rounded-xl border border-white/10 bg-white/[0.02] p-4">
                      <label className="group flex cursor-pointer items-start gap-3">
                        <input
                          type="checkbox"
                          {...register('acceptPrivacy')}
                          disabled={status === 'sending'}
                          className="mt-0.5 h-5 w-5 cursor-pointer rounded border-white/20 bg-white/5 text-yellow-400 focus:ring-2 focus:ring-yellow-400 focus:ring-offset-0 disabled:opacity-50"
                        />
                        <span className="text-sm leading-relaxed text-slate-300">
                          He leído y acepto la{' '}
                          <Link
                            href="/privacy"
                            target="_blank"
                            className="font-semibold text-yellow-400 underline hover:text-yellow-300"
                          >
                            Política de Privacidad
                          </Link>{' '}
                          *
                        </span>
                      </label>
                      {errors.acceptPrivacy && (
                        <p className="text-xs text-red-400">
                          {errors.acceptPrivacy.message}
                        </p>
                      )}

                      <label className="group flex cursor-pointer items-start gap-3">
                        <input
                          type="checkbox"
                          {...register('acceptNewsletter')}
                          disabled={status === 'sending'}
                          className="mt-0.5 h-5 w-5 cursor-pointer rounded border-white/20 bg-white/5 text-yellow-400 focus:ring-2 focus:ring-yellow-400 focus:ring-offset-0 disabled:opacity-50"
                        />
                        <span className="text-sm leading-relaxed text-slate-300">
                          Deseo recibir noticias y actualizaciones sobre proyectos
                          (opcional)
                        </span>
                      </label>
                    </div>

                    {status === 'success' && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.05] p-4"
                      >
                        <CheckCircle className="h-5 w-5 flex-shrink-0 text-white" />
                        <span className="text-sm font-semibold text-white">
                          ¡Mensaje enviado! Te responderé en menos de 48 horas.
                        </span>
                      </motion.div>
                    )}

                    {status === 'error' && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-3 rounded-xl border border-red-500/30 bg-red-500/10 p-4"
                      >
                        <AlertCircle className="h-5 w-5 flex-shrink-0 text-red-400" />
                        <span className="text-sm font-semibold text-red-300">
                          {errorMessage}
                        </span>
                      </motion.div>
                    )}

                    <motion.button
                      type="submit"
                      disabled={status === 'sending'}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex w-full items-center justify-center gap-3 rounded-xl bg-yellow-400 px-8 py-4 font-bold text-black shadow-lg transition-all hover:bg-yellow-300 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      {status === 'sending' ? (
                        <>
                          <Loader2 className="h-5 w-5 animate-spin" />
                          <span>Enviando...</span>
                        </>
                      ) : (
                        <>
                          <Send className="h-5 w-5" />
                          <span>Enviar Mensaje</span>
                        </>
                      )}
                    </motion.button>

                    <p className="text-center text-xs text-slate-400">
                      Formulario protegido por Formspree • Tus datos son privados
                    </p>
                  </form>
                </div>
              </div>

              {/* Tiempo de Respuesta - Ahora debajo del formulario */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
              >
                <div className="absolute -inset-0.5 rounded-2xl bg-yellow-400/20 opacity-40 blur-lg" />
                <div className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-yellow-400">
                      <Clock className="h-6 w-6 text-black" />
                    </div>
                    <div>
                      <h4 className="mb-2 text-lg font-bold text-white">
                        Tiempo de Respuesta
                      </h4>
                      <p className="text-sm leading-relaxed text-slate-300">
                        Respondo personalmente a todos los mensajes en un plazo máximo de{' '}
                        <strong className="text-white">48 horas hábiles</strong>. Para
                        consultas urgentes, contacta directamente por email o redes
                        sociales.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Columna derecha: Info de contacto y Redes Sociales */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="space-y-4">
                {contactInfo.map((info) => {
                  const Icon = info.icon
                  return (
                    <motion.div
                      key={info.label}
                      whileHover={{ y: -4, scale: 1.02 }}
                      className="group relative"
                    >
                      <div className="absolute -inset-0.5 rounded-2xl bg-yellow-400/20 opacity-0 blur-lg transition-opacity group-hover:opacity-100" />
                      <div className="relative flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-xl">
                        <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-yellow-400 shadow-lg">
                          <Icon className="h-7 w-7 text-black" />
                        </div>
                        <div className="flex-1">
                          <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-slate-400">
                            {info.label}
                          </p>
                          {info.link ? (
                            <a
                              href={info.link}
                              className="font-bold text-white transition-colors hover:text-yellow-400"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="font-bold text-white">{info.value}</p>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>

              <div>
                <h3 className="mb-4 flex items-center gap-2 text-2xl font-bold text-white">
                  <Sparkles className="h-5 w-5 text-yellow-400" />
                  Sígueme
                </h3>
                <div className="space-y-3">
                  {socialLinks.map((social) => {
                    const Icon = social.icon
                    return (
                      <motion.a
                        key={social.label}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() =>
                          trackEvent('click_social', {
                            category: 'engagement',
                            label: social.label,
                          })
                        }
                        whileHover={{ x: 5, scale: 1.02 }}
                        className="group relative flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.02] p-4 backdrop-blur-xl transition-all"
                      >
                        <div className="flex items-center gap-3">
                          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 shadow-lg">
                            {Icon === 'tiktok' ? (
                              <SiTiktok className="h-6 w-6 text-white" />
                            ) : (
                              <Icon className="h-6 w-6 text-white" />
                            )}
                          </div>
                          <div>
                            <p className="font-bold text-white">{social.label}</p>
                            <p className="text-sm text-slate-400">{social.handle}</p>
                          </div>
                        </div>
                        <ExternalLink className="h-5 w-5 text-slate-500 transition-colors group-hover:text-yellow-400" />
                      </motion.a>
                    )
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />
    </section>
  )
}
