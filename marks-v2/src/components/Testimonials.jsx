import SectionHeader from './SectionHeader.jsx'

const quotes = [
  {
    body: 'We brought twenty-two people down for a three-day reset after closing a hard fund. By the second afternoon, the arguments we had been carrying for months just quietly finished themselves. Lionsgate did something no conference room ever has.',
    name: 'Isabel Vega',
    title: 'Managing Partner, Halcyon Capital',
    initials: 'IV',
  },
  {
    body: 'I have held offsites in Sonoma, in Tulum, in the Berkshires. This is the only one where the junior designers came back and said, unprompted, "can we do that every year." The rooms hold you. That is the only way I can describe it.',
    name: 'Julian Okafor',
    title: 'Creative Director, Atelier Linde',
    initials: 'JO',
  },
  {
    body: 'We came to make a product decision. We left with a vocabulary. Mark and the team understood our work better than the brief we sent them, and the property rewarded the attention we brought to it. Lazy Lake is now on our calendar twice a year.',
    name: 'Priya Anand',
    title: 'Chief of Staff, Momentum / Co',
    initials: 'PA',
  },
]

export default function Testimonials() {
  return (
    <section id="voices" className="border-y border-gold-dim/70 bg-ink-2/60 py-28 md:py-36">
      <div className="mx-auto w-full max-w-[1280px] px-6 md:px-10">
        <SectionHeader eyebrow="— In their own words" className="mb-20">
          Voices from the long table.
        </SectionHeader>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {quotes.map((q, i) => (
            <figure
              key={q.name}
              className={`reveal reveal-delay-${i + 1} group relative flex h-full flex-col border border-gold-dim/70 bg-ink p-8 transition-colors duration-500 hover:border-gold md:p-10`}
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 32 32"
                className="mb-6 text-gold-light"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M4 20 Q4 10 14 8 V12 Q8 13 8 18 H14 V26 H4 Z M18 20 Q18 10 28 8 V12 Q22 13 22 18 H28 V26 H18 Z" />
              </svg>
              <blockquote className="flex-1 font-serif text-lg leading-[1.6] text-cream md:text-[1.2rem]">
                {q.body}
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-4 border-t border-gold-dim/50 pt-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-gold font-serif text-sm tracking-wider text-gold-light">
                  {q.initials}
                </span>
                <div>
                  <div className="font-serif text-base text-cream">{q.name}</div>
                  <div className="font-sans text-[0.68rem] font-light uppercase tracking-[0.28em] text-cream-muted">
                    {q.title}
                  </div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
