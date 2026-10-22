import { useState } from 'react'
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BookOpenCheck,
  CalendarDays,
  Check,
  ChevronDown,
  CircleDollarSign,
  ClipboardCheck,
  GraduationCap,
  Menu,
  MessagesSquare,
  ShieldCheck,
  UsersRound,
  WalletCards,
  X,
} from 'lucide-react'

const modules = [
  { id: 'overview', label: 'School overview', icon: GraduationCap },
  { id: 'attendance', label: 'Attendance', icon: ClipboardCheck },
  { id: 'fees', label: 'Fee desk', icon: WalletCards },
  { id: 'learning', label: 'Academics', icon: BookOpenCheck },
]

const moduleContent = {
  overview: {
    title: 'Good morning, school team',
    subtitle: 'A quick view of what needs attention today.',
    metrics: [
      ['Attendance', '92%', 'Across today\'s classes', 'green'],
      ['Fees received', '₹ 8.4L', 'This month · sample data', 'blue'],
      ['Classes running', '18', 'On today\'s timetable', 'orange'],
    ],
    heading: 'Today at a glance',
    rows: [
      ['Grade 6 · Section A', 'Attendance submitted', '08:42', 'done'],
      ['Fee desk', '8 receipts recorded today', '10:15', 'info'],
      ['Grade 8 · Mathematics', 'Assessment scheduled', '12:30', 'upcoming'],
    ],
  },
  attendance: {
    title: 'Attendance, without the register',
    subtitle: 'A focused class list for a quick, accountable roll call.',
    metrics: [
      ['Class strength', '32', 'Grade 6 · Section A', 'blue'],
      ['Marked present', '28', 'Demo classroom', 'green'],
      ['Needs follow-up', '4', 'Absent or not marked', 'orange'],
    ],
    heading: 'Class 6A · Morning assembly',
    rows: [
      ['Present', '24 students', '08:38', 'done'],
      ['Late', '4 students', '08:40', 'info'],
      ['Absent', '4 students', 'Admin review available', 'upcoming'],
    ],
  },
  fees: {
    title: 'A fee desk with a clear ledger',
    subtitle: 'See monthly charges, pending balance, receipts and payment history together.',
    metrics: [
      ['Monthly fee', '₹ 1,500', 'Example student', 'blue'],
      ['Pending balance', '₹ 3,000', 'Updated by the fee schedule', 'orange'],
      ['Last receipt', '₹ 1,500', 'Part payment · sample', 'green'],
    ],
    heading: 'Recent fee activity',
    rows: [
      ['Receipt CF-2048', 'Part payment recorded', 'Today', 'done'],
      ['Monthly charge', 'Current fee cycle', 'Today', 'info'],
      ['Balance reminder', 'Visible to linked parent', 'Today', 'upcoming'],
    ],
  },
  learning: {
    title: 'Keep learning work in one place',
    subtitle: 'Timetables, assignments, tests and results stay connected to the class.',
    metrics: [
      ['Upcoming tests', '3', 'Across this week', 'blue'],
      ['Open assignments', '12', 'Across active classes', 'orange'],
      ['Results published', '6', 'Ready for student view', 'green'],
    ],
    heading: 'Academic calendar',
    rows: [
      ['Science · Grade 7', 'Chapter assessment', 'Tomorrow', 'upcoming'],
      ['English · Grade 5', 'Assignment review', 'This week', 'info'],
      ['Mathematics · Grade 8', 'Results published', 'Yesterday', 'done'],
    ],
  },
}

const workflows = [
  {
    number: '01',
    time: 'Before the first bell',
    title: 'Teachers take attendance in class.',
    text: 'A mobile-friendly class list makes it easy to mark present, absent or late. Headcount happens at the end, and a submitted register is locked for the day.',
    color: 'workflow-lime',
  },
  {
    number: '02',
    time: 'Through the school day',
    title: 'The right update reaches the right people.',
    text: 'Assignments, timetable changes, announcements and results are organised by role, class and student instead of getting lost in separate channels.',
    color: 'workflow-blue',
  },
  {
    number: '03',
    time: 'At the fee desk',
    title: 'Every payment has a readable trail.',
    text: 'Staff can record instalments and payment modes, print receipts, and see the monthly fee alongside the current pending balance.',
    color: 'workflow-coral',
  },
]

