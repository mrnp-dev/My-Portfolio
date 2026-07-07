import { useState } from 'react'
import type { Project } from '../data/portfolio'
import { SectionHeading } from './SectionHeading'

type ProjectsSectionProps = {
  projects: Project[]
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  const [activeProjectName, setActiveProjectName] = useState(projects[0]?.name ?? '')
  const activeProject = projects.find((project) => project.name === activeProjectName) ?? projects[0]

  return (
    <section id="projects">
      <SectionHeading
        label="03 - Projects"
        title="Things I've built."
        subtitle="Client work, research, and personal projects, all shipped or in active development."
      />
      {projects.length > 0 && (
        <div className="project-index reveal">
          <div className="project-index-list" aria-label="Project index">
            {projects.map((project, index) => (
              <ProjectIndexRow
                index={index}
                isActive={project.name === activeProject.name}
                key={project.name}
                onFocus={() => setActiveProjectName(project.name)}
                onPointerEnter={() => setActiveProjectName(project.name)}
                project={project}
              />
            ))}
          </div>
          <ProjectIndexPreview project={activeProject} />
        </div>
      )}
    </section>
  )
}

function ProjectIndexRow({
  index,
  isActive,
  onFocus,
  onPointerEnter,
  project,
}: {
  index: number
  isActive: boolean
  onFocus: () => void
  onPointerEnter: () => void
  project: Project
}) {
  return (
    <a
      className={isActive ? 'project-index-row active' : 'project-index-row'}
      href="#contact"
      onFocus={onFocus}
      onPointerEnter={onPointerEnter}
    >
      <span className="project-index-number">{String(index + 1).padStart(2, '0')}</span>
      <span className="project-index-main">
        <span className="project-index-name">{project.name}</span>
        <span className="project-index-meta">{project.meta}</span>
      </span>
      <span className={`project-status ${project.status}`}>{project.statusLabel}</span>
    </a>
  )
}

function ProjectIndexPreview({ project }: { project: Project }) {
  return (
    <aside className="project-index-preview" aria-label={`${project.name} preview`}>
      <p className="project-preview-label">Selected project</p>
      <h3 className="project-preview-name">{project.name}</h3>
      <p className="project-preview-desc">{project.description}</p>
      <div className="project-preview-stack">
        {project.stack.map((technology) => (
          <span className="project-tag" key={technology}>
            {technology}
          </span>
        ))}
      </div>
    </aside>
  )
}
