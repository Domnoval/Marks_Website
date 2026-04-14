import { useState } from 'react'
import CtaButton from './CtaButton.jsx'
import { location, contact } from '../content/site.js'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const onSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="relative py-28 md:py-36">
      <div className="mx-auto grid w-full max-w-[1200px] grid-cols-1 gap-16 px-6 md:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
        <div className="reveal">
          <p className="font-sans text-[0.7rem] font-light uppercase tracking-[0.45em] text-gold-light">
            — Begin a conversation
          </p>
          <h2 className="mt-6 font-serif text-[clamp(2rem,4.5vw,3.4rem)] font-light leading-[1.05] text-cream">
            Tell us who
            <br />
            is coming.
          </h2>
          <p className="mt-6 max-w-md font-serif text-[1.15rem] leading-[1.6] text-cream-dim">
            A sentence or two is enough. We'll reply within a business day to schedule a short call and send a draft of
            what your week could look like.
          </p>

          <dl className="mt-12 space-y-5 font-sans text-[0.75rem] font-light uppercase tracking-[0.3em] text-cream-dim">
            <div>
              <dt className="text-cream-muted">Address</dt>
              <dd className="mt-1 text-cream">{location.cityState}</dd>
            </div>
            <div>
              <dt className="text-cream-muted">Enquiries</dt>
              <dd className="mt-1 text-cream normal-case tracking-normal">{contact.email}</dd>
            </div>
          </dl>
        </div>

        <form
          onSubmit={onSubmit}
          className="reveal reveal-delay-1 relative border border-gold-dim/70 bg-ink-2/60 p-8 md:p-12"
        >
          {sent ? (
            <div className="flex min-h-[360px] flex-col items-center justify-center text-center">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-gold">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  className="text-gold-light"
                  aria-hidden="true"
                >
                  <path d="M4 11 L9 16 L18 6" />
                </svg>
              </div>
              <h3 className="font-serif text-3xl text-cream">Received.</h3>
              <p className="mt-4 max-w-sm font-serif text-[1.05rem] text-cream-dim">
                Thank you. A member of our team will be in touch within one business day.
              </p>
            </div>
          ) : (
            <>
              <Field label="Your name" name="name" value={form.name} onChange={onChange} required autoComplete="name" />
              <Field
                label="Email"
                name="email"
                type="email"
                value={form.email}
                onChange={onChange}
                required
                autoComplete="email"
              />
              <Field
                label="What are you planning?"
                name="message"
                value={form.message}
                onChange={onChange}
                required
                multiline
              />

              <div className="mt-10 flex items-center justify-between gap-6">
                <p className="max-w-[240px] font-sans text-[0.68rem] font-light uppercase tracking-[0.28em] text-cream-muted">
                  We reply within one business day.
                </p>
                <CtaButton as="button">Send enquiry</CtaButton>
              </div>
            </>
          )}
        </form>
      </div>
    </section>
  )
}

function Field({ label, name, value, onChange, type = 'text', multiline = false, ...rest }) {
  const shared =
    'peer w-full border-0 border-b border-gold-dim bg-transparent pb-3 pt-6 ' +
    'font-serif text-lg text-cream placeholder-transparent ' +
    'transition-colors duration-300 focus:border-gold focus:outline-none'
  return (
    <div className="relative mb-2">
      {multiline ? (
        <textarea
          id={name}
          name={name}
          rows={4}
          placeholder={label}
          value={value}
          onChange={onChange}
          className={shared + ' resize-none'}
          {...rest}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          placeholder={label}
          value={value}
          onChange={onChange}
          className={shared}
          {...rest}
        />
      )}
      <label
        htmlFor={name}
        className={
          'pointer-events-none absolute left-0 top-6 font-sans text-[0.72rem] font-light uppercase tracking-[0.3em] text-cream-muted ' +
          'transition-all duration-300 ' +
          'peer-focus:top-1 peer-focus:text-[0.6rem] peer-focus:text-gold-light ' +
          'peer-[&:not(:placeholder-shown)]:top-1 peer-[&:not(:placeholder-shown)]:text-[0.6rem] peer-[&:not(:placeholder-shown)]:text-gold-light'
        }
      >
        {label}
      </label>
    </div>
  )
}
