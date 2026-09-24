import { siteName } from '../content.ts'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="wrap footer-row">
        <p>{siteName}</p>
        <p>© {year}</p>
      </div>
    </footer>
  )
}
