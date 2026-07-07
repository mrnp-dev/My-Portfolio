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
  return (
    <div className="cert-item">
      <p className="cert-issuer">{certification.issuer}</p>
      <p className="cert-name">{certification.name}</p>
      <p className="cert-date">{certification.date}</p>
    </div>
  )
}
