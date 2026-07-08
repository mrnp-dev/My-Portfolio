import type { SkillGroup } from '../data/portfolio'
import { SectionHeading } from './SectionHeading'

type SkillsSectionProps = {
  skillGroups: SkillGroup[]
}

function getSkillIcons(skill: string): string[] {
  const s = skill.toLowerCase().trim()
  if (s === 'python') return ['devicon-python-plain']
  if (s === 'javascript') return ['devicon-javascript-plain']
  if (s === 'dart') return ['devicon-dart-plain']
  if (s === 'php') return ['devicon-php-plain']
  if (s === 'sql') return ['devicon-mysql-plain']
  if (s === 'c++') return ['devicon-cplusplus-plain']
  if (s === 'java') return ['devicon-java-plain']
  if (s === 'html / css') return ['devicon-html5-plain', 'devicon-css3-plain']
  
  if (s === 'flutter') return ['devicon-flutter-plain']
  if (s === 'fastapi') return ['devicon-fastapi-plain']
  if (s === 'tailwind css') return ['devicon-tailwindcss-original']
  if (s === 'scikit-learn') return ['devicon-python-plain'] // fallback to python for scikit-learn
  
  if (s === 'mysql') return ['devicon-mysql-plain']
  if (s === 'postgresql') return ['devicon-postgresql-plain']
  if (s === 'sqlite') return ['devicon-sqlite-plain']
  if (s === 'firebase') return ['devicon-firebase-plain']
  if (s === 'supabase') return ['devicon-supabase-plain']
  if (s === 'git') return ['devicon-git-plain']
  if (s === 'docker') return ['devicon-docker-plain']
  if (s === 'linux') return ['devicon-linux-plain']
  if (s === 'vs code') return ['devicon-vscode-plain']
  
  return []
}

function getRepeatedSkills(skills: string[]): string[] {
  if (skills.length === 0) return []
  let result = [...skills]
  while (result.length < 12) {
    result = [...result, ...skills]
  }
  return result
}

export function SkillsSection({ skillGroups }: SkillsSectionProps) {
  return (
    <section id="skills">
      <SectionHeading
        label="02 - Skills"
        title="What I work with."
        subtitle="Languages, frameworks, tools, and platforms I'm comfortable shipping with."
      />
      <div className="skills-rows reveal">
        {skillGroups.map((group) => (
          <SkillCategoryRow group={group} key={group.label} />
        ))}
      </div>
    </section>
  )
}

function SkillCategoryRow({ group }: { group: SkillGroup }) {
  const isSoft = group.variant === 'soft'
  const displaySkills = getRepeatedSkills(group.skills)

  return (
    <div className="skill-category-row">
      <div className="skill-category-label">
        <h3>{group.label}</h3>
      </div>
      <div className="skill-marquee-viewport">
        <div className="skill-marquee-track">
          <div className="skill-marquee-group">
            {displaySkills.map((skill, index) => {
              const icons = getSkillIcons(skill)
              return (
                <div key={`${skill}-g1-${index}`} className={`skill-item ${isSoft ? 'soft' : ''}`}>
                  {icons.length > 0 && (
                    <span className="skill-icons">
                      {icons.map((iconClass) => (
                        <i key={iconClass} className={`${iconClass} colored`} />
                      ))}
                    </span>
                  )}
                  <span className="skill-name">{skill}</span>
                </div>
              )
            })}
          </div>
          <div className="skill-marquee-group" aria-hidden="true">
            {displaySkills.map((skill, index) => {
              const icons = getSkillIcons(skill)
              return (
                <div key={`${skill}-g2-${index}`} className={`skill-item ${isSoft ? 'soft' : ''}`}>
                  {icons.length > 0 && (
                    <span className="skill-icons">
                      {icons.map((iconClass) => (
                        <i key={iconClass} className={`${iconClass} colored`} />
                      ))}
                    </span>
                  )}
                  <span className="skill-name">{skill}</span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

