import { useEffect, useState } from 'react'
import type { Certification } from '../data/portfolio'
import { SectionHeading } from './SectionHeading'

type CertificationsSectionProps = {
  certifications: Certification[]
}

export function CertificationsSection({ certifications }: CertificationsSectionProps) {
  const [selectedCertificate, setSelectedCertificate] = useState<Certification | null>(null)

  useEffect(() => {
    if (!selectedCertificate) return

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelectedCertificate(null)
    }

    document.body.classList.add('modal-open')
    window.addEventListener('keydown', closeOnEscape)

    return () => {
      document.body.classList.remove('modal-open')
      window.removeEventListener('keydown', closeOnEscape)
    }
  }, [selectedCertificate])

  return (
    <section id="certs">
      <SectionHeading
        label="04 - Certifications"
        title="Continuing education."
        subtitle="Courses and certificates I've completed outside of formal coursework."
      />
      <div className="cert-list reveal">
        {certifications.map((certification) => (
          <CertificationCard
            certification={certification}
            key={certification.name}
            onView={() => setSelectedCertificate(certification)}
          />
        ))}
      </div>
      {selectedCertificate?.certificateImages?.length && (
        <CertificateImageModal certificate={selectedCertificate} onClose={() => setSelectedCertificate(null)} />
      )}
    </section>
  )
}

function CertificationCard({
  certification,
  onView,
}: {
  certification: Certification
  onView: () => void
}) {
  const hasCertificateImages = Boolean(certification.certificateImages?.length)
  const cardContent = (
    <>
      <p className="cert-issuer">{certification.issuer}</p>
      <p className="cert-name">{certification.name}</p>
      <p className="cert-date">{certification.date}</p>
      {hasCertificateImages && <span className="cert-view-indicator">View Certificate</span>}
    </>
  )

  if (!hasCertificateImages) {
    return <div className="cert-item">{cardContent}</div>
  }

  return (
    <button
      aria-haspopup="dialog"
      aria-label={`View certificate: ${certification.name}`}
      className="cert-item cert-item-link"
      onClick={onView}
      type="button"
    >
      {cardContent}
    </button>
  )
}

function CertificateImageModal({ certificate, onClose }: { certificate: Certification; onClose: () => void }) {
  const certificateImages = certificate.certificateImages ?? []

  if (!certificateImages.length) return null

  return (
    <div aria-labelledby="certificate-preview-title" aria-modal="true" className="cert-modal" role="dialog">
      <button aria-label="Close certificate" className="cert-modal-backdrop" onClick={onClose} type="button" />
      <div className="cert-modal-panel">
        <div className="cert-modal-header">
          <div>
            <p className="cert-modal-kicker">Certificate</p>
            <h3 id="certificate-preview-title" className="cert-modal-title">
              {certificate.name}
            </h3>
          </div>
          <button className="cert-modal-close" onClick={onClose} type="button">
            Close
          </button>
        </div>
        <div className="cert-image-preview" aria-label={`${certificate.name} image`}>
          {certificateImages.map((imageUrl, index) => (
            <img
              alt={`${certificate.name}${certificateImages.length > 1 ? ` page ${index + 1}` : ''}`}
              className="cert-preview-image"
              key={imageUrl}
              src={imageUrl}
            />
          ))}
        </div>
        <div className="cert-modal-footer">
          <a className="cert-open-link" href={certificateImages[0]} rel="noreferrer" target="_blank">
            Open image ↗
          </a>
        </div>
      </div>
    </div>
  )
}
