import { brand } from '../content/site.js'

export default function Wordmark({ size = 'md', withDate = false, className = '' }) {
  const sizeClass = size === 'lg' ? 'text-2xl' : 'text-[1.35rem]'
  return (
    <a
      href="#top"
      className={`font-serif ${sizeClass} font-light uppercase tracking-[0.32em] text-gold-light ${className}`}
    >
      {brand.name}
      {withDate && (
        <span className="ml-2 hidden align-middle text-[0.55rem] tracking-[0.5em] text-cream-dim md:inline">
          {brand.established}
        </span>
      )}
    </a>
  )
}
