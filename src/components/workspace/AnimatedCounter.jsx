import { useEffect, useState } from 'react'

export function AnimatedCounter({ value, duration = 800, prefix = '', suffix = '' }) {
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    // If value is non-numeric, just display it
    const numericTarget = typeof value === 'number' ? value : parseFloat(String(value).replace(/[^0-9.]/g, ''))
    if (isNaN(numericTarget)) {
      setDisplayValue(value)
      return
    }

    let start = null
    const startVal = typeof displayValue === 'number' ? displayValue : 0

    function step(timestamp) {
      if (!start) start = timestamp
      const progress = Math.min((timestamp - start) / duration, 1)
      const current = Math.floor(startVal + (numericTarget - startVal) * progress)
      setDisplayValue(current)

      if (progress < 1) {
        requestAnimationFrame(step)
      }
    }

    requestAnimationFrame(step)
  }, [value, duration])

  return (
    <span>
      {prefix}
      {typeof displayValue === 'number' ? displayValue.toLocaleString('en-IN') : displayValue}
      {suffix}
    </span>
  )
}
