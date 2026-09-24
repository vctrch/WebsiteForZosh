import { workItems } from '../content.ts'

export function Work() {
  return (
    <section className="section" id="work" aria-labelledby="work-title">
      <div className="wrap">
        <div className="section-heading">
          <p className="eyebrow">Work</p>
          <h2 id="work-title">What the page is for</h2>
        </div>
        <div className="cards">
          {workItems.map((item, index) => (
            <article className="card" key={item.title}>
              <p className="card-index">{String(index + 1).padStart(2, '0')}</p>
              <h3>{item.title}</h3>
              <p>{item.summary}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
