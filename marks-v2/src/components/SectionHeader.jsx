export default function SectionHeader({ eyebrow, children, align = 'center', className = '' }) {
  const alignment = align === 'left' ? 'text-left' : 'text-center mx-auto'
  return (
    <header className={`reveal max-w-2xl ${alignment} ${className}`}>
      <p className="font-sans text-[0.7rem] font-light uppercase tracking-[0.45em] text-gold-light">
        {eyebrow}
      </p>
      <h2 className="mt-6 font-serif text-[clamp(2rem,4.5vw,3.4rem)] font-light leading-[1.1] text-cream">
        {children}
      </h2>
    </header>
  )
}
