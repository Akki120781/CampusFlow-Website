export function Marquee() {
  const items = [
    'Smart Attendance & Biometric Sync',
    'FinTech Fee Desk & UPI Gateway',
    'CBSE Holistic Progress Cards (HPC)',
    'Live GPS Bus Fleet Tracking',
    'Automated Parent WhatsApp Broadcasts',
    'Intelligent Teacher Substitution',
    'NEP 2020 Compliant Assessment',
    'Staff Payroll & Leave Approvals',
  ]

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {items.concat(items).map((item, index) => (
          <span key={index} className="marquee-item">
            <span>{item}</span>
            <svg viewBox="0 0 24 24" aria-hidden="true" className="marquee-star">
              <path d="M12 0c1 7 5 11 12 12-7 1-11 5-12 12-1-7-5-11-12-12 7-1 11-5 12-12Z" fill="currentColor" />
            </svg>
          </span>
        ))}
      </div>
    </div>
  )
}
