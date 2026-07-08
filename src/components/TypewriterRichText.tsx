import type { ReactNode } from 'react'

type TypewriterSegment = {
  text: string
  strong?: boolean
}

type TypewriterRichTextProps = {
  characterCount: number
  segments: TypewriterSegment[]
  showCursor?: boolean
}

export function TypewriterRichText({ characterCount, segments, showCursor = true }: TypewriterRichTextProps) {
  const { nodes } = segments.reduce(
    (accumulator, segment) => {
      const visibleCharacterCount = Math.max(0, accumulator.remainingCharacters)
      const visibleText = segment.text.slice(0, visibleCharacterCount)

      return {
        remainingCharacters: accumulator.remainingCharacters - segment.text.length,
        nodes: visibleText
          ? [
              ...accumulator.nodes,
              segment.strong ? <strong key={segment.text}>{visibleText}</strong> : visibleText,
            ]
          : accumulator.nodes,
      }
    },
    { remainingCharacters: characterCount, nodes: [] as ReactNode[] },
  )

  return (
    <>
      {nodes}
      {showCursor && <span className="typing-cursor" aria-hidden="true" />}
    </>
  )
}
