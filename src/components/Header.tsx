import { navItems, siteName } from '../content.ts'

export function Header() {
  return (
    <header className="site-header" id="top">
      <a className="logo" href="#top">
        {siteName}
      </a>
      <nav className="nav" aria-label="Primary">
        <ul>
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
