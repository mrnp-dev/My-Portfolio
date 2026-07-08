import { useState } from 'react'
import type { ContactLink } from '../data/portfolio'
import { SectionHeading } from './SectionHeading'

type ContactSectionProps = {
  links: ContactLink[]
}

export function ContactSection({ links }: ContactSectionProps) {
  return (
    <section id="contact">
      <SectionHeading label="05 - Contact" />
      <div className="contact-grid">
        <div className="reveal">
          <h2 className="contact-headline">I'm happy to answer your next project. →</h2>
          <p className="contact-text">
            Whether you need a mobile app, a web platform, an ML-powered backend, or you're offering an internship,
            reach out. I respond within a day.
          </p>
        </div>
        <div className="contact-links reveal">
          {links.map((link) => (
            <ContactRow link={link} key={link.label} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ContactRow({ link }: { link: ContactLink }) {
  const [copyState, setCopyState] = useState<'idle' | 'copied'>('idle')
  const canCopy = link.href.startsWith('mailto:') || link.href.startsWith('tel:')

  async function copyLinkValue() {
    const copyValue = link.href.replace(/^mailto:|^tel:/, '')

    await navigator.clipboard.writeText(copyValue)
    setCopyState('copied')
    window.setTimeout(() => setCopyState('idle'), 1600)
  }

  return (
    <div className="contact-row">
      <span className="contact-row-label">{link.label}</span>
      <span className="contact-row-action">
        <ExternalAwareLink className="contact-row-value" href={link.href}>
          {link.value}
        </ExternalAwareLink>
        {canCopy && (
          <button className="contact-copy" onClick={copyLinkValue} type="button">
            {copyState === 'copied' ? 'Copied' : 'Copy'}
          </button>
        )}
      </span>
    </div>
  )
}

export function ExternalAwareLink({
  children,
  className,
  href,
}: {
  children: string
  className?: string
  href: string
}) {
  const externalLinkProps = href.startsWith('http')
    ? {
        target: '_blank',
        rel: 'noreferrer',
      }
    : undefined

  return (
    <a className={className} href={href} {...externalLinkProps}>
      {children}
    </a>
  )
}
