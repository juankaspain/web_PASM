import { describe, it, expect, vi } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import Home from '@/app/page'

vi.mock('@/components/Navbar', () => ({
  default: () => (
    <nav data-testid="navbar">
      <a href="#about">Sobre mí</a>
      <a href="#series">Series TV</a>
      <a href="#contact">Contacto</a>
    </nav>
  ),
}))

vi.mock('@/components/Footer', () => ({
  default: () => (
    <footer data-testid="footer">
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        Instagram
      </a>
      <p>© 2026 Almagro San Miguel</p>
    </footer>
  ),
}))

vi.mock('@/components/sections/Hero', () => ({
  default: () => (
    <section data-testid="hero">
      <h1>Almagro San Miguel</h1>
      <p>Actor Profesional</p>
    </section>
  ),
}))

vi.mock('@/components/sections/LatestProject', () => ({
  default: () => <section data-testid="latest-project">Último trabajo</section>,
}))

vi.mock('@/components/sections/About', () => ({
  default: () => (
    <section id="about" data-testid="about">
      <h2>Sobre mí</h2>
      <p>13+ años de experiencia</p>
    </section>
  ),
}))

vi.mock('@/components/ui/ScrollToTop', () => ({
  default: () => <button data-testid="scroll-to-top">Arriba</button>,
}))

vi.mock('next/dynamic', () => ({
  default: () => {
    const DynamicComponent = () => <section data-testid="lazy-section">Lazy</section>
    return DynamicComponent
  },
}))

describe('Full Page Integration', () => {
  it('should render complete page structure', () => {
    const { container } = render(<Home />)

    expect(container.querySelector('main')).toBeInTheDocument()
    expect(screen.getByTestId('navbar')).toBeInTheDocument()
    expect(screen.getByTestId('footer')).toBeInTheDocument()
  })

  it('should have all critical above-the-fold sections', () => {
    render(<Home />)

    expect(screen.getByTestId('navbar')).toBeInTheDocument()
    expect(screen.getByTestId('hero')).toBeInTheDocument()
    expect(screen.getByTestId('latest-project')).toBeInTheDocument()
    expect(screen.getByTestId('about')).toBeInTheDocument()
    expect(screen.getAllByTestId('lazy-section').length).toBeGreaterThan(0)
    expect(screen.getByTestId('footer')).toBeInTheDocument()
  })

  it('should have navigation links', () => {
    render(<Home />)

    const navbar = screen.getByTestId('navbar')
    const links = within(navbar).getAllByRole('link')

    expect(links.length).toBeGreaterThanOrEqual(3)
    expect(links[0]).toHaveAttribute('href', '#about')
  })

  it('should display hero content', () => {
    render(<Home />)

    const hero = screen.getByTestId('hero')
    expect(within(hero).getByText(/Almagro San Miguel/i)).toBeInTheDocument()
    expect(within(hero).getByText(/Actor Profesional/i)).toBeInTheDocument()
  })

  it('should have footer with social links', () => {
    render(<Home />)

    const footer = screen.getByTestId('footer')
    const instagramLink = within(footer).getByText(/Instagram/i)

    expect(instagramLink).toBeInTheDocument()
    expect(instagramLink.closest('a')).toHaveAttribute('target', '_blank')
  })

  it('should display copyright', () => {
    render(<Home />)

    const footer = screen.getByTestId('footer')
    expect(within(footer).getByText(/2026/)).toBeInTheDocument()
    expect(within(footer).getByText(/Almagro San Miguel/i)).toBeInTheDocument()
  })

  it('should have proper semantic structure', () => {
    const { container } = render(<Home />)

    expect(container.querySelector('main')).toBeInTheDocument()
    expect(container.querySelector('nav')).toBeInTheDocument()
    expect(container.querySelector('footer')).toBeInTheDocument()
  })
})
