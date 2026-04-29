import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import { createElement, type ReactNode } from 'react'
import Contact from '@/components/sections/Contact'

vi.mock('framer-motion', () => {
  const motionOnlyProps = [
    'initial',
    'animate',
    'exit',
    'transition',
    'viewport',
    'whileHover',
    'whileInView',
    'whileTap',
  ]

  type MotionElement = 'div' | 'section' | 'a' | 'button' | 'h2' | 'p'
  type MotionProps = Record<string, unknown> & { children?: ReactNode }

  const createMotionMock = (Element: MotionElement) => {
    function MotionMock({ children, ...props }: MotionProps) {
      const cleanProps: Record<string, unknown> = { ...props }
      motionOnlyProps.forEach((prop) => {
        delete cleanProps[prop]
      })

      return createElement(Element, cleanProps, children)
    }

    MotionMock.displayName = `motion.${Element}`
    return MotionMock
  }

  return {
    motion: {
      div: createMotionMock('div'),
      section: createMotionMock('section'),
      a: createMotionMock('a'),
      button: createMotionMock('button'),
      h2: createMotionMock('h2'),
      p: createMotionMock('p'),
    },
  }
})

// Mock analytics
vi.mock('@/lib/analytics', () => ({
  trackEvent: vi.fn(),
}))

describe('Contact Component', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should render contact form', async () => {
    render(<Contact />)
    expect(
      await screen.findByRole('form', { name: /formulario de contacto/i })
    ).toBeInTheDocument()
  })

  it('should have all form fields', async () => {
    render(<Contact />)

    const nameInput = await screen.findByLabelText(/nombre/i)
    const emailInput = await screen.findByLabelText(/email/i)
    const messageInput = await screen.findByLabelText(/mensaje/i)

    expect(nameInput).toBeInTheDocument()
    expect(emailInput).toBeInTheDocument()
    expect(messageInput).toBeInTheDocument()
  })

  it('should display contact information', async () => {
    render(<Contact />)
    expect(await screen.findByText(/info@almagrosanmiguel\.com/i)).toBeInTheDocument()
    expect(await screen.findByText(/sevilla/i)).toBeInTheDocument()
  })

  it('should have submit button', async () => {
    render(<Contact />)
    const submitButton = await screen.findByRole('button', { name: /enviar/i })
    expect(submitButton).toBeInTheDocument()
  })

  it('should show character counter for message', async () => {
    render(<Contact />)
    const counter = await screen.findByText(/2000/)
    expect(counter).toBeInTheDocument()
  })

  it('should display social media links', async () => {
    render(<Contact />)
    expect(await screen.findByText(/instagram/i)).toBeInTheDocument()
    expect(await screen.findByText(/facebook/i)).toBeInTheDocument()
  })

  it('should have response time information', async () => {
    render(<Contact />)
    expect(await screen.findByText(/48 horas/i)).toBeInTheDocument()
  })
})
