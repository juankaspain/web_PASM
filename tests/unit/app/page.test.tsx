import { describe, it, expect, vi } from 'vitest'
import { render } from '@testing-library/react'
import Home from '@/app/page'

// Mock all components
vi.mock('@/components/Navbar', () => ({
  default: () => <nav data-testid="navbar">Navbar</nav>,
}))

vi.mock('@/components/Footer', () => ({
  default: () => <footer data-testid="footer">Footer</footer>,
}))

vi.mock('@/components/sections/Hero', () => ({
  default: () => <div data-testid="hero">Hero</div>,
}))

vi.mock('@/components/sections/About', () => ({
  default: () => <div data-testid="about">About</div>,
}))

vi.mock('@/components/sections/Stats', () => ({
  default: () => <div data-testid="stats">Stats</div>,
}))

vi.mock('@/components/sections/SkillsGraph', () => ({
  default: () => <div data-testid="skills">Skills</div>,
}))

// Mock dynamic imports
vi.mock('next/dynamic', () => ({
  default: (importFn: any) => {
    const componentName = importFn.toString().match(/import\('.*\/(\w+)'\)/)?.[1] || 'Component'
    return () => <div data-testid={componentName.toLowerCase()}>{componentName}</div>
  },
}))

describe('Home Page', () => {
  it('should render without crashing', () => {
    const { container } = render(<Home />)
    expect(container).toBeInTheDocument()
  })

  it('should render Navbar', () => {
    const { getByTestId } = render(<Home />)
    expect(getByTestId('navbar')).toBeInTheDocument()
  })

  it('should render Footer', () => {
    const { getByTestId } = render(<Home />)
    expect(getByTestId('footer')).toBeInTheDocument()
  })

  it('should render Hero section', () => {
    const { getByTestId } = render(<Home />)
    expect(getByTestId('hero')).toBeInTheDocument()
  })

  it('should render About section', () => {
    const { getByTestId } = render(<Home />)
    expect(getByTestId('about')).toBeInTheDocument()
  })

  it('should have main element with correct class', () => {
    const { container } = render(<Home />)
    const main = container.querySelector('main')
    expect(main).toHaveClass('relative')
  })
})
