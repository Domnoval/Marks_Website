const marks = [
  { name: 'Halcyon Capital', style: 'font-serif tracking-[0.18em]' },
  { name: 'MOMENTUM / CO', style: 'font-sans tracking-[0.3em] font-light' },
  { name: 'Atelier Linde', style: 'font-serif italic tracking-[0.12em]' },
  { name: 'NORTH POLE CREATIVE', style: 'font-sans tracking-[0.28em] font-light' },
  { name: 'Maren & Rowe', style: 'font-serif tracking-[0.14em]' },
  { name: 'KINDRED LEADERSHIP', style: 'font-sans tracking-[0.3em] font-light' },
]

export default function SocialProof() {
  return (
    <section aria-labelledby="proof-label" className="border-y border-gold-dim/70 bg-ink-2/40">
      <div className="mx-auto w-full max-w-[1280px] px-6 py-14 md:px-10 md:py-16">
        <p
          id="proof-label"
          className="reveal text-center font-sans text-[0.6rem] font-light uppercase tracking-[0.45em] text-cream-muted"
        >
          Held for teams from
        </p>

        <ul
          role="list"
          className="reveal reveal-delay-1 mt-10 grid grid-cols-2 items-center gap-x-6 gap-y-8 sm:grid-cols-3 lg:grid-cols-6"
        >
          {marks.map((m) => (
            <li
              key={m.name}
              className={`text-center text-cream-dim/80 text-[0.95rem] md:text-base uppercase transition-colors duration-500 hover:text-gold-light ${m.style}`}
            >
              {m.name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
