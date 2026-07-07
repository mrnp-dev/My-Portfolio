import { useEffect, useState } from 'react'

const ACTIVE_SECTION_OPTIONS: IntersectionObserverInit = {
  rootMargin: '-40% 0px -55% 0px',
}

export function useActiveSection(sectionSelector = 'section[id]', initialSection = 'hero') {
  const [activeSection, setActiveSection] = useState(initialSection)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const visibleSection = entries.find((entry) => entry.isIntersecting)

      if (visibleSection) {
        setActiveSection(visibleSection.target.id)
      }
    }, ACTIVE_SECTION_OPTIONS)

    document.querySelectorAll(sectionSelector).forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [sectionSelector])

  return activeSection
}
