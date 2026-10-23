import { ArrowDown, ArrowRight, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react'

export function Hero() {
  return (
    <section className="hero" id="top">
      <img
        className="hero-image"
        src="/assets/campusflow-school-hero.png"
        alt="Students and teacher working together in an engaging modern school environment"
        loading="eager"
      />
      <div className="hero-overlay" />
      <div className="hero-glow-accent" />

      <div className="hero-content page-wrap">
        <div className="eyebrow-pill hero-eyebrow">
          <span>NOT JUST ANOTHER SCHOOL ERP // THE AI OPERATING SYSTEM</span>
        </div>

        <h1>
          CampusFlow<span className="hero-period">.</span>
        </h1>

        <p className="hero-lede">
          A clearer, calmer way to run a school.
        </p>

        <p className="hero-copy">
          Bring smart attendance, online fee collections, CBSE Holistic Progress Cards, live bus tracking, and parent communication into one unified workspace for your entire school community.
        </p>

        <div className="hero-actions">
          <a className="button button-lime" href="#product">
            <span>Try Interactive Demo</span>
            <ArrowRight size={17} />
          </a>
          <a className="button button-quiet" href="#contact">
            <span>Talk to an Expert</span>
            <ArrowRight size={16} />
          </a>
        </div>

        {/* EtherealX / Arovas-style Quick Metrics Bar */}
        <div className="hero-trust-bar">
          <div className="trust-pill">
            <strong>1,100+</strong> <span>Schools Nationwide</span>
          </div>
          <div className="trust-divider" />
          <div className="trust-pill">
            <strong>30s</strong> <span>Classroom Roll Call</span>
          </div>
          <div className="trust-divider" />
          <div className="trust-pill">
            <strong>100%</strong> <span>Fee Reconciled</span>
          </div>
          <div className="trust-divider" />
          <div className="trust-pill">
            <ShieldCheck size={16} className="text-lime" />
            <span>DPDP & CBSE Ready</span>
          </div>
        </div>
      </div>

      <div className="hero-foot page-wrap">
        <span>Less chasing paperwork. More time for actual learning.</span>
        <a href="#intro" aria-label="Scroll down to explore">
          <ArrowDown size={18} />
        </a>
      </div>
    </section>
  )
}
