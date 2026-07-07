import type { SkillGroup } from '../data/portfolio'
import { SectionHeading } from './SectionHeading'

type SkillsSectionProps = {
  skillGroups: SkillGroup[]
}

export function SkillsSection({ skillGroups }: SkillsSectionProps) {
  return (
    <section id="skills">
      <SectionHeading
        label="02 - Skills"
        title="What I work with."
        subtitle="Languages, frameworks, tools, and platforms I'm comfortable shipping with."
      />
      <div className="skills-grid reveal">
        {skillGroups.map((group) => (
          <SkillCategory group={group} key={group.label} />
        ))}
      </div>
    </section>
  )
}

function SkillCategory({ group }: { group: SkillGroup }) {
  const tagClassName = group.variant === 'soft' ? 'tag soft' : 'tag'

  return (
    <div className="skill-category">
      <p className="skill-cat-label">{group.label}</p>
      <div className="skill-tags">
        {group.skills.map((skill) => (
          <span className={tagClassName} key={skill}>
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}