const roles = [
  {
    id: '01',
    title: 'School leaders',
    description: 'See attendance, fee collection, classes, staff leave and follow-ups from one operational view.',
    icon: GraduationCap,
    className: 'role-leaders',
    link: 'A clearer school-wide picture',
  },
  {
    id: '02',
    title: 'Teachers',
    description: 'Take class attendance, manage a timetable, share assignments and publish assessment results.',
    icon: ClipboardCheck,
    className: 'role-teachers',
    link: 'Less admin between lessons',
  },
  {
    id: '03',
    title: 'Parents',
    description: 'Follow linked children, check attendance and fee balances, and keep up with school updates.',
    icon: UsersRound,
    className: 'role-parents',
    link: 'School information within reach',
  },
  {
    id: '04',
    title: 'Students',
    description: 'Find the timetable, assignments, test dates, attendance history and published results.',
    icon: BookOpenCheck,
    className: 'role-students',
    link: 'A more organised school day',
  },
]

const capabilities = [
  {
    number: '01',
    title: 'Attendance with accountability',
    text: 'Date-aware class registers, late marking, end-of-roll headcount, locked submissions and admin-reviewed rectification requests.',
    icon: ClipboardCheck,
    tone: 'capability-mint',
  },
  {
    number: '02',
    title: 'Fees that add up clearly',
    text: 'Monthly fee, pending balance, scholarships, partial payments, payment modes and printable receipts in a single record.',
    icon: CircleDollarSign,
    tone: 'capability-peach',
  },
  {
    number: '03',
    title: 'Academics in context',
    text: 'Class timetables, assignment uploads, test schedules, evaluation and results visible to the people who need them.',
    icon: BookOpenCheck,
    tone: 'capability-blue',
  },
  {
    number: '04',
    title: 'People and school records',
    text: 'Role-based workspaces for students, parents, teachers and administrators, with school-managed profile updates.',
    icon: UsersRound,
    tone: 'capability-lime',
  },
  {
    number: '05',
    title: 'Staff attendance and leave',
    text: 'Teacher attendance, leave requests and balances connect to the school’s administrative workflow.',
    icon: CalendarDays,
    tone: 'capability-lilac',
  },
  {
    number: '06',
    title: 'One experience across screens',
    text: 'A responsive interface designed for office desks, classroom phones and families checking in at home.',
    icon: MessagesSquare,
    tone: 'capability-teal',
  },
]

function Brand({ dark = false }) {
  return (
    <a className={`brand ${dark ? 'brand-dark' : ''}`} href="#top" aria-label="CampusFlow home">
      <span className="brand-symbol" aria-hidden="true"><i /><i /><i /></span>
      <span>CampusFlow</span>
    </a>
  )
}

