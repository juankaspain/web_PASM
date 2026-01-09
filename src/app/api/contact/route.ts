import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const contactSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  subject: z.string().min(5, 'El asunto debe tener al menos 5 caracteres'),
  message: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres'),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate input
    const validatedData = contactSchema.parse(body)

    // TODO: In production, integrate with email service
    // Examples:
    // - Resend: await resend.emails.send()
    // - SendGrid: await sgMail.send()
    // - Nodemailer: await transporter.sendMail()

    // Mock email sending
    console.log('Contact form submission:', {
      ...validatedData,
      timestamp: new Date().toISOString(),
    })

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 500))

    // In production, you would send the email here
    // For now, we just return success

    return NextResponse.json(
      {
        success: true,
        message: 'Mensaje enviado correctamente. Te responderé pronto.',
      },
      { status: 200 }
    )
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: 'Error de validación',
          errors: error.errors,
        },
        { status: 400 }
      )
    }

    console.error('Contact form error:', error)
    return NextResponse.json(
      {
        success: false,
        message: 'Error al enviar el mensaje. Intenta de nuevo.',
      },
      { status: 500 }
    )
  }
}
