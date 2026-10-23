import { useState } from 'react'
import { ArrowRight, Check, ShieldCheck, Sparkles } from 'lucide-react'
import { expansionAreas, platformModules } from '../data/content'

export function ModuleCatalog() {
  const [filter, setFilter] = useState('ALL')

  const categories = ['ALL', 'ATTENDANCE', 'FINANCE', 'CURRICULUM', 'SAFETY', 'OPERATIONS']

  const filteredModules = filter === 'ALL'
    ? platformModules
    : platformModules.filter(m => m.category.includes(filter))

  return (
    <section className="capabilities-section section-pad" id="modules">
      <div className="page-wrap">
        <div className="capabilities-head" data-reveal>
          <div>
            <div className="eyebrow-pill eyebrow-ink">
              <span className="pill-dot" />
              <span>THE ENTERPRISE SCHOOL ERP SUITE</span>
            </div>
            <h2>
              Modular architecture.<br />
              <span>Infinite school scalability.</span>
            </h2>
          </div>
          <p>
            Deploy individual modules or power your entire institution on one unified database. Built with zero-lag performance, cloud auto-scaling, and deep hardware integrations.
          </p>
        </div>

        {/* Arovas-style filter pills */}
        <div className="module-filter-bar" data-reveal>
          {categories.map((cat) => (
            <button
              key={cat}
              className={`module-cat-chip ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Module Cards Grid */}
        <div className="capability-grid module-grid">
          {filteredModules.map(({ number, category, title, summary, features, icon: Icon, tone, badge }) => (
            <article className="capability module-card" key={number} data-reveal>
              <div className="module-card-top">
                <div className={`capability-mark ${tone}`}>
                  <Icon size={20} strokeWidth={1.8} />
                </div>
                <div className="module-top-tags">
                  {badge && <span className="module-badge-tag">{badge}</span>}
                  <span className="module-number">{number}</span>
                </div>
              </div>

              <span className="module-category-label">{category}</span>
              <h3>{title}</h3>
              <p className="module-summary">{summary}</p>

              <ul className="module-features">
                {features.map((feature) => (
                  <li key={feature}>
                    <Check size={14} className="feature-check-icon" aria-hidden="true" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {/* DPDP and Trust Guarantee Strip */}
        <div className="adapt-strip" data-reveal>
          <div className="adapt-symbol">
            <ShieldCheck size={24} />
          </div>
          <p>
            <strong>Certified Data Sovereignty &amp; Privacy Standards.</strong> All school databases are isolated with AES-256 encryption at rest, ISO 27001 compliant cloud infrastructure, and fully aligned with India's Digital Personal Data Protection (DPDP) Act.
          </p>
          <a className="adapt-tag" href="#questions">
            Security Details <ArrowRight size={14} />
          </a>
        </div>

        {/* Expansion Areas / Room to Grow */}
        <div className="expansion-row" data-reveal>
          <div className="expansion-copy">
            <div className="eyebrow-pill eyebrow-ink">
              <span className="pill-dot" />
              <span>FUTURE READY ECOSYSTEM</span>
            </div>
            <h3>Looking to scale multi-branch institutions?</h3>
            <p>
              CampusFlow easily activates advanced expansion modules as your school community grows over academic sessions.
            </p>
          </div>
          <ul className="expansion-list">
            {expansionAreas.map((area) => (
              <li key={area}>
                <span className="expansion-bullet" aria-hidden="true" />
                {area}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
