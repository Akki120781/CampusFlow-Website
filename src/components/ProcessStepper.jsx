import { useState } from 'react'
import { ArrowRight, CheckCircle2, ChevronRight, Sparkles } from 'lucide-react'
import { processFlows } from '../data/content'

export function ProcessStepper() {
  const [activeFlowIndex, setActiveFlowIndex] = useState(0)
  const currentFlow = processFlows[activeFlowIndex]

  return (
    <section className="process-section section-pad" id="flows">
      <div className="page-wrap">
        <div className="process-heading" data-reveal>
          <div>
            <div className="eyebrow-pill eyebrow-ink">
              <span className="pill-dot" />
              <span>THE OPERATIONAL HANDOFF BLUEPRINT</span>
            </div>
            <h2>
              How a record travels.<br />
              <span>Transparent in every step.</span>
            </h2>
          </div>
          <p>
            Experience how CampusFlow connects disparate school departments. See what happens behind the scenes from the moment an action is taken.
          </p>
        </div>

        {/* Stepper Navigation Pills */}
        <div className="process-selector-tabs" data-reveal>
          {processFlows.map((flow, idx) => (
            <button
              key={flow.number}
              className={`flow-selector-btn ${activeFlowIndex === idx ? 'active' : ''}`}
              onClick={() => setActiveFlowIndex(idx)}
            >
              <span className="flow-tab-num">{flow.number}</span>
              <span className="flow-tab-title">{flow.title}</span>
            </button>
          ))}
        </div>

        {/* Active Flow Timeline */}
        <div className={`process-flow-card ${currentFlow.tone}`} data-reveal>
          <div className="flow-card-head">
            <div className="flow-card-meta">
              <span className="flow-loop-badge">OPERATIONAL WORKFLOW #{currentFlow.number}</span>
              <h3>{currentFlow.title}</h3>
              <p>{currentFlow.summary}</p>
            </div>

            <div className="flow-step-counter">
              <span className="step-big-mono">04</span>
              <span className="step-sub-mono">HANDOFF STAGES</span>
            </div>
          </div>

          <ol className="flow-steps-timeline">
            {currentFlow.steps.map((step, idx) => (
              <li key={idx} className="timeline-step-node">
                <div className="step-node-header">
                  <span className="step-counter-circle">0{idx + 1}</span>
                  <span className="step-stakeholder-tag">{step.role}</span>
                </div>
                <strong className="step-node-title">{step.title}</strong>
                <p className="step-node-detail">{step.detail}</p>
                {idx < currentFlow.steps.length - 1 && (
                  <ArrowRight className="step-connector-arrow" size={16} aria-hidden="true" />
                )}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
