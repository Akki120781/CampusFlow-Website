import {
  BookOpenCheck,
  Building2,
  Bus,
  CalendarDays,
  Check,
  CircleDollarSign,
  ClipboardCheck,
  FileSpreadsheet,
  GraduationCap,
  MessagesSquare,
  ShieldCheck,
  Sparkles,
  UsersRound,
  WalletCards,
} from 'lucide-react'

export const sampleRoster = [
  { id: 'S-101', name: 'Aarav Sharma', roll: '01', status: 'present', avatar: 'AS', gender: 'M', busRoute: 'Route 4' },
  { id: 'S-102', name: 'Ananya Iyer', roll: '02', status: 'present', avatar: 'AI', gender: 'F', busRoute: 'Route 2' },
  { id: 'S-103', name: 'Devansh Patel', roll: '03', status: 'absent', avatar: 'DP', gender: 'M', busRoute: 'Walker' },
  { id: 'S-104', name: 'Diya Mukherjee', roll: '04', status: 'present', avatar: 'DM', gender: 'F', busRoute: 'Route 4' },
  { id: 'S-105', name: 'Kabir Verma', roll: '05', status: 'late', avatar: 'KV', gender: 'M', busRoute: 'Route 1' },
  { id: 'S-106', name: 'Meera Nair', roll: '06', status: 'present', avatar: 'MN', gender: 'F', busRoute: 'Route 3' },
  { id: 'S-107', name: 'Rohan Deshmukh', roll: '07', status: 'present', avatar: 'RD', gender: 'M', busRoute: 'Route 2' },
  { id: 'S-108', name: 'Zoya Khan', roll: '08', status: 'present', avatar: 'ZK', gender: 'F', busRoute: 'Walker' },
]

export const sampleFeeStudents = [
  { id: 'CF-8041', name: 'Aarav Sharma', grade: 'Grade 6 · Sec A', totalFee: 18500, paid: 18500, due: 0, status: 'paid', receipt: 'RCP-601', mode: 'UPI / Razorpay' },
  { id: 'CF-8042', name: 'Ananya Iyer', grade: 'Grade 6 · Sec A', totalFee: 18500, paid: 12000, due: 6500, status: 'partial', receipt: 'RCP-602', mode: 'Netbanking' },
  { id: 'CF-8043', name: 'Devansh Patel', grade: 'Grade 6 · Sec A', totalFee: 21000, paid: 0, due: 21000, status: 'overdue', receipt: 'Pending', mode: 'Cheque' },
  { id: 'CF-8044', name: 'Diya Mukherjee', grade: 'Grade 6 · Sec A', totalFee: 18500, paid: 18500, due: 0, status: 'paid', receipt: 'RCP-604', mode: 'Cash at Desk' },
]

export const sampleTimetable = [
  { period: 'Period 1', time: '08:45 - 09:30', subject: 'Mathematics', teacher: 'Mrs. S. Sen', room: 'Room 204', status: 'completed' },
  { period: 'Period 2', time: '09:30 - 10:15', subject: 'English Literature', teacher: 'Mr. R. Bhatia', room: 'Room 204', status: 'in-progress' },
  { period: 'Period 3', time: '10:30 - 11:15', subject: 'Physics Lab', teacher: 'Dr. K. Swaminathan', room: 'Lab B', status: 'upcoming' },
  { period: 'Period 4', time: '11:15 - 12:00', subject: 'History & Civics', teacher: 'Ms. P. George', room: 'Room 204', status: 'upcoming' },
]

export const moduleTabs = [
  { id: 'overview', label: 'School Overview', icon: GraduationCap, badge: 'AI Live' },
  { id: 'attendance', label: 'Smart Attendance', icon: ClipboardCheck, badge: 'Interactive' },
  { id: 'fees', label: 'Fee FinTech Desk', icon: WalletCards, badge: 'Ledger' },
  { id: 'learning', label: 'Academics & HPC', icon: BookOpenCheck, badge: 'CBSE Ready' },
]

