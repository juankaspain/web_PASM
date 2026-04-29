import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const DEFAULT_FORMSPREE_ENDPOINT = 'https://formspree.io/f/xlggrndl'
const RATE_LIMIT_WINDOW = 60 * 1000
const RATE_LIMIT_MAX = 5
const RATE_LIMIT_PRUNE_INTERVAL = 5 * RATE_LIMIT_WINDOW
const MAX_BODY_SIZE_BYTES = 10_000
const FORMSPREE_TIMEOUT_MS = 10_000

const contactApiSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, 'El nombre debe tener al menos 2 caracteres')
    .max(100, 'El nombre no puede exceder 100 caracteres'),
  email: z.string().email('Correo electrónico inválido').toLowerCase().trim(),
  category: z
    .string()
    .trim()
    .min(1, 'La categoría es obligatoria')
    .max(100, 'Categoría demasiado larga'),
  message: z
    .string()
    .trim()
    .min(10, 'El mensaje debe tener al menos 10 caracteres')
    .max(2000, 'El mensaje no puede exceder 2000 caracteres'),
  company: z.string().max(0, 'Datos inválidos').optional(),
  acceptNewsletter: z.boolean().optional(),
})

const rateLimit = new Map<string, { count: number; resetTime: number }>()
let lastRateLimitPrune = Date.now()

function getFormspreeEndpoint(): string | null {
  if (process.env.FORMSPREE_URL) {
    return process.env.FORMSPREE_URL
  }

  if (process.env.NODE_ENV === 'production') {
    return null
  }

  return DEFAULT_FORMSPREE_ENDPOINT
}

function getClientIp(headers: Headers): string {
  return (
    headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    headers.get('x-real-ip')?.trim() ||
    'unknown'
  )
}

function pruneRateLimit(now: number) {
  if (now - lastRateLimitPrune < RATE_LIMIT_PRUNE_INTERVAL) return

  for (const [ip, entry] of rateLimit.entries()) {
    if (entry.resetTime < now) {
      rateLimit.delete(ip)
    }
  }

  lastRateLimitPrune = now
}

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  pruneRateLimit(now)

  const entry = rateLimit.get(ip)

  if (!entry || now > entry.resetTime) {
    rateLimit.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW })
    return false
  }

  entry.count += 1
  return entry.count > RATE_LIMIT_MAX
}

async function forwardToFormspree(data: z.infer<typeof contactApiSchema>) {
  const endpoint = getFormspreeEndpoint()
  if (!endpoint) {
    return NextResponse.json(
      { error: 'El formulario no está configurado para producción.' },
      { status: 500 }
    )
  }

  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), FORMSPREE_TIMEOUT_MS)

  try {
    const formspreeResponse = await fetch(endpoint, {
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
        acceptNewsletter: data.acceptNewsletter === true,
        _subject: `Nuevo mensaje de ${data.name} - ${data.category}`,
        _replyto: data.email,
      }),
      signal: controller.signal,
    })

    if (!formspreeResponse.ok) {
      const errorData = (await formspreeResponse.json().catch(() => null)) as {
        error?: string
      } | null

      return NextResponse.json(
        { error: errorData?.error || 'Error al enviar el mensaje. Inténtalo de nuevo.' },
        { status: formspreeResponse.status }
      )
    }

    return NextResponse.json({
      success: true,
      message: '¡Mensaje enviado con éxito! Te responderé pronto.',
      data: {
        name: data.name,
        category: data.category,
        timestamp: new Date().toISOString(),
      },
    })
  } finally {
    clearTimeout(timeout)
  }
}

export async function POST(request: NextRequest) {
  try {
    const contentLength = Number.parseInt(
      request.headers.get('content-length') || '0',
      10
    )
    if (contentLength > MAX_BODY_SIZE_BYTES) {
      return NextResponse.json(
        { error: 'El mensaje supera el tamaño máximo permitido.' },
        { status: 413 }
      )
    }

    const contentType = request.headers.get('content-type')?.toLowerCase() || ''
    if (!contentType.includes('application/json')) {
      return NextResponse.json(
        { error: 'Formato de solicitud no soportado.' },
        { status: 415 }
      )
    }

    const ip = getClientIp(request.headers)
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Demasiadas solicitudes. Inténtalo de nuevo en un minuto.' },
        { status: 429 }
      )
    }

    let body: unknown
    try {
      body = await request.json()
    } catch {
      return NextResponse.json({ error: 'JSON inválido.' }, { status: 400 })
    }

    const result = contactApiSchema.safeParse(body)
    if (!result.success) {
      const firstError = result.error.errors[0]?.message || 'Datos inválidos'
      return NextResponse.json({ error: firstError }, { status: 400 })
    }

    return forwardToFormspree(result.data)
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Error al enviar el mensaje. Inténtalo de nuevo.' },
      { status: 500 }
    )
  }
}
