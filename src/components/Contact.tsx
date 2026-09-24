import { useState, type ChangeEvent, type FormEvent } from 'react'
import { validateContact, type ContactErrors, type ContactValues } from '../lib/contact.ts'

const emptyValues: ContactValues = {
  name: '',
  email: '',
  message: '',
}

export function Contact() {
  const [values, setValues] = useState<ContactValues>(emptyValues)
  const [errors, setErrors] = useState<ContactErrors>({})
  const [submitted, setSubmitted] = useState(false)

  function updateField(
    field: keyof ContactValues,
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setValues((current) => ({ ...current, [field]: event.target.value }))
    setSubmitted(false)
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const nextErrors = validateContact(values)
    setErrors(nextErrors)
    setSubmitted(Object.keys(nextErrors).length === 0)
  }

  return (
    <section className="section" id="contact" aria-labelledby="contact-title">
      <div className="wrap contact-grid">
        <div className="section-heading">
          <p className="eyebrow">Contact</p>
          <h2 id="contact-title">Say hello</h2>
          <p className="lede">
            Send a note. This page keeps it in the browser.
          </p>
        </div>
        <form className="contact-form" noValidate onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="contact-name">Name</label>
            <input
              id="contact-name"
              name="name"
              autoComplete="name"
              value={values.name}
              aria-invalid={errors.name ? true : undefined}
              aria-describedby={errors.name ? 'name-error' : undefined}
              onChange={(event) => updateField('name', event)}
            />
            {errors.name ? (
              <p id="name-error" className="field-error" role="alert">
                {errors.name}
              </p>
            ) : null}
          </div>
          <div className="field">
            <label htmlFor="contact-email">Email</label>
            <input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              value={values.email}
              aria-invalid={errors.email ? true : undefined}
              aria-describedby={errors.email ? 'email-error' : undefined}
              onChange={(event) => updateField('email', event)}
            />
            {errors.email ? (
              <p id="email-error" className="field-error" role="alert">
                {errors.email}
              </p>
            ) : null}
          </div>
          <div className="field">
            <label htmlFor="contact-message">Message</label>
            <textarea
              id="contact-message"
              name="message"
              rows={5}
              value={values.message}
              aria-invalid={errors.message ? true : undefined}
              aria-describedby={errors.message ? 'message-error' : undefined}
              onChange={(event) => updateField('message', event)}
            />
            {errors.message ? (
              <p id="message-error" className="field-error" role="alert">
                {errors.message}
              </p>
            ) : null}
          </div>
          <button className="button button-primary" type="submit">
            Send message
          </button>
          {submitted ? (
            <p className="form-status" role="status">
              Thanks, {values.name.trim()}. This note stays in the browser for now.
            </p>
          ) : null}
        </form>
      </div>
    </section>
  )
}
