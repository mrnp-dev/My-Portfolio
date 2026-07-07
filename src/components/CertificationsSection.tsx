import type { Certification } from '../data/portfolio'
import { SectionHeading } from './SectionHeading'

type CertificationsSectionProps = {
  certifications: Certification[]
}

export function CertificationsSection({ certifications }: CertificationsSectionProps) {
  return (
    <section id="certs">
      <SectionHeading
        label="05 - Certifications"
        title="Continuing education."
        subtitle="Courses and certificates I've completed outside of formal coursework."
      />
      <div className="cert-list reveal">
        {certifications.map((certification) => (
          <CertificationCard certification={certification} key={certification.name} />
        ))}
      </div>
    </section>
  )
}

function CertificationCard({ certification }: { certification: Certification }) {
  const cardContent = (
    <>
      <p className="cert-issuer">{certification.issuer}</p>
      <p className="cert-name">{certification.name}</p>
      <p className="cert-date">{certification.date}</p>
      {certification.certificateUrl && <span className="cert-view-indicator">View certificate ↗</span>}
    </>
  )

  if (!certification.certificateUrl) {
    return <div className="cert-item">{cardContent}</div>
  }

  return (
    <a
      aria-label={`View certificate: ${certification.name}`}
      className="cert-item cert-item-link"
      href={certification.certificateUrl}
      rel="noreferrer"
      target="_blank"
    >
      {cardContent}
    </a>
  )
}
