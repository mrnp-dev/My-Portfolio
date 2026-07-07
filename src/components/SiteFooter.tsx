import type { ContactLink } from '../data/portfolio'
import { ExternalAwareLink } from './ContactSection'

type SiteFooterProps = {
  links: ContactLink[]
}

export function SiteFooter({ links }: SiteFooterProps) {
  return (
    <footer>
      <p className="footer-copy">Mark Rey Nino R. Pascual - 2026</p>
      <ul className="footer-links">
        {links.map((link) => (
          <li key={link.label}>
            <ExternalAwareLink href={link.href}>{link.label}</ExternalAwareLink>
          </li>
        ))}
      </ul>
    </footer>
  )
}
