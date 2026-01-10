import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import Footer from '@/components/Footer'

// Mock framer-motion
vi.mock('framer-motion', () => ({
  motion: {
    footer: ({ children, ...props }: any) => <footer {...props}>{children}</footer>,
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  },
}))

describe('Footer', () => {
  it('should render the footer', () => {
    render(<Footer />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('should display copyright information', () => {
    render(<Footer />)
    const currentYear = new Date().getFullYear()
    expect(screen.getByText(new RegExp(currentYear.toString()))).toBeInTheDocument()
  })

  it('should have social media links', () => {
    render(<Footer />)
    const links = screen.getAllByRole('link')
    expect(links.length).toBeGreaterThan(0)
  })

  it('should have Instagram link', () => {
    render(<Footer />)
    const instagramLink = screen.getByLabelText(/instagram/i) || 
                         screen.getByText(/instagram/i).closest('a')
    expect(instagramLink).toBeInTheDocument()
  })

  it('should have IMDb link', () => {
    render(<Footer />)
    const imdbText = screen.getByText(/IMDb/i)
    expect(imdbText).toBeInTheDocument()
  })

  it('should display actor name', () => {
    render(<Footer />)
    expect(screen.getByText(/Almagro San Miguel/i)).toBeInTheDocument()
  })

  it('should have external links with correct attributes', () => {
    render(<Footer />)
    const externalLinks = screen.getAllByRole('link')
    const socialLinks = externalLinks.filter(link => 
      link.getAttribute('href')?.includes('instagram') ||
      link.getAttribute('href')?.includes('imdb') ||
      link.getAttribute('href')?.includes('facebook')
    )
    
    socialLinks.forEach(link => {
      expect(link).toHaveAttribute('target', '_blank')
      expect(link).toHaveAttribute('rel', 'noopener noreferrer')
    })
  })
})
