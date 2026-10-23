import { useState } from 'react'
import { ArrowUpRight, CheckCircle2, Mail, MessageSquare, Send, Sparkles } from 'lucide-react'

export function Contact() {
  const [submitting, setSubmitting] = useState(false)
  const [status, setStatus] = useState(null)
  const gmailComposeUrl = 'https://mail.google.com/mail/?view=cm&fs=1&to=community.divak%40gmail.com'

  async function handleSubmit(event) {
    event.preventDefault()
    if (submitting) return

    const form = event.currentTarget
    const fields = new FormData(form)
    setSubmitting(true)
    setStatus(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: fields.get('name'),
          email: fields.get('email'),
          school: fields.get('school'),
          topic: fields.get('topic'),
          message: fields.get('message'),
          website: fields.get('website'),
        }),
      })
      const result = await response.json().catch(() => ({}))
      if (!response.ok) throw new Error(result.error || 'Your message could not be sent. Please try again.')

      form.reset()
      setStatus({ type: 'success', text: 'Thank you! Your inquiry has been forwarded to our founding team. We will respond within 24 hours.' })
    } catch (error) {
      setStatus({ type: 'error', text: error.message || 'Something went wrong. Please try again shortly or email us directly.' })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section className="contact-section section-pad" id="contact">
      <div className="page-wrap contact-grid">
        <div className="contact-copy" data-reveal>
          <div className="eyebrow-pill eyebrow-ink">
            <span className="pill-dot" />
            <span>LET'S DISCUSS YOUR INSTITUTION</span>
          </div>

          <h2>
            A calmer, connected<br />
            <span>school day starts here.</span>
          </h2>

          <p className="contact-lede">
            Tell us about your campus size, current pain points, and target timeline. We will tailor a personalized 30-minute walkthrough showing exactly how CampusFlow streamlines your specific school operations.
          </p>

          {/* Quick steps */}
          <ol className="contact-steps-list">
            <li>
              <span className="c-step-num">01</span>
              <div>
                <strong>Prompt Response</strong>
                <p>We review your school inquiry and reply within 1 business day.</p>
              </div>
            </li>
            <li>
              <span className="c-step-num">02</span>
              <div>
                <strong>30-Minute Live Walkthrough</strong>
                <p>No generic slides. We explore your attendance, fee, and academic workflows live.</p>
              </div>
            </li>
            <li>
              <span className="c-step-num">03</span>
              <div>
                <strong>Tailored Onboarding Roadmap</strong>
                <p>Transparent school-wide pricing and full data migration assistance from Day 1.</p>
              </div>
            </li>
          </ol>

          <div className="contact-direct-channels">
            <div className="contact-email">
              <span className="contact-email-icon"><Mail size={18} /></span>
              <span>
                <small>Direct Email</small>
                <a href={gmailComposeUrl} target="_blank" rel="noreferrer">
                  community.divak@gmail.com <ArrowUpRight size={13} />
                </a>
              </span>
            </div>
          </div>
        </div>

        {/* Form */}
        <form className="contact-form" onSubmit={handleSubmit} data-reveal>
          <div className="form-head">
            <h3>Request School Walkthrough</h3>
            <p>Fill out the details below to schedule your demo.</p>
          </div>

          <div className="contact-field">
            <label htmlFor="contact-name">Your Full Name</label>
            <input
              id="contact-name"
              name="name"
              autoComplete="name"
              maxLength={100}
              required
              placeholder="e.g. Dr. Ramesh Kumar"
            />
          </div>

          <div className="contact-field">
            <label htmlFor="contact-email">Official School / Work Email</label>
            <input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              maxLength={254}
              required
              placeholder="principal@yourschool.edu.in"
            />
          </div>

          <div className="contact-field">
            <label htmlFor="contact-school">School / Institution Name</label>
            <input
              id="contact-school"
              name="school"
              autoComplete="organization"
              maxLength={140}
              required
              placeholder="e.g. Delhi Public School, South"
            />
          </div>

          <div className="contact-field">
            <label htmlFor="contact-topic">Primary Interest</label>
            <select id="contact-topic" name="topic" defaultValue="Interactive Product Demo">
              <option>Interactive Product Demo</option>
              <option>Fee Management & Payment Gateway</option>
              <option>Smart Attendance & Biometrics</option>
              <option>CBSE Holistic Progress Card (HPC)</option>
              <option>GPS Bus Tracking Fleet</option>
              <option>Complete School ERP Migration</option>
            </select>
          </div>

          <div className="contact-field contact-field-wide">
            <label htmlFor="contact-message">Tell us about your campus &amp; requirements</label>
            <textarea
              id="contact-message"
              name="message"
              rows={4}
              maxLength={3000}
              required
              placeholder="Number of students, current software in use, key challenges you'd like solved..."
            />
          </div>

          {/* Honeypot field for bot suppression */}
          <div className="contact-honeypot" aria-hidden="true">
            <label htmlFor="contact-website">Leave this field empty</label>
            <input id="contact-website" name="website" tabIndex={-1} autoComplete="off" />
          </div>

          <div className="contact-submit-row">
            <button className="button button-dark" type="submit" disabled={submitting}>
              <span>{submitting ? 'Submitting Details…' : 'Schedule Demo Walkthrough'}</span>
              <Send size={16} />
            </button>
            <span className="privacy-hint">
              🔒 Your contact information is never shared. Handled under DPDP data protection rules.
            </span>
          </div>

          {status && (
            <p
              className={`contact-status contact-status-${status.type}`}
              role={status.type === 'error' ? 'alert' : 'status'}
            >
              {status.text}
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
