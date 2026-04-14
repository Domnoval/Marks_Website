import { useEffect } from 'react'

// Observes `.reveal` nodes present at mount and adds `.is-visible` once
// they enter the viewport. Nodes added after first paint are NOT
// observed — all current sections render eagerly so that's fine.
export default function useReveal() {
  useEffect(() => {
    const nodes = document.querySelectorAll('.reveal')
    if (!nodes.length) return

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            io.unobserve(entry.target)
          }
        }
      },
      { threshold: 0, rootMargin: '0px 0px -60px 0px' },
    )

    nodes.forEach((n) => io.observe(n))
    return () => io.disconnect()
  }, [])
}
