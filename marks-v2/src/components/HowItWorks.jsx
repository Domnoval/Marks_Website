import SectionHeader from './SectionHeader.jsx'

const steps = [
  {
    n: '01',
    title: 'The conversation',
    body: 'We start with a 30-minute call. Who is coming, what the week is for, what the team needs to carry out. No forms, no templates.',
  },
  {
    n: '02',
    title: 'The composition',
    body: 'We compose a draft itinerary — rooms, meals, cadence, surprises — and send it with a single price. Adjust until it feels right.',
  },
  {
    n: '03',
    title: 'The arrival',
    body: "On the day, the gate opens, the house is yours, and your planner is on-site. Your only job is to notice what the room is doing.",
  },
]

export default function HowItWorks() {
  return (
    <section id="journey" className="relative py-28 md:py-36">
      <div className="mx-auto w-full max-w-[1100px] px-6 md:px-10">
        <SectionHeader eyebrow="— Three steps to a week that stays with you" className="mb-20">
          The shape of a Lionsgate booking.
        </SectionHeader>

        <ol className="relative grid grid-cols-1 gap-14 md:grid-cols-3 md:gap-0">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute left-0 right-0 top-16 hidden h-px bg-gradient-to-r from-transparent via-gold to-transparent md:block"
          />

          {steps.map((s, i) => (
            <li
              key={s.n}
              className={`reveal reveal-delay-${i + 1} relative flex flex-col items-center px-6 text-center md:px-8`}
            >
              <div className="relative z-10 mb-8 flex h-16 w-16 items-center justify-center rounded-full border border-gold-dim bg-ink">
                <span className="font-serif text-xl italic text-gold-light">{s.n}</span>
              </div>
              <h3 className="font-serif text-2xl font-normal text-cream">{s.title}</h3>
              <p className="mt-4 max-w-xs font-sans text-[0.95rem] leading-[1.7] font-light text-cream-dim">
                {s.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
