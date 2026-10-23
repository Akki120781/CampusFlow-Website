import { useState } from 'react'
import {
  BookOpenCheck,
  ChevronDown,
  ClipboardCheck,
  GraduationCap,
  Laptop,
  Maximize2,
  Smartphone,
  Tablet,
  UsersRound,
  WalletCards,
} from 'lucide-react'
import { moduleTabs } from '../../data/content'
import { AttendanceClicker } from './AttendanceClicker'
import { FeeDeskInteractive } from './FeeDeskInteractive'
import { AcademicsInteractive } from './AcademicsInteractive'
import { OverviewInteractive } from './OverviewInteractive'

const mockRoles = [
  { id: 'admin', name: 'Alex Morgan', role: 'Principal & Admin', avatar: 'AM', color: 'violet' },
  { id: 'teacher', name: 'Sarah Jenkins', role: 'Class Teacher (6A)', avatar: 'SJ', color: 'green' },
  { id: 'parent', name: 'Priya Sharma', role: 'Parent (2 Children)', avatar: 'PS', color: 'peach' },
]

export function WorkspacePreview() {
  const [activeModule, setActiveModule] = useState('attendance')
  const [deviceView, setDeviceView] = useState('desktop') // 'desktop' | 'tablet' | 'mobile'
  const [activeRole, setActiveRole] = useState(mockRoles[1]) // Teacher by default for immediate clicker excitement
  const [roleMenuOpen, setRoleMenuOpen] = useState(false)

  return (
    <section className="product-section section-pad" id="product">
      <div className="page-wrap">
        {/* Section Heading */}
        <div className="section-heading section-heading-row" data-reveal>
          <div>
            <div className="eyebrow-pill">
              <span className="pill-dot" />
              <span>LIVE INTERACTIVE PRODUCT LAB</span>
            </div>
            <h2>
              One connected campus.<br />
              <span>Experience it live.</span>
            </h2>
          </div>
          <p className="section-summary">
            Test drive the real CampusFlow experience. Click students to mark attendance, record fee instalments, or switch between school roles and device viewports.
          </p>
        </div>

        {/* Toolbar: Module Tabs + Device Switcher */}
        <div className="workspace-control-bar" data-reveal>
          {/* Module Selector Tabs */}
          <div className="preview-tabs" role="tablist" aria-label="CampusFlow Modules">
            {moduleTabs.map(({ id, label, icon: Icon, badge }) => (
              <button
                key={id}
                role="tab"
                id={`tab-${id}`}
                aria-selected={activeModule === id}
                className={`preview-tab ${activeModule === id ? 'preview-tab-active' : ''}`}
                onClick={() => setActiveModule(id)}
              >
                <Icon size={16} strokeWidth={1.8} />
                <span>{label}</span>
                {badge && <span className="tab-badge">{badge}</span>}
              </button>
            ))}
          </div>

          {/* Device Switcher (Desktop / Tablet / Mobile) */}
          <div className="device-switcher-pill" role="group" aria-label="Device viewport preview">
            <button
              className={`device-btn ${deviceView === 'desktop' ? 'active' : ''}`}
              onClick={() => setDeviceView('desktop')}
              title="Desktop viewport (100%)"
              aria-label="Desktop view"
            >
              <Laptop size={15} />
              <span>Desktop</span>
            </button>
            <button
              className={`device-btn ${deviceView === 'tablet' ? 'active' : ''}`}
              onClick={() => setDeviceView('tablet')}
              title="Tablet viewport (768px)"
              aria-label="Tablet view"
            >
              <Tablet size={15} />
              <span>Tablet</span>
            </button>
            <button
              className={`device-btn ${deviceView === 'mobile' ? 'active' : ''}`}
              onClick={() => setDeviceView('mobile')}
              title="Mobile viewport (390px)"
              aria-label="Mobile view"
            >
              <Smartphone size={15} />
              <span>Mobile</span>
            </button>
          </div>
        </div>

        {/* Outer Device Container */}
        <div className={`workspace-outer-frame frame-${deviceView}`} data-reveal>
          <div className="workspace-window" id="sample-workspace" role="tabpanel">
            {/* Left Operational Rail (Desktop / Tablet) */}
            <aside className="workspace-rail">
              <div className="rail-brand">
                <span className="brand-symbol brand-symbol-small">
                  <i /><i /><i />
                </span>
                <span>CampusFlow</span>
              </div>

              <p className="rail-caption">OPERATIONS</p>
              <div
                className={`rail-item ${activeModule === 'overview' ? 'rail-item-current' : ''}`}
                onClick={() => setActiveModule('overview')}
                role="button"
                tabIndex={0}
              >
                <GraduationCap size={16} /> Overview
              </div>
              <div
                className={`rail-item ${activeModule === 'attendance' ? 'rail-item-current' : ''}`}
                onClick={() => setActiveModule('attendance')}
                role="button"
                tabIndex={0}
              >
                <ClipboardCheck size={16} /> Attendance
                <span className="rail-live-pulse" />
              </div>
              <div
                className={`rail-item ${activeModule === 'fees' ? 'rail-item-current' : ''}`}
                onClick={() => setActiveModule('fees')}
                role="button"
                tabIndex={0}
              >
                <WalletCards size={16} /> Fee Desk
              </div>
              <div
                className={`rail-item ${activeModule === 'learning' ? 'rail-item-current' : ''}`}
                onClick={() => setActiveModule('learning')}
                role="button"
                tabIndex={0}
              >
                <BookOpenCheck size={16} /> Academics & HPC
              </div>

              {/* Role Switcher in Sidebar */}
              <div className="rail-user-container">
                <p className="rail-caption">ACTIVE PROFILE (TEST ROLE)</p>
                <div
                  className="rail-user"
                  onClick={() => setRoleMenuOpen(!roleMenuOpen)}
                  role="button"
                  tabIndex={0}
                  aria-expanded={roleMenuOpen}
                >
                  <span className={`avatar avatar-${activeRole.color}`}>
                    {activeRole.avatar}
                  </span>
                  <div className="rail-user-meta">
                    <b>{activeRole.name}</b>
                    <small>{activeRole.role}</small>
                  </div>
                  <ChevronDown size={14} className={`role-chevron ${roleMenuOpen ? 'open' : ''}`} />
                </div>

                {roleMenuOpen && (
                  <div className="role-dropdown-menu">
                    {mockRoles.map((role) => (
                      <div
                        key={role.id}
                        className={`role-option ${activeRole.id === role.id ? 'active' : ''}`}
                        onClick={() => {
                          setActiveRole(role)
                          setRoleMenuOpen(false)
                        }}
                      >
                        <span className={`avatar avatar-${role.color} avatar-xs`}>
                          {role.avatar}
                        </span>
                        <div>
                          <strong>{role.name}</strong>
                          <p>{role.role}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </aside>

            {/* Main Workspace Canvas */}
            <div className="workspace-main">
              {/* Window Topbar */}
              <div className="workspace-topbar">
                <div className="window-dots" aria-hidden="true">
                  <span className="dot dot-red" />
                  <span className="dot dot-yellow" />
                  <span className="dot dot-green" />
                </div>

                <div className="breadcrumb">
                  Workspace <span>/</span>{' '}
                  <strong>{moduleTabs.find((m) => m.id === activeModule)?.label}</strong>
                </div>

                <div className="demo-label">
                  <span className="live-amber-dot" /> LIVE INTERACTIVE ENVIRONMENT
                </div>
              </div>

              {/* Body Content */}
              <div className="workspace-body" key={activeModule}>
                {activeModule === 'overview' && (
                  <OverviewInteractive onNavigate={(mod) => setActiveModule(mod)} />
                )}
                {activeModule === 'attendance' && <AttendanceClicker />}
                {activeModule === 'fees' && <FeeDeskInteractive />}
                {activeModule === 'learning' && <AcademicsInteractive />}
              </div>
            </div>
          </div>
        </div>

        <p className="preview-caption">
          Illustrative interactive workspace · Live data syncs locally for instant testing. No live school data is transmitted.
        </p>
      </div>
    </section>
  )
}
