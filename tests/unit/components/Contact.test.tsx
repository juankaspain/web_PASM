import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import Contact from '@/components/sections/Contact'

// Mock framer-motion
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    section: ({ children, ...props }: any) => <section {...props}>{children}</section>,
  },
}))

// Mock analytics
vi.mock('@/lib/analytics', () => ({
  trackEvent: vi.fn(),
}))

describe('Contact Component', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should render contact form', () => {
    render(<Contact />)
    expect(screen.getByRole('form') || screen.getByText(/contacto/i)).toBeInTheDocument()
  })

  it('should have all form fields', () => {
    render(<Contact />)
    
    const nameInput = screen.getByLabelText(/nombre/i) || screen.getByPlaceholderText(/nombre/i)
    const emailInput = screen.getByLabelText(/email/i) || screen.getByPlaceholderText(/email/i)
    const messageInput = screen.getByLabelText(/mensaje/i) || screen.getByPlaceholderText(/mensaje/i)
    
    expect(nameInput).toBeInTheDocument()
    expect(emailInput).toBeInTheDocument()
    expect(messageInput).toBeInTheDocument()
  })

  it('should display contact information', () => {
    render(<Contact />)
    expect(screen.getByText(/info@almagrosanmiguel\.com/i)).toBeInTheDocument()
    expect(screen.getByText(/sevilla/i)).toBeInTheDocument()
  })

  it('should have submit button', () => {
    render(<Contact />)
    const submitButton = screen.getByRole('button', { name: /enviar/i })
    expect(submitButton).toBeInTheDocument()
  })

  it('should show character counter for message', () => {
    render(<Contact />)
    const counter = screen.getByText(/2000/)
    expect(counter).toBeInTheDocument()
  })

  it('should display social media links', () => {
    render(<Contact />)
    expect(screen.getByText(/instagram/i)).toBeInTheDocument()
    expect(screen.getByText(/facebook/i) || screen.getByText(/twitter/i)).toBeInTheDocument()
  })

  it('should have response time information', () => {
    render(<Contact />)
    expect(screen.getByText(/48 horas/i) || screen.getByText(/respuesta/i)).toBeInTheDocument()
  })
})
