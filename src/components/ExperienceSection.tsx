import type { Experience } from '../data/portfolio'
import { SectionHeading } from './SectionHeading'

type ExperienceSectionProps = {
  experiences: Experience[]
}

export function ExperienceSection({ experiences }: ExperienceSectionProps) {
  return (
    <section id="experience">
      <SectionHeading
        label="04 - Experience"
        title="Where I've been."
        subtitle="Volunteer roles, community work, and organizations that shaped how I build and teach."
      />
      <div className="timeline">
        {experiences.map((experience) => (
          <ExperienceItem experience={experience} key={`${experience.date}-${experience.role}`} />
        ))}
      </div>
    </section>
  )
}

function ExperienceItem({ experience }: { experience: Experience }) {
  return (
    <div className="timeline-item reveal">
      <p className="timeline-date">{experience.date}</p>
      <div>
        <p className="timeline-role">{experience.role}</p>
        <p className="timeline-org">{experience.organization}</p>
        <p className="timeline-desc">{experience.description}</p>
      </div>
    </div>
  )
}
