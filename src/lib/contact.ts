export type ContactValues = {
  name: string
  email: string
  message: string
}

export type ContactErrors = Partial<Record<keyof ContactValues, string>>

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function validateContact(values: ContactValues): ContactErrors {
  const errors: ContactErrors = {}
  const name = values.name.trim()
  const email = values.email.trim()
  const message = values.message.trim()

  if (name.length === 0) {
    errors.name = 'Enter your name.'
  }

  if (!EMAIL_PATTERN.test(email)) {
    errors.email = 'Enter a valid email address.'
  }

  if (message.length < 10) {
    errors.message = 'Write at least 10 characters.'
  }

  return errors
}
