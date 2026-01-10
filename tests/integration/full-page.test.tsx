import { describe, it, expect, vi } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import Home from '@/app/page'

// Mock all heavy components
vi.mock('@/components/Navbar', () => ({
  default: () => (
    <nav data-testid="navbar">
      <a href="#about">Sobre Mí</a>
      <a href="#portfolio">Portfolio</a>
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

vi.mock('@/components/sections/About', () => ({
  default: () => (
    <section id="about" data-testid="about">
      <h2>Sobre Mí</h2>
      <p>13+ años de experiencia</p>
    </section>
  ),
}))

vi.mock('@/components/sections/Stats', () => ({
  default: () => (
    <section data-testid="stats">
      <div>300+ Episodios</div>
      <div>8 Series de TV</div>
    </section>
  ),
}))

vi.mock('@/components/sections/SkillsGraph', () => ({
  default: () => (
    <section data-testid="skills">
      <h2>Habilidades</h2>
    </section>
  ),
}))

vi.mock('next/dynamic', () => ({
  default: (importFn: any) => {
    const componentName = importFn.toString().match(/\/(\w+)'\)/)?.[1] || 'Component'
    return () => <div data-testid={componentName.toLowerCase()}>{componentName}</div>
  },
}))

describe('Full Page Integration', () => {
  it('should render complete page structure', () => {
    const { container } = render(<Home />)
    
    // Check main structure
    expect(container.querySelector('main')).toBeInTheDocument()
    expect(screen.getByTestId('navbar')).toBeInTheDocument()
    expect(screen.getByTestId('footer')).toBeInTheDocument()
  })

  it('should have all critical sections', () => {
    render(<Home />)
    
    expect(screen.getByTestId('navbar')).toBeInTheDocument()
    expect(screen.getByTestId('hero')).toBeInTheDocument()
    expect(screen.getByTestId('about')).toBeInTheDocument()
    expect(screen.getByTestId('stats')).toBeInTheDocument()
    expect(screen.getByTestId('skills')).toBeInTheDocument()
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

  it('should display stats', () => {
    render(<Home />)
    
    const stats = screen.getByTestId('stats')
    expect(within(stats).getByText(/300\+.*Episodios/i)).toBeInTheDocument()
    expect(within(stats).getByText(/8.*Series/i)).toBeInTheDocument()
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
