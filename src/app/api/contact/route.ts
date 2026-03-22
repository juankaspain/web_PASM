import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

// E.3 - Formspree endpoint kept server-side only
const FORMSPREE_ENDPOINT = process.env.FORMSPREE_URL || 'https://formspree.io/f/xlggrndl'

// E.1 - Use Zod schema for validation (matching validators.ts pattern)
const contactApiSchema = z.object({
  name: z
    .string()
    .min(2, 'El nombre debe tener al menos 2 caracteres')
    .max(100, 'El nombre no puede exceder 100 caracteres'),
  email: z.string().email('Correo electrónico inválido').toLowerCase().trim(),
  category: z
    .string()
    .min(1, 'La categoría es obligatoria')
    .max(100, 'Categoría demasiado larga'),
  message: z
    .string()
    .min(10, 'El mensaje debe tener al menos 10 caracteres')
    .max(2000, 'El mensaje no puede exceder 2000 caracteres'),
})

// E.1 - Basic in-memory rate limiting
const rateLimit = new Map<string, { count: number; resetTime: number }>()
const RATE_LIMIT_WINDOW = 60 * 1000 // 1 minute
const RATE_LIMIT_MAX = 5 // max requests per window

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const entry = rateLimit.get(ip)

  if (!entry || now > entry.resetTime) {
    rateLimit.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW })
    return false
  }

  entry.count++
  if (entry.count > RATE_LIMIT_MAX) {
    return true
  }

  return false
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown'
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Demasiadas solicitudes. Inténtalo de nuevo en un minuto.' },
        { status: 429 }
      )
    }

    const body = await request.json()

    // Validate with Zod
    const result = contactApiSchema.safeParse(body)
    if (!result.success) {
      const firstError = result.error.errors[0]?.message || 'Datos inválidos'
      return NextResponse.json({ error: firstError }, { status: 400 })
    }

    const { name, email, category, message } = result.data

    // E.3 - Forward validated data to Formspree server-side
    const formspreeResponse = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        category,
        message,
        _subject: `Nuevo mensaje de ${name} - ${category}`,
        _replyto: email,
      }),
    })

    if (!formspreeResponse.ok) {
      const errorData = await formspreeResponse.json().catch(() => ({}))
      return NextResponse.json(
        { error: errorData.error || 'Error al enviar el mensaje. Inténtalo de nuevo.' },
        { status: formspreeResponse.status }
      )
    }

    return NextResponse.json({
      success: true,
      message: '¡Mensaje enviado con éxito! Te responderé pronto.',
      data: {
        name,
        category,
        timestamp: new Date().toISOString(),
      },
    })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Error al enviar el mensaje. Inténtalo de nuevo.' },
      { status: 500 }
    )
  }
}
