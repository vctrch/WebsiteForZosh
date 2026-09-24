import { hero, highlights } from '../content.ts'

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="wrap hero-grid">
        <div>
          <p className="eyebrow">{hero.eyebrow}</p>
          <h1 id="hero-title">{hero.title}</h1>
          <p className="lede">{hero.lede}</p>
          <div className="hero-actions">
            <a className="button button-primary" href={hero.primary.href}>
              {hero.primary.label}
            </a>
            <a className="button button-secondary" href={hero.secondary.href}>
              {hero.secondary.label}
            </a>
          </div>
        </div>
        <ul className="highlights">
          {highlights.map((item) => (
            <li key={item.label}>
              <span>{item.label}</span>
              <strong>{item.value}</strong>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
