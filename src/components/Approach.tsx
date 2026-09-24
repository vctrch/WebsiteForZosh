import { approachSteps } from '../content.ts'

export function Approach() {
  return (
    <section className="section section-alt" id="approach" aria-labelledby="approach-title">
      <div className="wrap approach-grid">
        <div className="section-heading">
          <p className="eyebrow">Approach</p>
          <h2 id="approach-title">How a page gets made</h2>
        </div>
        <ol className="steps">
          {approachSteps.map((step, index) => (
            <li key={step.title}>
              <span className="step-index">{String(index + 1).padStart(2, '0')}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.summary}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
