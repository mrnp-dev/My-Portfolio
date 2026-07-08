import { TypewriterRichText } from './TypewriterRichText'
import { useTypewriter } from '../hooks/useTypewriter'

const heroTitle = "Hi, I'm\nMark Rey Nino."
const heroIntroSegments = [
  { text: 'A ' },
  { text: '4th-year Computer Science student', strong: true },
  {
    text: ' at Pampanga State University, building full-stack web and mobile apps, training ML models, and turning real problems into ',
  },
  { text: 'working software', strong: true },
  { text: '.' },
]

const titleTypingSpeed = 48
const introTypingSpeed = 18
const heroIntroText = heroIntroSegments.map((segment) => segment.text).join('')
const typingStartDelay = 220

export function HeroSection() {
  const typedTitle = useTypewriter(heroTitle, { speed: titleTypingSpeed, startDelay: typingStartDelay })
  const introCharacterCount = useTypewriter(heroIntroText, {
    speed: introTypingSpeed,
    startDelay: typingStartDelay,
  }).characterCount
  const introLength = heroIntroText.length

  return (
    <section id="hero" className="hero-section">
      <p className="hero-eyebrow hero-enter hero-enter-1">Open to internships & freelance opportunities</p>
      <h1 className="hero-name hero-typewriter" aria-label={heroTitle.replace('\n', ' ')}>
        {typedTitle.text}
        {!typedTitle.done && <span className="typing-cursor hero-typing-cursor" aria-hidden="true" />}
      </h1>
      <p className="hero-tagline hero-typewriter" aria-label={heroIntroText}>
        <TypewriterRichText characterCount={introCharacterCount} segments={heroIntroSegments} showCursor={introCharacterCount < introLength} />
      </p>
      <div className="hero-cta hero-enter hero-enter-4">
        <a href="#projects" className="btn-primary">
          See my work <span aria-hidden="true" className="btn-arrow">↓</span>
        </a>
        <a href="#contact" className="btn-ghost">
          Get in touch
        </a>
      </div>
      <p className="scroll-hint hero-enter hero-enter-4">scroll</p>
    </section>
  )
}
