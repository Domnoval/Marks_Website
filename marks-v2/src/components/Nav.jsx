import { useEffect, useState } from 'react'
import Wordmark from './Wordmark.jsx'

const links = [
  { href: '#essence', label: 'Essence' },
  { href: '#offerings', label: 'Offerings' },
  { href: '#journey', label: 'Journey' },
  { href: '#voices', label: 'Voices' },
  { href: '#contact', label: 'Enquire' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const next = window.scrollY > 40
      setScrolled((prev) => (prev === next ? prev : next))
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={
        'fixed inset-x-0 top-0 z-50 transition-[background,backdrop-filter,border-color,padding] duration-500 ease-out ' +
        (scrolled
          ? 'border-b border-gold-dim bg-ink/80 py-4 backdrop-blur-md'
          : 'border-b border-transparent py-6')
      }
    >
      <div className="mx-auto flex w-full max-w-[1280px] items-center justify-between px-6 md:px-10">
        <Wordmark size="md" withDate />

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-10">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="font-sans text-[0.7rem] font-light uppercase tracking-[0.3em] text-cream-dim transition-colors duration-300 hover:text-gold-light"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-nav"
          className="relative h-8 w-8 md:hidden"
        >
          <span
            className={
              'absolute left-1 right-1 top-3 block h-px bg-gold-light transition-transform duration-300 ' +
              (open ? 'translate-y-[3px] rotate-45' : '')
            }
          />
          <span
            className={
              'absolute left-1 right-1 top-4 block h-px bg-gold-light transition-transform duration-300 ' +
              (open ? '-translate-y-[1px] -rotate-45' : '')
            }
          />
        </button>
      </div>

      <div
        id="mobile-nav"
        aria-hidden={!open}
        className={
          'overflow-hidden transition-[max-height,opacity] duration-500 ease-out md:hidden ' +
          (open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0')
        }
      >
        <nav aria-label="Primary mobile" className="border-t border-gold-dim bg-ink/95 px-6 py-8 backdrop-blur-md">
          <ul className="flex flex-col gap-5">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  tabIndex={open ? 0 : -1}
                  className="font-serif text-xl tracking-wide text-cream hover:text-gold-light"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