export const workflows = [
  {
    number: '01',
    time: '08:15 AM · Before the First Bell',
    title: 'Instant classroom roll call & parent WhatsApp alert.',
    text: 'Teachers tap present, absent or late on any phone or tablet. Submitted registers lock automatically, trigger instantaneous SMS/WhatsApp to parents, and feed the central office dashboard.',
    tag: 'Zero paperwork',
    color: 'workflow-lime',
  },
  {
    number: '02',
    time: '11:30 AM · Through the School Day',
    title: 'Timetable substitution & digital academic records.',
    text: 'When a teacher takes leave, CampusFlow suggests intelligent free-period substitutions in 1-click. Lesson plans, homework files, and exam marks stay tied to the student profile.',
    tag: 'Smart automation',
    color: 'workflow-blue',
  },
  {
    number: '03',
    time: '02:45 PM · At the Fee & Office Desk',
    title: 'Transparent ledger, digital slips & live collections.',
    text: 'Record cash, cheque, UPI or netbanking instalments. Receipts print instantly with QR codes while parents view updated remaining dues directly on their mobile app.',
    tag: 'Traceable finances',
    color: 'workflow-coral',
  },
]

export const roles = [
  {
    id: '01',
    title: 'School Principals & Owners',
    tagline: 'Complete 360° operational visibility',
    description: 'Track daily attendance trends, live fee inflows, defaulter tallies, teacher leave balances, and school compliance from a single executive dashboard.',
    icon: GraduationCap,
    className: 'role-leaders',
    metrics: ['Live fee inflow updates', 'Teacher & staff leave approval', 'CBSE / State compliance reports'],
    link: 'Explore Leader View',
  },
  {
    id: '02',
    title: 'Teachers & Academic Staff',
    tagline: 'Less paperwork, more teaching',
    description: 'Mark attendance in 30 seconds, share homework attachments, enter term marks with automatic grade calculations, and generate Holistic Progress Cards.',
    icon: ClipboardCheck,
    className: 'role-teachers',
    metrics: ['30-sec mobile attendance', '1-click exam marks entry', 'Automated lesson planners'],
    link: 'Explore Teacher Suite',
  },
  {
    id: '03',
    title: 'Parents & Families',
    tagline: 'Connected to every school milestone',
    description: 'Switch between linked children, receive real-time bus tracking alerts, pay school fees safely online, and download report cards without queueing at the counter.',
    icon: UsersRound,
    className: 'role-parents',
    metrics: ['Real-time bus GPS tracking', 'Instant fee payment receipts', 'Direct teacher notices'],
    link: 'Explore Parent App',
  },
  {
    id: '04',
    title: 'Students & Learners',
    tagline: 'Organised school routine in their pocket',
    description: 'Access weekly timetables, download study material and assignments, check upcoming test dates, and view published marks with feedback.',
    icon: BookOpenCheck,
    className: 'role-students',
    metrics: ['Daily timetable & bell alerts', 'Homework submission portal', 'Test marks & report cards'],
    link: 'Explore Student Portal',
  },
]

