import { ArrowUpRight } from 'lucide-react'
import { workflows } from '../data/content'

export function HowItWorks() {
  return (
    <section className="workflow-section section-pad" id="how-it-works">
      <div className="page-wrap">
        <div className="workflow-heading" data-reveal>
          <div className="eyebrow-pill eyebrow-ink">
            <span className="pill-dot" />
            <span>CHRONOLOGY OF A CONNECTED SCHOOL</span>
          </div>
          <h2>
            Small actions.<br />
            <span>Frictionless handoffs.</span>
          </h2>
          <p>
            Exceptional school software does not force another tedious bureaucratic process. It orchestrates existing daily actions so data flows effortlessly to the right person at the exact right second.
          </p>
        </div>

        <div className="workflow-list">
          {workflows.map((item) => (
            <article className={`workflow-item ${item.color}`} key={item.number} data-reveal>
              <div className="workflow-item-top">
                <span className="workflow-number">{item.number}</span>
                <span className="workflow-tag-pill">{item.tag}</span>
              </div>
              <span className="workflow-time">{item.time}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
              <ArrowUpRight className="workflow-arrow" size={22} />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
