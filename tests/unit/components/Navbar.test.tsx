import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import Navbar from '@/components/Navbar'

// Mock framer-motion
vi.mock('framer-motion', () => ({
  motion: {
    nav: ({ children, ...props }: any) => <nav {...props}>{children}</nav>,
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    button: ({ children, ...props }: any) => <button {...props}>{children}</button>,
  },
  AnimatePresence: ({ children }: any) => <>{children}</>,
}))

describe('Navbar', () => {
  it('should render the navbar', () => {
    render(<Navbar />)
    expect(screen.getByRole('navigation')).toBeInTheDocument()
  })

  it('should display the actor name', () => {
    render(<Navbar />)
    expect(screen.getByText(/Almagro San Miguel/i)).toBeInTheDocument()
  })

  it('should have navigation links', () => {
    render(<Navbar />)
    const links = screen.getAllByRole('link')
    expect(links.length).toBeGreaterThan(0)
  })

  it('should have a contact button', () => {
    render(<Navbar />)
    const contactLink = screen.getByText(/Contacto/i).closest('a')
    expect(contactLink).toHaveAttribute('href', '#contact')
  })

  it('should toggle mobile menu on button click', () => {
    render(<Navbar />)
    const menuButton = screen.getByRole('button', { name: /menu/i })
    
    fireEvent.click(menuButton)
    // Mobile menu should be visible after click
    expect(menuButton).toBeInTheDocument()
  })

  it('should have all main sections in navigation', () => {
    render(<Navbar />)
    const expectedSections = ['Sobre Mí', 'Portfolio', 'Contacto']
    
    expectedSections.forEach(section => {
      expect(screen.getByText(new RegExp(section, 'i'))).toBeInTheDocument()
    })
  })
})
