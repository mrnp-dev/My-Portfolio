import type { Project } from '../data/portfolio'
import { SectionHeading } from './SectionHeading'

type ProjectsSectionProps = {
  projects: Project[]
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section id="projects">
      <SectionHeading
        label="03 - Projects"
        title="Things I've built."
        subtitle="Client work, research, and personal projects, all shipped or in active development."
      />
      {projects.map((project) => (
        <ProjectCard project={project} key={project.name} />
      ))}
    </section>
  )
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card reveal">
      <ProjectPreview project={project} />
      <div className="project-body">
        <div className="project-top">
          <div>
            <p className="project-meta-row">{project.meta}</p>
            <h3 className="project-name">{project.name}</h3>
          </div>
          <span className={`project-status ${project.status}`}>{project.statusLabel}</span>
        </div>
        <p className="project-desc">{project.description}</p>
        <ul className="project-highlights">
          {project.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
        <div className="project-footer">
          <TagList className="project-stack" itemClassName="project-tag" items={project.stack} />
          <a href="#contact" className="project-link">
            Ask about it ↗
          </a>
        </div>
      </div>
    </article>
  )
}

function ProjectPreview({ project }: { project: Project }) {
  return (
    <>
      <div className="project-hero-img">
        <span className="project-hero-label">{project.previewLabel}</span>
      </div>
      <div className="project-sub-strip">
        {project.previewShots.map((shot) => (
          <div className="project-sub-img" key={shot}>
            <span>{shot}</span>
          </div>
        ))}
      </div>
    </>
  )
}

function TagList({ className, itemClassName, items }: { className: string; itemClassName: string; items: string[] }) {
  return (
    <div className={className}>
      {items.map((item) => (
        <span className={itemClassName} key={item}>
          {item}
        </span>
      ))}
    </div>
  )
}
