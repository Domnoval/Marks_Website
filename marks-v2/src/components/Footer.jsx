import CtaButton from './CtaButton.jsx'
import Wordmark from './Wordmark.jsx'
import { brand, location } from '../content/site.js'

const YEAR = new Date().getFullYear()

const columns = [
  {
    title: 'Property',
    links: [
      { label: 'Essence', href: '#top' },
      { label: 'Offerings', href: '#offerings' },
      { label: 'Journey', href: '#journey' },
      { label: 'Voices', href: '#voices' },
    ],
  },
  {
    title: 'Visit',
    links: [
      { label: 'Lazy Lake, FL', href: '#contact' },
      { label: 'Getting here', href: '#journey' },
      { label: 'Overnight stays', href: '#offerings' },
      { label: 'Catering', href: '#offerings' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Mark', href: '#voices' },
      { label: 'Press kit', href: '#contact' },
      { label: 'Privacy', href: '#contact' },
      { label: 'Terms', href: '#contact' },
    ],
  },
]

const socials = [
  {
    label: 'Instagram',
    href: '#',
    path: 'M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 6a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm5.5-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2z',
  },
  {
    label: 'Vimeo',
    href: '#',
    path: 'M22 7.5c0 2.5-1.5 5.5-4 9-2.5 3.4-4.5 5-6 5-1.5 0-2.5-1.5-3-4.5-.5-2-.8-4-1-6-.3-1.5-.7-2-1.3-2-.2 0-.7.2-1.5.7L3 8c1-.9 2-2 3-3 1.5-1 2.5-1.5 3.5-1.5 1.5-.2 2.5 1 3 3.5.5 2.5.8 4 1 4.5.5 1.5 1 2 1.5 2 .5 0 1-.3 2-1.2s1.5-1.5 1.5-2.2c0-.9-.5-1.2-1.5-1.2-.5 0-1 .2-1.5.4.8-3 2.5-4.5 5-4.3 2 .1 3 1.5 3 4z',
  },
  {
    label: 'LinkedIn',
    href: '#',
    path: 'M4 4h4v16H4zm2-2a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm6 6h3.5v2.2h.1c.5-.9 1.8-2.2 3.8-2.2 4 0 4.6 2.6 4.6 6V20H20v-5.4c0-1.3 0-3-1.8-3s-2.2 1.4-2.2 2.9V20H12z',
  },
]

export default function Footer() {
  return (
    <footer className="relative">
      <div className="border-y border-gold-dim/70 bg-ink-2/60">
        <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-8 px-6 py-20 text-center md:flex-row md:justify-between md:text-left md:px-10">
          <div className="max-w-xl">
            <h2 className="font-serif text-[clamp(1.8rem,3.6vw,2.6rem)] font-light leading-[1.1] text-cream">
              The week your team has been carrying.
              <span className="italic text-gold-light"> Let it happen here.</span>
            </h2>
          </div>
          <CtaButton>{brand.cta}</CtaButton>
        </div>
      </div>

      <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 gap-12 px-6 py-20 md:grid-cols-[1.4fr_2fr] md:px-10">
        <div>
          <Wordmark size="lg" />
          <p className="mt-6 max-w-xs font-serif text-[1.05rem] leading-[1.6] text-cream-dim">
            A private retreat property in {location.short}, held for gatherings that deserve intention.
          </p>
          <ul role="list" className="mt-8 flex gap-3">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center border border-gold-dim text-cream-dim transition-all duration-500 hover:border-gold hover:text-gold-light"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d={s.path} />
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-2 gap-10 md:grid-cols-3">
          {columns.map((c) => (
            <div key={c.title}>
              <h4 className="font-sans text-[0.65rem] font-light uppercase tracking-[0.35em] text-gold-light">
                {c.title}
              </h4>
              <ul className="mt-5 space-y-3">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="font-serif text-[1.05rem] text-cream-dim transition-colors duration-300 hover:text-gold-light"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-gold-dim/70">
        <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center justify-between gap-3 px-6 py-8 md:flex-row md:px-10">
          <p className="font-sans text-[0.65rem] font-light uppercase tracking-[0.28em] text-cream-muted">
            © {YEAR} Lionsgate Collaborative Retreats. All rights reserved.
          </p>
          <p className="font-serif text-[0.95rem] italic text-cream-muted">{brand.tagline}</p>
        </div>
      </div>
    </footer>
  )
}
