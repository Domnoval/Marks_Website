import { useState } from 'react'
import SectionHeader from './SectionHeader.jsx'

const items = [
  {
    q: 'How many guests can Lionsgate hold?',
    a: 'The property comfortably holds groups of 10 to 60 for meetings and meals, and up to 120 for an evening reception. Overnight stays are reserved for groups of 10 to 24 in the main residence.',
  },
  {
    q: "What's included in a day rate vs. an overnight stay?",
    a: 'A day rate covers exclusive use of the gardens, gathering rooms, and the main pavilion from 8am to 10pm, with staffing and a dedicated planner. Overnight stays add the eight principal bedrooms, breakfast, and full on-site concierge through check-out.',
  },
  {
    q: 'Can you handle food, drink, and dietary needs?',
    a: 'Yes. Our in-house culinary team composes seasonal menus with our Florida farm partners. We routinely host groups with strict vegan, kosher, halal, and allergen-sensitive requirements. Share what you need — we plan the rest.',
  },
  {
    q: 'How do we get there from Fort Lauderdale Airport?',
    a: 'Lionsgate sits ten minutes from the beach in Lazy Lake, inside Wilton Manors — about twenty minutes from FLL. We can arrange private transport from the airport or from any Greater Fort Lauderdale hotel for your arriving group.',
  },
  {
    q: 'Do you host private events, weddings, or brand shoots?',
    a: 'Corporate retreats and leadership offsites are our primary calling. We selectively host private dinners, creative residencies, and editorial shoots by referral. We do not currently host wedding receptions.',
  },
  {
    q: 'How far in advance should we book?',
    a: 'Most bookings close three to six months out, though we occasionally hold space for clients working on a tighter horizon. The best first step is a short call — we can usually tell you what is possible within a day.',
  },
]

export default function Faq() {
  const [open, setOpen] = useState(0)

  return (
    <section className="py-28 md:py-36">
      <div className="mx-auto w-full max-w-[880px] px-6 md:px-10">
        <SectionHeader eyebrow="— Practicalities" className="mb-16">
          Questions most planners ask first.
        </SectionHeader>

        <ul className="reveal reveal-delay-1 border-t border-gold-dim/70">
          {items.map((it, i) => {
            const isOpen = open === i
            const panelId = `faq-panel-${i}`
            const buttonId = `faq-button-${i}`
            return (
              <li key={it.q} className="border-b border-gold-dim/70">
                <button
                  id={buttonId}
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  className="flex w-full items-start justify-between gap-6 py-7 text-left transition-colors duration-500"
                >
                  <span className="font-serif text-[1.2rem] text-cream md:text-[1.35rem]">{it.q}</span>
                  <span
                    className={
                      'mt-2 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-gold text-gold-light transition-transform duration-500 ' +
                      (isOpen ? 'rotate-45' : '')
                    }
                    aria-hidden="true"
                  >
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M5 0v10M0 5h10" stroke="currentColor" strokeWidth="1" />
                    </svg>
                  </span>
                </button>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={
                    'grid overflow-hidden transition-[grid-template-rows,opacity] duration-500 ease-out ' +
                    (isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0')
                  }
                >
                  <div className="min-h-0">
                    <p className="pb-8 pr-10 font-serif text-[1.05rem] leading-[1.7] text-cream-dim">{it.a}</p>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
