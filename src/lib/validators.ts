// Input validation utilities

import { z } from 'zod'

/**
 * Contact form validation schema
 */
export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, 'El nombre debe tener al menos 2 caracteres')
    .max(100, 'El nombre no puede exceder 100 caracteres')
    .regex(/^[a-zA-ZÀ-ſ\s]+$/, 'El nombre solo puede contener letras'),
  email: z
    .string()
    .email('Correo electrónico inválido')
    .toLowerCase()
    .trim(),
  message: z
    .string()
    .min(10, 'El mensaje debe tener al menos 10 caracteres')
    .max(1000, 'El mensaje no puede exceder 1000 caracteres'),
})

export type ContactFormSchema = z.infer<typeof contactFormSchema>

/**
 * Validate email format
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

/**
 * Sanitize HTML to prevent XSS
 */
export function sanitizeHtml(html: string): string {
  const temp = document.createElement('div')
  temp.textContent = html
  return temp.innerHTML
}

/**
 * Validate URL format
 */
export function isValidUrl(url: string): boolean {
  try {
    new URL(url)
    return true
  } catch {
    return false
  }
}

/**
 * Validate phone number (Spanish format)
 */
export function isValidPhoneES(phone: string): boolean {
  const phoneRegex = /^(\+34|0034|34)?[6-9]\d{8}$/
  return phoneRegex.test(phone.replace(/\s/g, ''))
}