function Header() {
  const [open, setOpen] = useState(false)
  const closeMenu = () => setOpen(false)

  return (
    <header className="site-header">
      <div className="header-inner">
        <Brand />
        <button className="menu-toggle" type="button" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
        <nav className={`main-nav ${open ? 'main-nav-open' : ''}`} aria-label="Main navigation">
          <a href="#product" onClick={closeMenu}>Product</a>
          <a href="#how-it-works" onClick={closeMenu}>How it works</a>
          <a href="#for-everyone" onClick={closeMenu}>Who it helps</a>
          <a href="#capabilities" onClick={closeMenu}>Capabilities</a>
          <a className="nav-cta" href="#product" onClick={closeMenu}>Explore CampusFlow <ArrowUpRight size={15} /></a>
        </nav>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero" id="top">
      <img className="hero-image" src="/assets/campusflow-school-hero.png" alt="Students and a teacher working together on a science project in a classroom" />
      <div className="hero-overlay" />
      <Header />
      <div className="hero-content page-wrap">
        <p className="eyebrow hero-eyebrow"><span className="eyebrow-dot" /> SCHOOL LIFE, CONNECTED</p>
        <h1>CampusFlow<span className="hero-period">.</span></h1>
        <p className="hero-lede">A clearer way to run a school.</p>
        <p className="hero-copy">Bring attendance, fees, academics and everyday communication into one considered workspace for your whole school community.</p>
        <div className="hero-actions">
          <a className="button button-lime" href="#product">Explore the platform <ArrowRight size={17} /></a>
          <a className="button button-quiet" href="#how-it-works">See the school day <ArrowDown size={16} /></a>
        </div>
        <div className="hero-roles">
          <span>One shared school day</span>
          <span className="role-divider" />
          <span>Admin</span><span>Teacher</span><span>Student</span><span>Parent</span>
        </div>
      </div>
      <div className="hero-foot page-wrap">
        <span>Less chasing. More time for learning.</span>
        <a href="#intro" aria-label="Scroll to learn more"><ArrowDown size={18} /></a>
      </div>
    </section>
  )
}

function Intro() {
  return (
    <section className="intro-section section-pad" id="intro">
      <div className="page-wrap intro-grid">
        <div>
          <p className="eyebrow eyebrow-ink">THE SCHOOL DAY, IN SYNC</p>
          <h2>One school day.<br /><span>Fewer loose ends.</span></h2>
        </div>
        <div className="intro-copy-block">
          <p className="intro-copy">A school runs on a thousand small handoffs: a class register, a fee receipt, a timetable change, a message home.</p>
          <p>CampusFlow brings those everyday moments together, so information has somewhere clear to go and each person can focus on their part of the day.</p>
          <a className="text-link" href="#how-it-works">Follow one school day <ArrowRight size={16} /></a>
        </div>
        <div className="intro-ribbon" aria-label="CampusFlow connects school operations">
          <span>CLASSROOM</span><ArrowRight size={17} /><span>SCHOOL OFFICE</span><ArrowRight size={17} /><span>FAMILY</span><ArrowRight size={17} /><span>BACK TO LEARNING</span>
        </div>
      </div>
    </section>
  )
}

