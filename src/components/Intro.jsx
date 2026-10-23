import { ArrowRight } from 'lucide-react'

export function Intro() {
  return (
    <section className="intro-section section-pad" id="intro">
      <div className="page-wrap intro-grid" data-reveal>
        <div>
          <div className="eyebrow-pill eyebrow-ink">
            <span className="pill-dot" />
            <span>THE MODERN SCHOOL OPERATING SYSTEM</span>
          </div>
          <h2>
            One school day.<br />
            <span>Zero loose ends.</span>
          </h2>
        </div>

        <div className="intro-copy-block">
          <p className="intro-copy">
            A school runs on thousands of micro-moments every single morning: a classroom roll call, a fee instalment, a substitute teacher allocation, an absentee alert home, a school bus departing the gate.
          </p>
          <p>
            When these functions run on fragmented spreadsheets and disjointed messaging apps, chaos follows. CampusFlow brings all operational threads into one considered operating system, so teachers can focus on teaching and school leaders gain clear, dependable foresight.
          </p>
          <a className="text-link" href="#product">
            Experience the interactive product lab <ArrowRight size={16} />
          </a>
        </div>

        <div className="intro-ribbon" aria-label="CampusFlow connects school operations">
          <span>CLASSROOM ROLL CALL</span>
          <ArrowRight size={17} />
          <span>FEE &amp; OFFICE DESK</span>
          <ArrowRight size={17} />
          <span>FAMILY NOTIFICATIONS</span>
          <ArrowRight size={17} />
          <span>SAFE COMMUTE &amp; ACADEMICS</span>
        </div>
      </div>
    </section>
  )
}
