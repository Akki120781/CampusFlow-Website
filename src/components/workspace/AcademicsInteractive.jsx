import { useState } from 'react'
import { Award, BookOpenCheck, Calendar, Check, Clock, Download, FileSpreadsheet, Sparkles, UserCheck } from 'lucide-react'
import { sampleTimetable } from '../../data/content'

export function AcademicsInteractive() {
  const [activeTab, setActiveTab] = useState('timetable')
  const [reportGenerated, setReportGenerated] = useState(false)

  const competencies = [
    { skill: 'Conceptual Clarity & STEM', score: 92, grade: 'A1', benchmark: 'Top 5% in Grade' },
    { skill: 'Critical Thinking & Enquiry', score: 88, grade: 'A2', benchmark: 'Exceeds standard' },
    { skill: 'Collaboration & Team Projects', score: 95, grade: 'A1', benchmark: 'Outstanding' },
    { skill: 'Creative & Linguistic Expression', score: 85, grade: 'A2', benchmark: 'Consistent progress' },
  ]

  return (
    <div className="academics-interactive">
      <div className="academics-subnav">
        <button
          className={`subnav-btn ${activeTab === 'timetable' ? 'active' : ''}`}
          onClick={() => setActiveTab('timetable')}
        >
          <Calendar size={13} /> Class Timetable (Grade 6A)
        </button>
        <button
          className={`subnav-btn ${activeTab === 'hpc' ? 'active' : ''}`}
          onClick={() => setActiveTab('hpc')}
        >
          <Award size={13} /> CBSE Holistic Progress Card (HPC)
        </button>
      </div>

      {activeTab === 'timetable' && (
        <div className="timetable-view">
          <div className="timetable-header-strip">
            <div>
              <strong>Monday Class Schedule</strong>
              <span className="mono-sub">Grade 6 · Section A · Class Teacher: Mrs. S. Sen</span>
            </div>
            <span className="live-period-tag">
              Period 2 In Session
            </span>
          </div>

          <div className="periods-grid">
            {sampleTimetable.map((period, idx) => (
              <div key={idx} className={`period-card period-${period.status}`}>
                <div className="period-top">
                  <span className="period-time"><Clock size={11} /> {period.time}</span>
                  <span className={`status-pill pill-${period.status}`}>{period.status.toUpperCase()}</span>
                </div>
                <h4 className="period-subject">{period.subject}</h4>
                <div className="period-details">
                  <span>{period.teacher}</span>
                  <span className="room-badge">{period.room}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="timetable-footer-notice">
            <Sparkles size={13} />
            <span>Teacher on leave? <strong>CampusFlow Substitution Assistant</strong> automatically calculates and proposes free-period teachers without timetable clashes.</span>
          </div>
        </div>
      )}

      {activeTab === 'hpc' && (
        <div className="hpc-view">
          <div className="hpc-header">
            <div>
              <h4>NEP 2020 360° Holistic Student Assessment</h4>
              <p>Continuous evaluation integrating academic performance, analytical abilities, and life skills.</p>
            </div>
            <button
              className="button button-lime button-sm"
              onClick={() => setReportGenerated(!reportGenerated)}
            >
              <Download size={13} /> {reportGenerated ? 'Report Card Ready' : 'Generate CBSE Card'}
            </button>
          </div>

          <div className="competencies-list">
            {competencies.map((item, idx) => (
              <div key={idx} className="competency-row">
                <div className="comp-info">
                  <strong>{item.skill}</strong>
                  <span className="comp-benchmark">{item.benchmark}</span>
                </div>
                <div className="comp-bar-col">
                  <div className="comp-bar-track">
                    <div className="comp-bar-fill" style={{ width: `${item.score}%` }} />
                  </div>
                  <span className="mono-score">{item.score}%</span>
                </div>
                <span className="comp-grade">{item.grade}</span>
              </div>
            ))}
          </div>

          {reportGenerated && (
            <div className="report-success-banner">
              <Check size={16} className="text-green" />
              <span>
                <strong>Report card generated!</strong> Downloadable PDF with digital principal seal ready for parent portal view.
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
