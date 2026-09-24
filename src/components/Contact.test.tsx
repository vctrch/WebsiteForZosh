import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Contact } from './Contact.tsx'

describe('Contact', () => {
  it('shows a validation message for each empty field', async () => {
    const user = userEvent.setup()
    render(<Contact />)

    await user.click(screen.getByRole('button', { name: 'Send message' }))

    expect(screen.getAllByRole('alert').map((alert) => alert.textContent)).toEqual([
      'Enter your name.',
      'Enter a valid email address.',
      'Write at least 10 characters.',
    ])
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
  })

  it('confirms a valid note and clears that confirmation when the note changes', async () => {
    const user = userEvent.setup()
    render(<Contact />)

    await user.type(screen.getByLabelText('Name'), 'Ada')
    await user.type(screen.getByLabelText('Email'), 'ada@example.com')
    await user.type(screen.getByLabelText('Message'), 'Hello from the test suite.')
    await user.click(screen.getByRole('button', { name: 'Send message' }))

    expect(screen.getByRole('status')).toHaveTextContent(
      'Thanks, Ada. This note stays in the browser for now.',
    )
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()

    await user.type(screen.getByLabelText('Name'), ' Lovelace')
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
  })
})
