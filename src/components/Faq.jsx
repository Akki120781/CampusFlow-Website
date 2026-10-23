import { ChevronDown, Mail } from 'lucide-react'
import { faqItems } from '../data/content'

export function Faq() {
  return (
    <section className="faq-section section-pad" id="questions">
      <div className="page-wrap faq-grid" data-reveal>
        <div>
          <div className="eyebrow-pill eyebrow-ink">
            <span className="pill-dot" />
            <span>ANSWERS TO KEY QUESTIONS</span>
          </div>
          <h2>
            Before the<br />
            <span>first morning bell.</span>
          </h2>
          <p className="faq-lede">
            Key operational details school trustees, principals, and administrative heads frequently ask us.
          </p>

          <div className="faq-support-box">
            <Mail size={16} />
            <div>
              <strong>Have a custom school requirement?</strong>
              <p>Email our solutions engineering team directly at <a href="mailto:community.divak@gmail.com">community.divak@gmail.com</a></p>
            </div>
          </div>
        </div>

        <div className="faq-list">
          {faqItems.map(({ question, answer }) => (
            <details className="faq-item" key={question}>
              <summary>
                <span>{question}</span>
                <span className="faq-plus">
                  <ChevronDown size={17} />
                </span>
              </summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
