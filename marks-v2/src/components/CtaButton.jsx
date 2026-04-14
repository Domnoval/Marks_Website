import { brand } from '../content/site.js'

export default function CtaButton({
  children = brand.cta,
  href = '#contact',
  as = 'a',
  className = '',
  ...rest
}) {
  const classes =
    'group relative inline-flex items-center gap-3 px-10 py-4 ' +
    'font-sans text-[0.72rem] font-light uppercase tracking-[0.32em] ' +
    'border border-gold bg-gold text-ink ' +
    'transition-colors duration-500 ease-out ' +
    'hover:bg-gold-light hover:border-gold-light ' +
    'focus:outline-none focus-visible:ring-1 focus-visible:ring-gold-light focus-visible:ring-offset-2 focus-visible:ring-offset-ink ' +
    className

  const content = (
    <>
      <span>{children}</span>
      <svg
        width="22"
        height="8"
        viewBox="0 0 22 8"
        fill="none"
        className="transition-transform duration-500 ease-out group-hover:translate-x-1.5"
        aria-hidden="true"
      >
        <path d="M0 4h20M16 1l4 3-4 3" stroke="currentColor" strokeWidth="1" strokeLinecap="square" />
      </svg>
    </>
  )

  if (as === 'button') {
    return (
      <button type="submit" className={classes} {...rest}>
        {content}
      </button>
    )
  }

  return (
    <a href={href} className={classes} {...rest}>
      {content}
    </a>
  )
}
