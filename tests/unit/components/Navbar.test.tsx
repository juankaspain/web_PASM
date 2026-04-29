import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import Navbar from '@/components/Navbar'

vi.mock('framer-motion', () => ({
  motion: {
    nav: ({
      children,
      ...props
    }: ComponentPropsWithoutRef<'nav'> & { children?: ReactNode }) => (
      <nav {...props}>{children}</nav>
    ),
    div: ({
      children,
      ...props
    }: ComponentPropsWithoutRef<'div'> & { children?: ReactNode }) => (
      <div {...props}>{children}</div>
    ),
    button: ({
      children,
      ...props
    }: ComponentPropsWithoutRef<'button'> & { children?: ReactNode }) => (
      <button {...props}>{children}</button>
    ),
    a: ({
      children,
      ...props
    }: ComponentPropsWithoutRef<'a'> & { children?: ReactNode }) => (
      <a {...props}>{children}</a>
    ),
  },
  AnimatePresence: ({ children }: { children?: ReactNode }) => <>{children}</>,
}))

describe('Navbar', () => {
  it('should render the navbar', () => {
    render(<Navbar />)
    expect(screen.getByRole('navigation')).toBeInTheDocument()
  })

  it('should display the actor name', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: /almagro san miguel/i })).toBeInTheDocument()
  })

  it('should have navigation links', () => {
    render(<Navbar />)
    const links = screen.getAllByRole('link')
    expect(links.length).toBeGreaterThan(0)
  })

  it('should expose the contact link in the more menu', () => {
    render(<Navbar />)
    fireEvent.click(screen.getByRole('button', { name: /más/i }))

    const contactLink = screen.getByText(/contacto/i).closest('a')
    expect(contactLink).toHaveAttribute('href', '#contact')
  })

  it('should toggle mobile menu on button click', () => {
    render(<Navbar />)
    const menuButton = screen.getByRole('button', { name: /menú|menu/i })

    fireEvent.click(menuButton)

    expect(
      screen.getByRole('dialog', { name: /menú de navegación/i })
    ).toBeInTheDocument()
  })

  it('should have all primary sections in navigation', () => {
    render(<Navbar />)
    const expectedSections = ['Sobre mí', 'Series TV', 'Cine', 'Teatro', 'Showreel']

    expectedSections.forEach((section) => {
      expect(screen.getByText(new RegExp(section, 'i'))).toBeInTheDocument()
    })
  })
})
