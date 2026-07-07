import { useEffect, useState } from 'react'

export function useScrollThreshold(threshold = 20) {
  const [hasPassedThreshold, setHasPassedThreshold] = useState(false)

  useEffect(() => {
    const updateScrollState = () => setHasPassedThreshold(window.scrollY > threshold)

    updateScrollState()
    window.addEventListener('scroll', updateScrollState)

    return () => window.removeEventListener('scroll', updateScrollState)
  }, [threshold])

  return hasPassedThreshold
}
