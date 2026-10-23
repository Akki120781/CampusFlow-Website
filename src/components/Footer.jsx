import { ArrowUpRight } from 'lucide-react'
import { Brand } from './Header'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-wrap footer-main">
        <div className="footer-brand">
          <Brand />
          <p className="footer-tagline">
            The AI-powered operating system for forward-thinking schools. Connecting classrooms, administration, and families into one calm, dependable workflow.
          </p>
          <div className="footer-status-indicator">
            <span className="live-telemetry-dot" />
            <span>SYSTEM OPERATIONAL · 99.98% UPTIME</span>
          </div>
        </div>

        <div className="footer-links">
          <span>PLATFORM</span>
          <a href="#product">Interactive Demo</a>
          <a href="#modules">Module Catalog</a>
          <a href="#flows">Workflow Blueprints</a>
          <a href="#for-everyone">Roles &amp; Portals</a>
        </div>

        <div className="footer-links">
          <span>MODULES</span>
          <a href="#product">Smart Attendance</a>
          <a href="#product">Fee FinTech Desk</a>
          <a href="#product">CBSE Holistic Cards</a>
          <a href="#modules">GPS Bus Fleet</a>
          <a href="#modules">HR &amp; Payroll</a>
        </div>

        <div className="footer-note">
          <span>CONTACT &amp; HEADQUARTERS</span>
          <p>
            Divak Technologies · CampusFlow Suite<br />
            New Delhi &amp; Bengaluru, India
          </p>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=community.divak%40gmail.com"
            target="_blank"
            rel="noreferrer"
            className="footer-mail-link"
          >
            community.divak@gmail.com <ArrowUpRight size={14} />
          </a>
        </div>
      </div>

      <div className="page-wrap footer-bottom">
        <div className="footer-bottom-brand">
          <Brand dark />
        </div>
        <span>© {new Date().getFullYear()} Divak Technologies. CampusFlow is an educational software trademark.</span>
        <div className="footer-legal-links">
          <a href="#questions">DPDP Compliance</a>
          <span>·</span>
          <a href="#contact">Schedule Walkthrough <ArrowUpRight size={13} /></a>
        </div>
      </div>
    </footer>
  )
}
