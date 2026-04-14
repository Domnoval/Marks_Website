import CtaButton from './CtaButton.jsx'
import { location } from '../content/site.js'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-36 pb-28 md:pt-44 md:pb-32">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/3 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-gold/10 blur-[140px]" />
        <div className="absolute bottom-0 right-1/3 h-[320px] w-[320px] rounded-full bg-[#5a4a2a]/20 blur-[120px]" />
      </div>

      <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 items-center gap-16 px-6 md:px-10 lg:grid-cols-[1.15fr_1fr] lg:gap-20">
        <div>
          <p className="reveal mb-8 font-sans text-[0.7rem] font-light uppercase tracking-[0.45em] text-gold-light">
            <span className="mr-4 inline-block h-px w-8 translate-y-[-4px] bg-gold align-middle" />
            {location.full}
          </p>

          <h1 className="reveal reveal-delay-1 font-serif text-[clamp(2.8rem,6.5vw,5.4rem)] font-light leading-[1.02] tracking-[-0.01em] text-cream">
            A retreat where{' '}
            <span className="hidden md:inline">
              <br />
            </span>
            <span className="italic text-gold-light">the room</span> begins to listen.
          </h1>

          <p className="reveal reveal-delay-2 mt-8 max-w-xl font-serif text-xl leading-[1.55] text-cream-dim md:text-[1.35rem]">
            Lionsgate is a private, high-end venue for corporate retreats, leadership offsites, and gatherings that
            deserve a place with intention — fifteen curated acres, ten minutes from the ocean.
          </p>

          <div className="reveal reveal-delay-3 mt-12 flex flex-wrap items-center gap-6">
            <CtaButton>Shift Perspective</CtaButton>
            <a
              href="#journey"
              className="group font-sans text-[0.7rem] font-light uppercase tracking-[0.32em] text-cream-dim transition-colors hover:text-gold-light"
            >
              How a stay unfolds
              <span className="ml-2 inline-block transition-transform duration-500 group-hover:translate-x-1">→</span>
            </a>
          </div>

          <dl className="reveal reveal-delay-4 mt-16 grid max-w-md grid-cols-3 gap-6 border-t border-gold-dim pt-6">
            <div>
              <dt className="font-sans text-[0.6rem] uppercase tracking-[0.3em] text-cream-muted">Acres</dt>
              <dd className="mt-1 font-serif text-3xl text-gold-light">15</dd>
            </div>
            <div>
              <dt className="font-sans text-[0.6rem] uppercase tracking-[0.3em] text-cream-muted">Gathering rooms</dt>
              <dd className="mt-1 font-serif text-3xl text-gold-light">7</dd>
            </div>
            <div>
              <dt className="font-sans text-[0.6rem] uppercase tracking-[0.3em] text-cream-muted">Minutes from beach</dt>
              <dd className="mt-1 font-serif text-3xl text-gold-light">10</dd>
            </div>
          </dl>
        </div>

        <div className="reveal reveal-delay-2 relative mx-auto w-full max-w-[520px]">
          <ArchGraphic />
        </div>
      </div>
    </section>
  )
}

function ArchGraphic() {
  return (
    <div className="relative aspect-[4/5] w-full">
      <div className="absolute inset-0 rounded-t-full bg-gradient-to-b from-gold/10 via-transparent to-transparent" />
      <svg
        viewBox="0 0 400 500"
        className="absolute inset-0 h-full w-full"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.6"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="archGold" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#e4c97e" stopOpacity="0.9" />
            <stop offset="55%" stopColor="#c9a84c" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#c9a84c" stopOpacity="0.05" />
          </linearGradient>
          <linearGradient id="archFill" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#1a1610" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#0a0906" stopOpacity="1" />
          </linearGradient>
        </defs>

        <path d="M40 480 V200 A160 160 0 0 1 360 200 V480" stroke="url(#archGold)" strokeWidth="1.2" fill="url(#archFill)" />
        <path d="M80 480 V215 A120 120 0 0 1 320 215 V480" stroke="url(#archGold)" strokeWidth="0.9" />
        <path d="M120 480 V230 A80 80 0 0 1 280 230 V480" stroke="url(#archGold)" strokeWidth="0.7" />

        <line x1="140" x2="260" y1="340" y2="340" stroke="#e4c97e" strokeOpacity="0.35" />

        <circle cx="200" cy="295" r="22" stroke="#e4c97e" strokeOpacity="0.55" />
        <circle cx="200" cy="295" r="12" stroke="#e4c97e" strokeOpacity="0.8" />
        <circle cx="200" cy="295" r="3" fill="#e4c97e" stroke="none" />

        {[160, 200, 240].map((x) => (
          <line key={x} x1={x} x2={x} y1="360" y2="470" stroke="#c9a84c" strokeOpacity="0.18" />
        ))}

        <line x1="30" x2="370" y1="480" y2="480" stroke="#c9a84c" strokeOpacity="0.5" />
        <line x1="50" x2="350" y1="488" y2="488" stroke="#c9a84c" strokeOpacity="0.25" />
      </svg>

      <Tick className="left-0 top-0" />
      <Tick className="right-0 top-0 rotate-90" />
      <Tick className="bottom-0 left-0 -rotate-90" />
      <Tick className="bottom-0 right-0 rotate-180" />
    </div>
  )
}

function Tick({ className = '' }) {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 26 26"
      className={`absolute ${className}`}
      fill="none"
      stroke="#c9a84c"
      strokeOpacity="0.55"
      aria-hidden="true"
    >
      <path d="M0 1 H10 M1 0 V10" />
    </svg>
  )
}