export const platformModules = [
  {
    number: '01',
    category: 'ATTENDANCE & SAFETY',
    title: 'Smart Attendance & Biometrics',
    summary: 'App-based roll call, RFID/Face biometric sync, and automatic WhatsApp absentee alerts.',
    features: [
      'App roll call: Present, Absent, Half-Day & Late marking in under 30 seconds',
      'Hardware integration with biometric fingerprint & face-recognition devices',
      'Instant automated WhatsApp & SMS alerts to parents upon absence',
      'Teacher attendance, leave quota balance, and digital approval workflows',
    ],
    icon: ClipboardCheck,
    tone: 'capability-mint',
    badge: 'Hardware Ready',
  },
  {
    number: '02',
    category: 'FINANCE & BILLING',
    title: 'Fee Management & FinTech Desk',
    summary: 'Transparent multi-head fee ledgers, automated online receipts, and defaulter tracking.',
    features: [
      'Custom fee structures: tuition, transport, lab, admission & sports fees',
      'Online payment gateway integration (UPI, QR, Cards, Netbanking)',
      'Automated digital fee slips with unique receipt numbers and school seal',
      'Defaulter lists with 1-click scheduled reminder SMS to parent phones',
    ],
    icon: CircleDollarSign,
    tone: 'capability-peach',
    badge: 'Zero Revenue Leakage',
  },
  {
    number: '03',
    category: 'CURRICULUM & TESTING',
    title: 'Academics & Examination (HPC)',
    summary: 'Holistic Progress Cards (CBSE/State Board), exam schedules, marks entry, and report cards.',
    features: [
      'CBSE Holistic Progress Card (HPC) & NEP 2020 360-degree assessment schema',
      'Term & unit test scheduling with automated admit card generation',
      'Subject teacher marks entry with customizable grace marks and grading scales',
      '1-click printable multi-page report cards with principal signature stamps',
    ],
    icon: BookOpenCheck,
    tone: 'capability-blue',
    badge: 'NEP 2020 Compliant',
  },
  {
    number: '04',
    category: 'STUDENT SAFETY',
    title: 'Bus Transport & GPS Fleet',
    summary: 'Real-time vehicle GPS tracking, bus attendance, and parent arrival notifications.',
    features: [
      'Live GPS bus location streaming for school transport coordinators',
      'Conductor app for student boarding and deboarding check-in',
      'Proximity geofence notifications to parents 10 minutes before bus arrival',
      'Route management, driver license tracking, and vehicle maintenance logs',
    ],
    icon: Bus,
    tone: 'capability-teal',
    badge: 'Live GPS',
  },
  {
    number: '05',
    category: 'OPERATIONS & HR',
    title: 'Administration, HR & Payroll',
    summary: 'Comprehensive staff profile manager, leave impact calculation, and asset inventory.',
    features: [
      'Complete digitized teacher & staff service records and qualification files',
      'Automated payroll calculation incorporating paid/unpaid leaves and PF/ESI deductions',
      'School asset & inventory tracking: lab equipment, uniforms, books and sports kits',
      'Role-based granular permission system for admin, accountant, clerk & principal',
    ],
    icon: Building2,
    tone: 'capability-lime',
    badge: 'Secure Operations',
  },
  {
    number: '06',
    category: 'ENGAGEMENT',
    title: 'Communication & Mobile Apps',
    summary: 'Five specialized apps, one shared database. Seamless parent-teacher connectivity.',
    features: [
      'Dedicated iOS & Android mobile apps for Parents, Teachers, and Drivers',
      'Direct WhatsApp broadcast engine for official school circulars and weather alerts',
      'Parent-teacher 1-on-1 messaging with privacy filters (no personal phone numbers shared)',
      'Digital diary for daily homework, teacher remarks, and event calendars',
    ],
    icon: MessagesSquare,
    tone: 'capability-lilac',
    badge: 'Mobile Native',
  },
]

export const expansionAreas = [
  'Admissions CRM & Inquiry Follow-ups',
  'Automated Timetable & Teacher Substitution Engine',
  'Digital Library Management with Barcode/ISBN',
  'Hostel & Boarding House Room Allotment',
  'Infirmary & Student Medical Health Records',
  'AI Question Paper & Quiz Generator',
  'Alumni Network & Placement Directory',
  'Multi-Branch Consolidated Group Analytics',
]

export const processFlows = [
  {
    number: '01',
    title: 'Morning Roll Call & Safety Broadcast',
    summary: 'From classroom headcount to parent phone in under 60 seconds.',
    tone: 'flow-attendance',
    steps: [
      { role: 'Teacher', title: 'Tap Roll Call', detail: 'Opens class list on phone; marks present, absent, or late in 30 seconds.' },
      { role: 'CampusFlow Engine', title: 'Verify & Lock', detail: 'Headcount matches expected strength; submitted register is cryptographically locked.' },
      { role: 'Automated Broadcast', title: 'Instant Parent Alert', detail: 'Absentee SMS/WhatsApp message sent directly to linked guardian phones.' },
      { role: 'School Office', title: 'Real-time Tally', detail: 'Admin dashboard reflects school-wide attendance % without ringing a single bell.' },
    ],
  },
  {
    number: '02',
    title: 'Fee Collection & Automated Ledger',
    summary: 'From counter payment or online link to reconciled school balance.',
    tone: 'flow-fees',
    steps: [
      { role: 'School Accountant', title: 'Select Student Profile', detail: 'Looks up student ID; pending tuition, lab, and transport charges display immediately.' },
      { role: 'Parent / Cashier', title: 'Pay Online or at Desk', detail: 'Accepts UPI QR, netbanking, cheque or cash instalment with partial payment support.' },
      { role: 'Ledger Engine', title: 'Instant Reconcile', detail: 'Generates branded PDF receipt with verification barcode and updates fee ledger.' },
      { role: 'Parent Mobile App', title: 'Receipt in Pocket', detail: 'Parent receives instant digital slip; zero disputes at month-end.' },
    ],
  },
  {
    number: '03',
    title: 'Examination, Marks & Holistic Progress Card',
    summary: 'From teacher question plan to published 360-degree report card.',
    tone: 'flow-learning',
    steps: [
      { role: 'Academic Dean', title: 'Publish Date Sheet', detail: 'Schedules term exams, seating plans, and subject maximum marks across classes.' },
      { role: 'Subject Teacher', title: 'Batch Marks Entry', detail: 'Enters theory and practical marks with instant validation against total marks.' },
      { role: 'CampusFlow HPC', title: 'Compute Grades & Skills', detail: 'Calculates percentiles, co-scholastic rubrics, and attendance correlation automatically.' },
      { role: 'Parent & Student', title: 'Download Report Card', detail: 'Parents view tamper-proof report card online or print standard CBSE compliant sheet.' },
    ],
  },
]

