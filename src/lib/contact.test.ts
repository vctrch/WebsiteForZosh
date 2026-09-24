import { describe, expect, it } from 'vitest'
import { validateContact, type ContactValues } from './contact.ts'

const valid: ContactValues = {
  name: 'Ada Lovelace',
  email: 'ada@example.com',
  message: 'Hello from the test suite.',
}

describe('validateContact', () => {
  it('accepts a complete note', () => {
    expect(validateContact(valid)).toEqual({})
  })

  it('requires a name', () => {
    expect(validateContact({ ...valid, name: '   ' }).name).toBe('Enter your name.')
  })

  it('requires a real email address', () => {
    expect(validateContact({ ...valid, email: 'ada@example' }).email).toBe(
      'Enter a valid email address.',
    )
  })

  it('requires a message of at least 10 characters', () => {
    expect(validateContact({ ...valid, message: 'too short' }).message).toBe(
      'Write at least 10 characters.',
    )
  })
})
