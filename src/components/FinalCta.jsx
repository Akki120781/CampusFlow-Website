import { ArrowRight, Sparkles } from 'lucide-react'

export function FinalCta() {
  return (
    <section className="cta-section">
      <div className="page-wrap cta-inner" data-reveal>
        <div className="cta-copy-col">
          <div className="eyebrow-pill eyebrow-ink">
            <span className="pill-dot" />
            <span>TRANSFORM YOUR SCHOOL OPERATIONS</span>
          </div>
          <h2>
            Bring your school day<br />
            <span>back into crystal clear focus.</span>
          </h2>
          <p className="cta-description">
            Experience how modern software liberates teachers from paperwork and equips principals with real-time foresight.
          </p>
        </div>

        <div className="cta-action-col">
          <a className="button button-lime button-large" href="#contact">
            <span>Schedule Guided Walkthrough</span>
            <ArrowRight size={18} />
          </a>
          <a className="button button-quiet" href="#product">
            <span>Explore Interactive Lab</span>
          </a>
          <p className="cta-note">
            ✓ Free 15-day institutional trial · No credit card required · Assisted migration
          </p>
        </div>
      </div>
    </section>
  )
}
