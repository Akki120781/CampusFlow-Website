import { useState } from 'react'
import { AlertCircle, ArrowUpRight, Bus, Check, CheckCircle2, Clock, MessageSquare, Sparkles, Users } from 'lucide-react'
import { AnimatedCounter } from './AnimatedCounter'

export function OverviewInteractive({ onNavigate }) {
  const [activeAlertFilter, setActiveAlertFilter] = useState('all')

  const alerts = [
    {
      id: 1,
      type: 'attendance',
      badge: 'ATTENDANCE ANOMALY',
      text: 'Grade 6 · Section A: Devansh Patel marked absent.',
      actionText: 'View Register',
      targetModule: 'attendance',
      time: '08:42 AM',
      tone: 'coral',
    },
    {
      id: 2,
      type: 'finance',
      badge: 'FEE DESK UPDATE',
      text: '₹ 18,500 received via UPI from Aarav Sharma (Receipt RCP-601 generated).',
      actionText: 'Open Ledger',
      targetModule: 'fees',
      time: '09:15 AM',
      tone: 'green',
    },
    {
      id: 3,
      type: 'academic',
      badge: 'TIMETABLE SYNC',
      text: 'Period 3 Physics Lab schedule confirmed for Grade 8.',
      actionText: 'View Timetable',
      targetModule: 'learning',
      time: '10:00 AM',
      tone: 'blue',
    },
    {
      id: 4,
      type: 'transport',
      badge: 'BUS GPS FLEET',
      text: 'Route 4 safely reached North Gate at 08:26 AM · 28 students onboard.',
      actionText: 'Check Fleet',
      targetModule: 'overview',
      time: '08:28 AM',
      tone: 'teal',
    },
  ]

  const filteredAlerts = activeAlertFilter === 'all'
    ? alerts
    : alerts.filter(a => a.type === activeAlertFilter)

  return (
    <div className="overview-interactive">
      {/* Top AI Telemetry Strip */}
      <div className="overview-ai-card">
        <div className="ai-card-titlebar">
          <div className="ai-brand-indicator">
            <span className="mono-title">CAMPUSFLOW AI DISPATCH // LIVE TELEMETRY</span>
          </div>
          <span className="ai-timestamp">{new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })} IST</span>
        </div>

        <div className="ai-query-row">
          <span className="query-prompt-symbol">›</span>
          <p className="query-text">
            "Good morning. All 24 classrooms running on schedule. <strong>3 items</strong> require operational review."
          </p>
        </div>

        <div className="clicker-metrics-grid mini-grid">
          <div className="clicker-metric metric-green">
            <span className="metric-tag">CAMPUS ATTENDANCE</span>
            <div className="metric-val">
              <AnimatedCounter value={94} suffix="%" />
            </div>
            <p className="metric-sub">Across 850 students</p>
          </div>

          <div className="clicker-metric metric-blue">
            <span className="metric-tag">COLLECTIONS TODAY</span>
            <div className="metric-val">
              <AnimatedCounter value={142000} prefix="₹ " />
            </div>
            <p className="metric-sub">12 online · 4 counter</p>
          </div>

          <div className="clicker-metric metric-teal">
            <span className="metric-tag">BUSES ON ROUTE</span>
            <div className="metric-val">
              <AnimatedCounter value={18} suffix="/18" />
            </div>
            <p className="metric-sub">All GPS beacons active</p>
          </div>
        </div>
      </div>

      {/* Actionable Live Feed */}
      <div className="overview-feed-card">
        <div className="feed-header-row">
          <div>
            <h4>Operational Feed & Alerts</h4>
            <p>Real-time updates aggregated across all school departments.</p>
          </div>

          <div className="feed-filter-tabs">
            <button
              className={`feed-tab ${activeAlertFilter === 'all' ? 'active' : ''}`}
              onClick={() => setActiveAlertFilter('all')}
            >
              All
            </button>
            <button
              className={`feed-tab ${activeAlertFilter === 'attendance' ? 'active' : ''}`}
              onClick={() => setActiveAlertFilter('attendance')}
            >
              Attendance
            </button>
            <button
              className={`feed-tab ${activeAlertFilter === 'finance' ? 'active' : ''}`}
              onClick={() => setActiveAlertFilter('finance')}
            >
              Finance
            </button>
          </div>
        </div>

        <div className="feed-items-list">
          {filteredAlerts.map((alert) => (
            <div key={alert.id} className={`feed-item tone-${alert.tone}`}>
              <div className="feed-item-indicator">
                <span className="feed-check"><Check size={12} /></span>
              </div>
              <div className="feed-item-content">
                <div className="feed-item-meta">
                  <span className={`pill-badge badge-${alert.tone}`}>{alert.badge}</span>
                  <time className="feed-time">{alert.time}</time>
                </div>
                <p className="feed-text">{alert.text}</p>
              </div>
              <button
                className="feed-action-btn"
                onClick={() => onNavigate && onNavigate(alert.targetModule)}
              >
                {alert.actionText} <ArrowUpRight size={12} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