function DashboardPreview({ active, setActive }) {
  const content = moduleContent[active]

  return (
    <section className="product-section section-pad" id="product">
      <div className="page-wrap">
        <div className="section-heading section-heading-row">
          <div>
            <p className="eyebrow eyebrow-ink">A LOOK INSIDE</p>
            <h2>One workspace.<br /><span>Many school moments.</span></h2>
          </div>
          <p className="section-summary">Switch between a few everyday views. Each one is shaped around the work that role needs to get done.</p>
        </div>
        <div className="preview-tabs" role="tablist" aria-label="Sample CampusFlow views">
          {modules.map(({ id, label, icon: Icon }) => (
            <button className={`preview-tab ${active === id ? 'preview-tab-active' : ''}`} type="button" key={id} role="tab" id={`tab-${id}`} aria-selected={active === id} aria-controls="sample-workspace" onClick={() => setActive(id)}>
              <Icon size={16} strokeWidth={1.8} /><span>{label}</span>
            </button>
          ))}
        </div>
        <div className="workspace-window" id="sample-workspace" role="tabpanel" aria-labelledby={`tab-${active}`}>
          <aside className="workspace-rail">
            <div className="rail-brand"><span className="brand-symbol brand-symbol-small"><i /><i /><i /></span><span>CampusFlow</span></div>
            <p className="rail-caption">SAMPLE SCHOOL</p>
            <div className="rail-item rail-item-current"><GraduationCap size={16} /> Overview</div>
            <div className="rail-item"><ClipboardCheck size={16} /> Attendance</div>
            <div className="rail-item"><WalletCards size={16} /> Fee desk</div>
            <div className="rail-item"><BookOpenCheck size={16} /> Academics</div>
            <div className="rail-item"><MessagesSquare size={16} /> Updates</div>
            <div className="rail-user"><span className="avatar avatar-violet">AM</span><span><b>Alex Morgan</b><small>School admin</small></span><ChevronDown size={14} /></div>
          </aside>
          <div className="workspace-main">
            <div className="workspace-topbar">
              <div className="breadcrumb">Workspace <span>/</span> {modules.find((item) => item.id === active)?.label}</div>
              <div className="demo-label"><span /> SAMPLE DATA</div>
            </div>
            <div className="workspace-body">
              <div className="workspace-title-row">
                <div><p className="workspace-date">MONDAY · SCHOOL DAY</p><h3>{content.title}</h3><p className="workspace-subtitle">{content.subtitle}</p></div>
                <button className="workspace-action" type="button" onClick={() => setActive(active === 'attendance' ? 'overview' : 'attendance')}>{active === 'attendance' ? 'Back to overview' : 'Open attendance'} <ArrowRight size={14} /></button>
              </div>
              <div className="metric-row">
                {content.metrics.map(([label, value, note, tone]) => (
                  <div className="metric" key={label}>
                    <span className={`metric-icon metric-${tone}`} aria-hidden="true"><Check size={15} /></span>
                    <span className="metric-label">{label}</span>
                    <strong>{value}</strong>
                    <small>{note}</small>
                  </div>
                ))}
              </div>
              <div className="activity-table">
                <div className="activity-heading"><h4>{content.heading}</h4><span>VIEW ALL <ArrowUpRight size={12} /></span></div>
                {content.rows.map(([name, description, time, status]) => (
                  <div className="activity-row" key={name}>
                    <span className={`activity-status status-${status}`}><Check size={12} /></span>
                    <b>{name}</b><span className="activity-description">{description}</span><time>{time}</time>
                  </div>
                ))}
              </div>
              <p className="sample-disclaimer">Illustrative workspace · all names and figures shown are sample data</p>
            </div>
          </div>
        </div>
        <p className="preview-caption">A product view should make the next step obvious, whether you are at a desk or between classes.</p>
      </div>
    </section>
  )
}

