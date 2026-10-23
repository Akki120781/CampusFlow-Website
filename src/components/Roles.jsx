import { ArrowRight, Check } from 'lucide-react'
import { roles } from '../data/content'

export function Roles() {
  return (
    <section className="roles-section section-pad" id="for-everyone">
      <div className="page-wrap">
        <div className="section-heading section-heading-row roles-heading" data-reveal>
          <div>
            <div className="eyebrow-pill eyebrow-light">
              <span className="pill-dot" />
              <span>DESIGNED FOR YOUR ENTIRE ECOSYSTEM</span>
            </div>
            <h2>
              Crafted for the people<br />
              <span>who make a school thrive.</span>
            </h2>
          </div>
          <p className="section-summary">
            Different stakeholders, tailored perspectives. CampusFlow gives each role a workspace that feels native, purposeful, and uncluttered.
          </p>
        </div>

        <div className="roles-grid">
          {roles.map(({ id, title, tagline, description, icon: Icon, className, metrics, link }) => (
            <article className={`role-panel ${className}`} key={id} data-reveal>
              <div className="role-panel-top">
                <span className="role-mono-num">{id}</span>
                <div className="role-icon-box">
                  <Icon size={22} strokeWidth={1.8} />
                </div>
              </div>

              <span className="role-tagline">{tagline}</span>
              <h3>{title}</h3>
              <p>{description}</p>

              <ul className="role-metrics-list">
                {metrics?.map((m) => (
                  <li key={m}>
                    <Check size={13} className="text-lime" />
                    <span>{m}</span>
                  </li>
                ))}
              </ul>

              <a href="#product" className="role-panel-link">
                <span>{link}</span>
                <ArrowRight size={15} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
