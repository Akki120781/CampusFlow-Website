import { useState } from 'react'
import { Check, Clock, UserX, RotateCcw, Send, Sparkles, AlertCircle } from 'lucide-react'
import { sampleRoster } from '../../data/content'
import { AnimatedCounter } from './AnimatedCounter'

export function AttendanceClicker() {
  const [students, setStudents] = useState(sampleRoster)
  const [filter, setFilter] = useState('all')
  const [submitted, setSubmitted] = useState(false)
  const [toastMessage, setToastMessage] = useState(null)

  const total = students.length
  const presentCount = students.filter((s) => s.status === 'present').length
  const absentCount = students.filter((s) => s.status === 'absent').length
  const lateCount = students.filter((s) => s.status === 'late').length
  const attendanceRate = total > 0 ? Math.round((presentCount / total) * 100) : 0

  function toggleStatus(id) {
    if (submitted) {
      triggerToast('Register is locked for today. Unlock to make edits.', 'warning')
      return
    }
    setStudents((prev) =>
      prev.map((student) => {
        if (student.id !== id) return student
        const nextStatus =
          student.status === 'present' ? 'absent' : student.status === 'absent' ? 'late' : 'present'
        return { ...student, status: nextStatus }
      })
    )
  }

  function setStudentStatus(id, newStatus, e) {
    e.stopPropagation()
    if (submitted) {
      triggerToast('Register is locked. Unlock to modify.', 'warning')
      return
    }
    setStudents((prev) =>
      prev.map((s) => (s.id === id ? { ...s, status: newStatus } : s))
    )
  }

  function markAll(status) {
    if (submitted) return
    setStudents((prev) => prev.map((s) => ({ ...s, status })))
    triggerToast(`Marked all ${total} students as ${status}`, 'info')
  }

  function resetRoster() {
    setStudents(sampleRoster)
    setSubmitted(false)
    triggerToast('Roster reset to initial demo state', 'info')
  }

  function submitRegister() {
    if (submitted) {
      setSubmitted(false)
      triggerToast('Register unlocked. You can now modify attendance.', 'info')
    } else {
      setSubmitted(true)
      triggerToast(`✓ Register locked! ${absentCount} absentee alerts sent via WhatsApp & SMS.`, 'success')
    }
  }

  function triggerToast(text, type = 'info') {
    setToastMessage({ text, type })
    setTimeout(() => setToastMessage(null), 3600)
  }

  const filteredStudents = students.filter((s) => {
    if (filter === 'present') return s.status === 'present'
    if (filter === 'absent') return s.status === 'absent'
    if (filter === 'late') return s.status === 'late'
    return true
  })

  return (
    <div className="attendance-clicker">
      {/* Toast Notification */}
      {toastMessage && (
        <div className={`clicker-toast toast-${toastMessage.type}`}>
          <Sparkles size={14} />
          <span>{toastMessage.text}</span>
        </div>
      )}

      {/* Top Telemetry & Live Metrics */}
      <div className="clicker-metrics-grid">
        <div className="clicker-metric metric-green">
          <div className="metric-header">
            <span className="metric-tag">PRESENT</span>
            <span className="metric-icon-badge"><Check size={13} /></span>
          </div>
          <div className="metric-val">
            <AnimatedCounter value={presentCount} />
            <small>/{total}</small>
          </div>
          <p className="metric-sub">
            <AnimatedCounter value={attendanceRate} suffix="%" /> of class
          </p>
        </div>

        <div className="clicker-metric metric-coral">
          <div className="metric-header">
            <span className="metric-tag">ABSENT</span>
            <span className="metric-icon-badge"><UserX size={13} /></span>
          </div>
          <div className="metric-val">
            <AnimatedCounter value={absentCount} />
            <small>students</small>
          </div>
          <p className="metric-sub">Auto WhatsApp queued</p>
        </div>

        <div className="clicker-metric metric-orange">
          <div className="metric-header">
            <span className="metric-tag">LATE ARRIVALS</span>
            <span className="metric-icon-badge"><Clock size={13} /></span>
          </div>
          <div className="metric-val">
            <AnimatedCounter value={lateCount} />
            <small>after 08:30</small>
          </div>
          <p className="metric-sub">Gate pass stamped</p>
        </div>
      </div>

      {/* Headcount Ratio Visualizer Bar */}
      <div className="headcount-bar-wrap">
        <div className="headcount-label-row">
          <span>Headcount Ratio (Grade 6 · Section A)</span>
          <span className="mono-text">{presentCount} Present · {absentCount} Absent · {lateCount} Late</span>
        </div>
        <div className="headcount-bar">
          <div
            className="bar-segment bar-present"
            style={{ width: `${(presentCount / total) * 100}%` }}
            title={`Present: ${presentCount}`}
          />
          <div
            className="bar-segment bar-absent"
            style={{ width: `${(absentCount / total) * 100}%` }}
            title={`Absent: ${absentCount}`}
          />
          <div
            className="bar-segment bar-late"
            style={{ width: `${(lateCount / total) * 100}%` }}
            title={`Late: ${lateCount}`}
          />
        </div>
      </div>

      {/* Controls & Quick Action Toolbar */}
      <div className="clicker-toolbar">
        <div className="filter-pill-group">
          <button
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All ({total})
          </button>
          <button
            className={`filter-btn ${filter === 'present' ? 'active' : ''}`}
            onClick={() => setFilter('present')}
          >
            Present ({presentCount})
          </button>
          <button
            className={`filter-btn ${filter === 'absent' ? 'active' : ''}`}
            onClick={() => setFilter('absent')}
          >
            Absent ({absentCount})
          </button>
          <button
            className={`filter-btn ${filter === 'late' ? 'active' : ''}`}
            onClick={() => setFilter('late')}
          >
            Late ({lateCount})
          </button>
        </div>

        <div className="clicker-actions">
          <button
            className="action-link-btn"
            onClick={() => markAll('present')}
            disabled={submitted}
            title="Mark all as present"
          >
            <Check size={13} /> Mark All Present
          </button>
          <button
            className="action-link-btn"
            onClick={resetRoster}
            title="Reset roster"
          >
            <RotateCcw size={13} /> Reset
          </button>
          <button
            className={`submit-register-btn ${submitted ? 'locked' : ''}`}
            onClick={submitRegister}
          >
            {submitted ? 'Unlock Register' : 'Submit & Lock Register'}
            <Send size={13} />
          </button>
        </div>
      </div>

      <p className="interactive-instruction-tip">
        <Sparkles size={13} className="tip-sparkle" />
        <strong>Try it:</strong> Click on any student card or tap status buttons to toggle their attendance status live!
      </p>

      {/* Student Cards Roster */}
      <div className="student-roster-grid">
        {filteredStudents.map((student) => (
          <div
            key={student.id}
            className={`student-card status-${student.status} ${submitted ? 'card-locked' : ''}`}
            onClick={() => toggleStatus(student.id)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && toggleStatus(student.id)}
          >
            <div className="student-avatar-col">
              <span className={`student-avatar avatar-${student.gender}`}>
                {student.avatar}
              </span>
              <span className="roll-mono">#{student.roll}</span>
            </div>

            <div className="student-info-col">
              <strong>{student.name}</strong>
              <div className="student-tags">
                <span className="bus-tag">{student.busRoute}</span>
                <span className={`badge-pill badge-${student.status}`}>
                  {student.status.toUpperCase()}
                </span>
              </div>
            </div>

            <div className="student-toggle-col">
              <button
                className={`toggle-chip chip-p ${student.status === 'present' ? 'chip-active' : ''}`}
                onClick={(e) => setStudentStatus(student.id, 'present', e)}
                title="Mark Present"
              >
                P
              </button>
              <button
                className={`toggle-chip chip-a ${student.status === 'absent' ? 'chip-active' : ''}`}
                onClick={(e) => setStudentStatus(student.id, 'absent', e)}
                title="Mark Absent"
              >
                A
              </button>
              <button
                className={`toggle-chip chip-l ${student.status === 'late' ? 'chip-active' : ''}`}
                onClick={(e) => setStudentStatus(student.id, 'late', e)}
                title="Mark Late"
              >
                L
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
