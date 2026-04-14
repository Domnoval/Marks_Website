import SectionHeader from './SectionHeader.jsx'

const features = [
  {
    title: 'Privacy, uncompromised',
    body: 'Fifteen walled acres held exclusively for your group. No check-in desk, no overlap, no passersby.',
    icon: IconGate,
  },
  {
    title: 'A space that paces you',
    body: 'Rooms tuned for arrival, for deep work, and for quiet. The architecture does the work of slowing a week down.',
    icon: IconBreath,
  },
  {
    title: 'Seven distinct settings',
    body: 'A Moorish bistro, an art gallery, an open-air pavilion, a pool terrace, a library. Move the day, not the furniture.',
    icon: IconRooms,
  },
  {
    title: 'Catering, curated',
    body: 'Seasonal menus from local stewards of the Florida coast. From coffee rituals to a long-table supper under the banyans.',
    icon: IconPlate,
  },
  {
    title: 'Ten minutes from the ocean',
    body: 'Between Wilton Manors and the Atlantic. Close enough for a sunrise walk, far enough to feel held.',
    icon: IconCompass,
  },
  {
    title: 'Concierge with taste',
    body: 'Transport, florals, music, moderators, and surprises. One planner, every detail, a single invoice.',
    icon: IconKey,
  },
]

export default function Features() {
  return (
    <section id="offerings" className="py-28 md:py-36">
      <div className="mx-auto w-full max-w-[1280px] px-6 md:px-10">
        <SectionHeader eyebrow="— What a team carries home">
          We don't sell a venue. We sell the conditions in which
          <span className="italic text-gold-light"> something meaningful </span>
          can happen.
        </SectionHeader>

        <ul className="mt-20 grid grid-cols-1 gap-px bg-gold-dim/60 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <li
              key={feature.title}
              className={`reveal reveal-delay-${(i % 4) + 1} group relative bg-ink p-10 transition-colors duration-700 hover:bg-ink-2`}
            >
              <div className="mb-8 inline-flex h-12 w-12 items-center justify-center text-gold-light transition-transform duration-500 group-hover:-translate-y-0.5">
                <feature.icon />
              </div>
              <h3 className="font-serif text-2xl font-normal leading-snug text-cream">{feature.title}</h3>
              <p className="mt-4 font-sans text-[0.95rem] leading-[1.7] font-light text-cream-dim">{feature.body}</p>
              <span className="absolute bottom-10 left-10 block h-px w-6 origin-left scale-x-50 bg-gold transition-transform duration-700 group-hover:scale-x-[4]" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

const strokeProps = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.1,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

function IconGate() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" {...strokeProps}>
      <path d="M6 38 V18 A16 16 0 0 1 38 18 V38" />
      <path d="M14 38 V22 A8 8 0 0 1 30 22 V38" />
      <line x1="22" x2="22" y1="12" y2="38" />
    </svg>
  )
}
function IconBreath() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" {...strokeProps}>
      <circle cx="22" cy="22" r="14" />
      <path d="M8 22 Q22 8 36 22 Q22 36 8 22" />
    </svg>
  )
}
function IconRooms() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" {...strokeProps}>
      <rect x="6" y="10" width="12" height="24" />
      <rect x="20" y="16" width="8" height="18" />
      <rect x="30" y="6" width="8" height="28" />
    </svg>
  )
}
function IconPlate() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" {...strokeProps}>
      <circle cx="22" cy="22" r="14" />
      <circle cx="22" cy="22" r="8" />
      <circle cx="22" cy="22" r="2" />
    </svg>
  )
}
function IconCompass() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" {...strokeProps}>
      <circle cx="22" cy="22" r="15" />
      <path d="M22 8 L26 22 L22 36 L18 22 Z" />
    </svg>
  )
}
function IconKey() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" {...strokeProps}>
      <circle cx="14" cy="22" r="7" />
      <path d="M21 22 H38 M34 22 V28 M30 22 V26" />
    </svg>
  )
}
