import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import App from './App.tsx'
import { approachSteps, hero, navItems, siteName, workItems } from './content.ts'

describe('App', () => {
  it('renders the single page landmarks', () => {
    render(<App />)

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toHaveTextContent(String(new Date().getFullYear()))
    expect(screen.getByRole('heading', { level: 1, name: hero.title })).toBeInTheDocument()
  })

  it('links primary navigation to sections on the same page', () => {
    render(<App />)

    expect(screen.getByRole('link', { name: siteName })).toHaveAttribute('href', '#top')

    for (const item of navItems) {
      expect(screen.getByRole('link', { name: item.label })).toHaveAttribute('href', item.href)
      expect(document.querySelector(item.href)).not.toBeNull()
    }
  })

  it('shows the work, approach, and contact actions', () => {
    render(<App />)

    expect(screen.getByRole('link', { name: hero.primary.label })).toHaveAttribute(
      'href',
      hero.primary.href,
    )

    for (const item of workItems) {
      expect(screen.getByRole('heading', { name: item.title })).toBeInTheDocument()
    }

    for (const step of approachSteps) {
      expect(screen.getByRole('heading', { name: step.title })).toBeInTheDocument()
    }

    expect(screen.getByRole('button', { name: 'Send message' })).toBeInTheDocument()
  })
})
