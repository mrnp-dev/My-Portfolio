import { useEffect, useRef } from 'react'
import { SectionHeading } from './SectionHeading'

import academicImage from '../assets/about/024015a7-b741-4c3a-8f10-7c31655a9d4d.jpeg'
import fullstackImage from '../assets/about/0b1ca539-6e55-49f8-a9f7-5e52ea1833c4.jpeg'
import communityImage from '../assets/about/Screenshot from 2026-07-08 23-06-40.png'

const facts = [
  ['Currently', '4th Year, BSCS'],
  ['University', 'Pampanga State University'],
  ['Graduation', 'Expected Aug 2027'],
]

const aboutStories = [
  {
    imageLabel: 'Academic & Projects',
    imageSrc: academicImage,
    text: (
      <p>
        I'm a Computer Science student at <strong>Pampanga State University</strong> passionate about building web and mobile applications. I enjoy working on projects that solve meaningful problems in my community.
      </p>
    ),
  },
  {
    imageLabel: 'Full-Stack Scope',
    imageSrc: fullstackImage,
    reverse: true,
    text: (
      <p>
        I work across the full stack, from <strong>Flutter</strong> and <strong>PHP</strong> to <strong>PostgreSQL</strong> and <strong>Docker</strong>. I love exploring different technologies and finding the right tools for each project.
      </p>
    ),
  },
  {
    imageLabel: 'Community & Outreach',
    imageSrc: communityImage,
    text: (
      <p>
        Outside of coding, I volunteer with <strong>DEVCON Kids Pampanga</strong> where I help facilitate code camps teaching robotics and programming to young learners using <strong>Micro:bit</strong>.
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
                <img
                  src={story.imageSrc}
                  alt={story.imageLabel}
                  className="about-story-image"
                />
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
