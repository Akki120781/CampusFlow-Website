import { Quote, Star } from 'lucide-react'
import { testimonials } from '../data/content'

export function Testimonials() {
  return (
    <section className="testimonials-section section-pad" id="testimonials">
      <div className="page-wrap">
        <div className="section-heading" data-reveal>
          <div className="eyebrow-pill eyebrow-ink">
            <span>ENDORSED BY SCHOOL LEADERSHIP</span>
          </div>
          <h2>
            Trusted by the educators<br />
            <span>who shape the future.</span>
          </h2>
          <p className="section-summary">
            Over 1,100 premier CBSE, ICSE, and State institutions operate their daily academic and financial workflows on CampusFlow.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((item, index) => (
            <article key={index} className="testimonial-card" data-reveal>
              <div className="testimonial-rating">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} size={14} className="star-filled" fill="currentColor" />
                ))}
              </div>

              <blockquote className="testimonial-quote">
                "{item.quote}"
              </blockquote>

              <div className="testimonial-author-block">
                <div className="author-avatar-dot" />
                <div>
                  <strong className="author-name">{item.author}</strong>
                  <p className="author-role">{item.role}</p>
                  <span className="author-stats">{item.stats}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