export const testimonials = [
  {
    quote: 'CampusFlow has transformed the operational rhythm of our campus. Fee collections that previously took weeks of telephone follow-ups now reconcile seamlessly, and our teachers have reclaimed an average of 45 minutes every single day.',
    author: 'Dr. Anita Deshmukh',
    role: 'Principal, Heritage Public School, Mumbai',
    stats: '1,450 Students · 68 Staff Members',
    rating: 5,
  },
  {
    quote: 'The interactive attendance roll call and instant WhatsApp notification feature gives parents complete peace of mind. For an institution operating 18 school buses across two campuses, the real-time tracking is indispensable.',
    author: 'Col. Rajeshwardas Nair (Retd.)',
    role: 'Managing Trustee, Bangalore Global Academy',
    stats: '2,200 Students · 24 Bus Routes',
    rating: 5,
  },
  {
    quote: 'Switching from our old clunky ERP to CampusFlow felt like upgrading from a chalkboard to modern software. The UI is calm, purposeful, and intuitive even for teachers who are not tech-savvy.',
    author: 'Sister Mary Varghese',
    role: 'Head of Academics, St. Jude Convent School',
    stats: '980 Students · 42 Classrooms',
    rating: 5,
  },
]

export const faqItems = [
  {
    question: 'How is CampusFlow different from legacy school ERP software?',
    answer: 'Legacy school software is usually bloated, slow, and requires days of manual data entry. CampusFlow is built as a unified, high-speed operating system with clean typography, responsive mobile interfaces for teachers and parents, automated WhatsApp alerts, and zero clutter.',
  },
  {
    question: 'Can teachers mark attendance from their smartphones without an app install?',
    answer: 'Yes! The teacher workspace is a high-performance progressive web app. Teachers can complete morning attendance from any standard smartphone browser in under 30 seconds, or use our native Android/iOS teacher app.',
  },
  {
    question: 'Does CampusFlow support CBSE Holistic Progress Card (HPC) guidelines?',
    answer: 'Yes. Our academic module includes pre-built evaluation rubrics compliant with the National Education Policy (NEP 2020) and CBSE 360-degree Holistic Progress Cards, covering both scholastic subjects and co-scholastic competencies.',
  },
  {
    question: 'How does fee collection work? Can parents pay via UPI and credit cards?',
    answer: 'CampusFlow integrates directly with verified payment gateways (Razorpay, Cashfree, or school-nominated merchant accounts). Parents can pay tuition, transport, or lab fees via UPI, credit/debit cards, and netbanking, with automatic receipts generated instantly.',
  },
  {
    question: 'Can our school data be migrated from our current spreadsheet or old software?',
    answer: 'Absolutely. Our onboarding team provides a 1-click Excel/CSV bulk import tool for student rosters, parent contacts, teacher profiles, and past fee balances, ensuring your school transitions smoothly over a single weekend.',
  },
  {
    question: 'Is student and school data secure and compliant with data privacy laws?',
    answer: 'Yes. All records are encrypted in transit (TLS 1.3) and at rest (AES-256). CampusFlow enforces strict role-based access control, automated offsite daily backups, and is built to comply with India’s Digital Personal Data Protection (DPDP) standards.',
  },
]
