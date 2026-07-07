import { useEffect } from 'react'

const REVEAL_OPTIONS: IntersectionObserverInit = {
  threshold: 0.08,
}

export function useRevealOnScroll(selector = '.reveal', visibleClassName = 'visible') {
  useEffect(() => {
    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return

        entry.target.classList.add(visibleClassName)
        currentObserver.unobserve(entry.target)
      })
    }, REVEAL_OPTIONS)

    document.querySelectorAll(selector).forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [selector, visibleClassName])
}
