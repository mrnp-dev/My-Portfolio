import { useEffect, useRef } from 'react'
import { SectionHeading } from './SectionHeading'

const facts = [
  ['Currently', '4th Year, BSCS'],
  ['University', 'Pampanga State University'],
  ['Graduation', 'Expected Aug 2027'],
]

const aboutStories = [
  {
    imageLabel: 'Profile Image',
    text: (
      <p>
        "I'm Mark, a CS student based in <strong>San Fernando, Pampanga, Philippines</strong>. I build full-stack web
        applications, cross-platform mobile apps, and machine learning systems, often all three at once."
      </p>
    ),
  },
  {
    imageLabel: 'Client Work',
    reverse: true,
    text: (
      <p>
        "What sets me apart is that I've shipped <strong>real software for real clients</strong> while still in school.
        From a commercial Android gym management app to a tourism platform built in partnership with the{' '}
        <strong>Department of Tourism</strong>, my projects go beyond coursework."
      </p>
    ),
  },
  {
    imageLabel: 'Community Work',
    text: (
      <p>
        "Outside of code I volunteer with <strong>DEVCON Kids Pampanga</strong>, teaching robotics and programming to
        young learners because the best way to solidify what you know is to teach it."
      </p>
    ),
  },
]

export function AboutSection() {
  const timelineRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const timeline = timelineRef.current
    if (!timeline) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      {
        rootMargin: '0px 0px -12% 0px',
        threshold: 0.18,
      },
    )

    timeline.querySelectorAll('.about-scroll-item').forEach((item) => observer.observe(item))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about">
      <SectionHeading label="01 - About" />
      <div className="about-stories" ref={timelineRef}>
        <div className="about-timeline-stage">
          {aboutStories.map((story) => (
            <article
              className={story.reverse ? 'about-scroll-item reverse' : 'about-scroll-item'}
              key={story.imageLabel}
            >
              <div className="about-story-copy">{story.text}</div>
              <div className="about-story-visual" aria-hidden="true">
                <div className="photo-placeholder">{story.imageLabel}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
      <div className="about-facts reveal">
        {facts.map(([label, value]) => (
          <div className="fact" key={label}>
            <p className="fact-label">{label}</p>
            <p className="fact-value">{value}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
