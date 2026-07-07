import type { NavItem } from '../data/portfolio'

type NavigationProps = {
  activeSection: string
  isScrolled: boolean
  items: NavItem[]
}

export function Navigation({ activeSection, isScrolled, items }: NavigationProps) {
  return (
    <nav className={isScrolled ? 'site-nav scrolled' : 'site-nav'} aria-label="Primary navigation">
      <a href="#hero" className="nav-logo" aria-label="Back to top">
        mrnp.
      </a>
      <ul className="nav-links">
        {items.map((item) => (
          <li key={item.href}>
            <a className={activeSection === getSectionId(item.href) ? 'active' : ''} href={item.href}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

function getSectionId(href: NavItem['href']) {
  return href.slice(1)
}
