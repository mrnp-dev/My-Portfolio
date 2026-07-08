import { useEffect, useMemo, useState } from 'react'

type UseTypewriterOptions = {
  startDelay?: number
  speed?: number
}

export function useTypewriter(text: string, { startDelay = 0, speed = 32 }: UseTypewriterOptions = {}) {
  const [characterCount, setCharacterCount] = useState(0)
  const prefersReducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    if (prefersReducedMotion) return undefined

    const timers: number[] = []

    timers.push(window.setTimeout(() => setCharacterCount(0), 0))
    timers.push(
      window.setTimeout(() => {
        for (let index = 1; index <= text.length; index += 1) {
          timers.push(window.setTimeout(() => setCharacterCount(index), index * speed))
        }
      }, startDelay),
    )

    return () => timers.forEach((timer) => window.clearTimeout(timer))
  }, [prefersReducedMotion, speed, startDelay, text])

  const visibleCharacterCount = prefersReducedMotion ? text.length : characterCount

  return {
    characterCount: visibleCharacterCount,
    done: visibleCharacterCount >= text.length,
    text: text.slice(0, visibleCharacterCount),
  }
}

function usePrefersReducedMotion() {
  const mediaQuery = useMemo(() => window.matchMedia('(prefers-reduced-motion: reduce)'), [])
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(mediaQuery.matches)

  useEffect(() => {
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches)

    mediaQuery.addEventListener('change', updatePreference)
    return () => mediaQuery.removeEventListener('change', updatePreference)
  }, [mediaQuery])

  return prefersReducedMotion
}