function HowItWorks() {
  return (
    <section className="workflow-section section-pad" id="how-it-works">
      <div className="page-wrap">
        <div className="workflow-heading">
          <p className="eyebrow eyebrow-ink">A DAY IN THE FLOW</p>
          <h2>Small actions.<br /><span>Better handoffs.</span></h2>
          <p>Good school software does not add another process. It helps the existing ones meet in the right place.</p>
        </div>
        <div className="workflow-list">
          {workflows.map((item) => (
            <article className={`workflow-item ${item.color}`} key={item.number}>
              <span className="workflow-number">{item.number}</span>
              <span className="workflow-time">{item.time}</span>
              <div><h3>{item.title}</h3><p>{item.text}</p></div>
              <ArrowUpRight className="workflow-arrow" size={22} />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Roles() {
  return (
    <section className="roles-section section-pad" id="for-everyone">
      <div className="page-wrap">
        <div className="section-heading section-heading-row roles-heading">
          <div><p className="eyebrow eyebrow-light">ONE COMMUNITY</p><h2>Made for the people<br />who make a school.</h2></div>
          <p className="section-summary">Different responsibilities, different views. CampusFlow gives each role a workspace that feels relevant to their day.</p>
        </div>
        <div className="roles-grid">
          {roles.map(({ id, title, description, icon: Icon, className, link }) => (
            <article className={`role-panel ${className}`} key={id}>
              <div className="role-panel-top"><span>{id}</span><Icon size={22} strokeWidth={1.7} /></div>
              <h3>{title}</h3>
              <p>{description}</p>
              <div className="role-panel-link">{link}<ArrowRight size={15} /></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Capabilities() {
  return (
    <section className="capabilities-section section-pad" id="capabilities">
      <div className="page-wrap">
        <div className="capabilities-head">
          <div><p className="eyebrow eyebrow-ink">THE EVERYDAY TOOLKIT</p><h2>Less scattered work.<br /><span>More connected school life.</span></h2></div>
          <p>Bring the essential routines together without making the interface another thing to manage.</p>
        </div>
        <div className="capability-grid">
          {capabilities.map(({ number, title, text, icon: Icon, tone }) => (
            <article className="capability" key={number}>
              <div className={`capability-mark ${tone}`}><Icon size={20} strokeWidth={1.8} /></div>
              <span className="capability-number">{number}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
        <div className="adapt-strip">
          <div className="adapt-symbol"><ShieldCheck size={22} /></div>
          <p><strong>School records stay school-managed.</strong> Personal profile changes and operational actions belong with the appropriate school staff.</p>
          <span className="adapt-tag">A clear line of responsibility</span>
        </div>
      </div>
    </section>
  )
}

function Faq() {
  const items = [
    ['Can different school roles use different views?', 'Yes. CampusFlow is organised around administrator, teacher, student and parent workflows, so each role can focus on the information relevant to them.'],
    ['Can teachers use it from a phone?', 'The interface is responsive and the key classroom workflows, including attendance, are designed to work on smaller screens.'],
    ['Can parents see more than one child?', 'The parent workspace is designed to bring linked child profiles and their school information together under one parent account.'],
    ['Can our school see the product before onboarding?', 'This page includes an interactive illustrative workspace so teams can explore the key workflows before discussing a school-specific setup.'],
  ]
  return (
    <section className="faq-section section-pad" id="questions">
      <div className="page-wrap faq-grid">
        <div><p className="eyebrow eyebrow-ink">GOOD QUESTIONS</p><h2>Before the<br /><span>first bell.</span></h2><p className="faq-lede">A few things school teams usually want to know.</p></div>
        <div className="faq-list">
          {items.map(([question, answer]) => <details className="faq-item" key={question}><summary>{question}<span className="faq-plus"><ChevronDown size={17} /></span></summary><p>{answer}</p></details>)}
        </div>
      </div>
    </section>
  )
}

function FinalCta() {
  return (
    <section className="cta-section">
      <div className="page-wrap cta-inner">
        <div><p className="eyebrow eyebrow-ink">A BETTER SCHOOL DAY STARTS WITH A BETTER HANDOFF</p><h2>Bring the school day<br />back into focus.</h2></div>
        <a className="button button-dark" href="#product">Explore the sample workspace <ArrowRight size={17} /></a>
        <p className="cta-note">CampusFlow · a school operations platform by Vyom Technologies</p>
      </div>
    </section>
  )
}

function Footer({ setActive }) {
  return (
    <footer className="site-footer">
      <div className="page-wrap footer-main">
        <div className="footer-brand"><Brand /><p>A calmer way to bring school operations together.</p></div>
        <div className="footer-links"><span>EXPLORE</span><a href="#product">Product</a><a href="#how-it-works">How it works</a><a href="#for-everyone">Who it helps</a><a href="#capabilities">Capabilities</a></div>
        <div className="footer-links"><span>THE PLATFORM</span><a href="#product" onClick={() => setActive('attendance')}>Attendance</a><a href="#product" onClick={() => setActive('fees')}>Fee desk</a><a href="#product" onClick={() => setActive('learning')}>Academics</a></div>
        <div className="footer-note"><span>BUILT FOR SCHOOL DAYS</span><p>Designed around the people, routines and small moments that keep a school moving.</p><a href="#top">Back to top <ArrowUpRight size={14} /></a></div>
      </div>
      <div className="page-wrap footer-bottom"><Brand /><span>© {new Date().getFullYear()} Vyom Technologies · CampusFlow</span><a href="#questions">Questions <ArrowUpRight size={13} /></a></div>
    </footer>
  )
}

function App() {
  const [active, setActive] = useState('overview')

  return (
    <>
      <Hero />
      <Intro />
      <DashboardPreview active={active} setActive={setActive} />
      <HowItWorks />
      <Roles />
      <Capabilities />
      <Faq />
      <FinalCta />
      <Footer setActive={setActive} />
    </>
  )
}

export default App
