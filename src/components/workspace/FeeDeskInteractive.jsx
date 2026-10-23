import { useState } from 'react'
import { Check, CircleDollarSign, Download, Eye, FileText, QrCode, Send, Sparkles, X } from 'lucide-react'
import { sampleFeeStudents } from '../../data/content'
import { AnimatedCounter } from './AnimatedCounter'

export function FeeDeskInteractive() {
  const [feeRecords, setFeeRecords] = useState(sampleFeeStudents)
  const [activeSlip, setActiveSlip] = useState(null)
  const [toastMessage, setToastMessage] = useState(null)

  const totalBilled = feeRecords.reduce((acc, curr) => acc + curr.totalFee, 0)
  const totalCollected = feeRecords.reduce((acc, curr) => acc + curr.paid, 0)
  const totalPending = feeRecords.reduce((acc, curr) => acc + curr.due, 0)
  const collectionRate = totalBilled > 0 ? Math.round((totalCollected / totalBilled) * 100) : 0

  function recordInstalment(id, amount = 5000) {
    setFeeRecords((prev) =>
      prev.map((item) => {
        if (item.id !== id) return item
        const newPaid = Math.min(item.totalFee, item.paid + amount)
        const newDue = item.totalFee - newPaid
        const newStatus = newDue === 0 ? 'paid' : 'partial'
        const newReceipt = item.receipt === 'Pending' ? `RCP-${Math.floor(610 + Math.random() * 80)}` : item.receipt
        return { ...item, paid: newPaid, due: newDue, status: newStatus, receipt: newReceipt }
      })
    )
    triggerToast(`✓ Recorded ₹${amount.toLocaleString('en-IN')} payment instalment for student!`, 'success')
  }

  function triggerToast(text, type = 'info') {
    setToastMessage({ text, type })
    setTimeout(() => setToastMessage(null), 3500)
  }

  return (
    <div className="fee-desk-interactive">
      {/* Toast Notification */}
      {toastMessage && (
        <div className={`clicker-toast toast-${toastMessage.type}`}>
          <Sparkles size={14} />
          <span>{toastMessage.text}</span>
        </div>
      )}

      {/* Top Financial Telemetry */}
      <div className="clicker-metrics-grid">
        <div className="clicker-metric metric-blue">
          <div className="metric-header">
            <span className="metric-tag">TOTAL BILLED (CYCLE)</span>
            <span className="metric-icon-badge"><CircleDollarSign size={13} /></span>
          </div>
          <div className="metric-val">
            <AnimatedCounter value={totalBilled} prefix="₹ " />
          </div>
          <p className="metric-sub">4 active student accounts</p>
        </div>

        <div className="clicker-metric metric-green">
          <div className="metric-header">
            <span className="metric-tag">FEES RECEIVED</span>
            <span className="metric-icon-badge"><Check size={13} /></span>
          </div>
          <div className="metric-val">
            <AnimatedCounter value={totalCollected} prefix="₹ " />
          </div>
          <p className="metric-sub">
            <AnimatedCounter value={collectionRate} suffix="% collection rate" />
          </p>
        </div>

        <div className="clicker-metric metric-coral">
          <div className="metric-header">
            <span className="metric-tag">PENDING LEDGER</span>
            <span className="metric-icon-badge"><FileText size={13} /></span>
          </div>
          <div className="metric-val">
            <AnimatedCounter value={totalPending} prefix="₹ " />
          </div>
          <p className="metric-sub">1 overdue · 1 partial</p>
        </div>
      </div>

      <div className="fee-desk-instruction">
        <Sparkles size={13} className="tip-sparkle" />
        <span><strong>Interactive Fee Ledger:</strong> Click <em>"Record ₹5k"</em> to simulate taking an instalment, or click <em>"View Slip"</em> to view a printable receipt.</span>
      </div>

      {/* Fee Table */}
      <div className="fee-ledger-table-wrap">
        <table className="fee-ledger-table">
          <thead>
            <tr>
              <th>STUDENT / ID</th>
              <th>TOTAL FEE</th>
              <th>PAID TO DATE</th>
              <th>PENDING BALANCE</th>
              <th>STATUS</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {feeRecords.map((item) => (
              <tr key={item.id} className={`fee-row-${item.status}`}>
                <td>
                  <div className="student-fee-cell">
                    <strong>{item.name}</strong>
                    <span className="mono-sub">{item.id} · {item.grade}</span>
                  </div>
                </td>
                <td className="mono-num">₹ {item.totalFee.toLocaleString('en-IN')}</td>
                <td className="mono-num text-green">₹ {item.paid.toLocaleString('en-IN')}</td>
                <td className="mono-num text-coral">₹ {item.due.toLocaleString('en-IN')}</td>
                <td>
                  <span className={`fee-status-badge badge-${item.status}`}>
                    {item.status.toUpperCase()}
                  </span>
                </td>
                <td>
                  <div className="fee-actions-cell">
                    <button
                      className="btn-fee-action view-slip-btn"
                      onClick={() => setActiveSlip(item)}
                      title="View printable digital fee receipt"
                    >
                      <Eye size={12} /> Slip
                    </button>
                    {item.due > 0 ? (
                      <button
                        className="btn-fee-action record-pay-btn"
                        onClick={() => recordInstalment(item.id, 5000)}
                        title="Simulate collecting ₹5,000"
                      >
                        + ₹5,000
                      </button>
                    ) : (
                      <span className="receipt-settled-tag">
                        <Check size={11} /> Settled
                      </span>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Fee Receipt Modal / Slip Drawer */}
      {activeSlip && (
        <div className="fee-modal-backdrop" onClick={() => setActiveSlip(null)}>
          <div className="fee-slip-card" onClick={(e) => e.stopPropagation()}>
            <div className="slip-topbar">
              <div className="slip-brand">
                <span className="brand-dot" />
                <span>CAMPUSFLOW OFFICIAL FEE RECEIPT</span>
              </div>
              <button
                className="slip-close-btn"
                onClick={() => setActiveSlip(null)}
                aria-label="Close fee receipt"
              >
                <X size={16} />
              </button>
            </div>

            <div className="slip-body">
              <div className="slip-header-grid">
                <div>
                  <h3 className="slip-school-name">ST. XAVIER'S SENIOR SECONDARY SCHOOL</h3>
                  <p className="slip-school-sub">Affiliation No. 1130248 · Campus Operations Ledger</p>
                </div>
                <div className="slip-receipt-meta">
                  <span className="receipt-no-label">RECEIPT NUMBER</span>
                  <strong className="mono-text">{activeSlip.receipt === 'Pending' ? 'DRAFT-INVOICE' : activeSlip.receipt}</strong>
                  <time className="slip-date">{new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</time>
                </div>
              </div>

              <div className="slip-student-strip">
                <div><span>Student:</span> <strong>{activeSlip.name}</strong></div>
                <div><span>Enrollment ID:</span> <span className="mono-text">{activeSlip.id}</span></div>
                <div><span>Class:</span> <span>{activeSlip.grade}</span></div>
                <div><span>Mode:</span> <span className="badge-mode">{activeSlip.mode}</span></div>
              </div>

              <div className="slip-breakdown-table">
                <div className="slip-line"><span>Tuition & Smart Classroom Fee</span><span>₹ {(activeSlip.totalFee * 0.7).toLocaleString('en-IN')}</span></div>
                <div className="slip-line"><span>Computer Lab & STEM Fee</span><span>₹ {(activeSlip.totalFee * 0.15).toLocaleString('en-IN')}</span></div>
                <div className="slip-line"><span>Annual Sports & Library Cess</span><span>₹ {(activeSlip.totalFee * 0.15).toLocaleString('en-IN')}</span></div>
                <div className="slip-divider" />
                <div className="slip-line total-line"><span>Total Fee Due:</span><strong>₹ {activeSlip.totalFee.toLocaleString('en-IN')}</strong></div>
                <div className="slip-line paid-line"><span>Amount Collected:</span><strong className="text-green">₹ {activeSlip.paid.toLocaleString('en-IN')}</strong></div>
                <div className="slip-line due-line"><span>Remaining Balance:</span><strong className="text-coral">₹ {activeSlip.due.toLocaleString('en-IN')}</strong></div>
              </div>

              <div className="slip-footer">
                <div className="slip-qr-box">
                  <QrCode size={42} />
                  <span>Scan to verify digital signature</span>
                </div>
                <div className="slip-stamp-box">
                  <div className="stamp-circle">
                    <span>FEE DESK</span>
                    <span>VERIFIED</span>
                  </div>
                  <small>Accounts Officer Stamp</small>
                </div>
              </div>
            </div>

            <div className="slip-actions-bar">
              <button
                className="button button-lime button-sm"
                onClick={() => {
                  triggerToast('Receipt downloaded as PDF', 'success')
                  setActiveSlip(null)
                }}
              >
                <Download size={14} /> Download PDF
              </button>
              <button
                className="button button-quiet button-sm"
                onClick={() => {
                  triggerToast(`WhatsApp receipt sent to ${activeSlip.name}'s parent`, 'success')
                  setActiveSlip(null)
                }}
              >
                <Send size={14} /> Send WhatsApp
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
