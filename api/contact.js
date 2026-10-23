const rateLimit = new Map()
const rateWindowMs = 10 * 60 * 1000
const rateLimitCount = 5

function clean(value, maxLength) {
  return typeof value === 'string' ? value.trim().slice(0, maxLength) : ''
}

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (character) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  })[character])
}

function isRateLimited(ip, now = Date.now()) {
  const current = rateLimit.get(ip)
  if (!current || now - current.startedAt >= rateWindowMs) {
    rateLimit.set(ip, { startedAt: now, count: 1 })
    return false
  }

  if (current.count >= rateLimitCount) return true
  current.count += 1
  return false
}

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store')
  res.setHeader('X-Content-Type-Options', 'nosniff')

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed.' })
  }

  const origin = req.headers.origin
  const host = req.headers.host
  if (origin && host) {
    try {
      if (new URL(origin).host !== host) return res.status(403).json({ error: 'Request origin is not allowed.' })
    } catch {
      return res.status(403).json({ error: 'Request origin is not allowed.' })
    }
  }

  const contentLength = Number(req.headers['content-length'] || 0)
  if (contentLength > 12_000) return res.status(413).json({ error: 'Message is too large.' })

  const forwardedFor = req.headers['x-forwarded-for'] || req.socket?.remoteAddress || 'unknown'
  const ip = String(forwardedFor).split(',')[0].trim()
  if (isRateLimited(ip)) return res.status(429).json({ error: 'Too many messages. Please try again later.' })

  const body = req.body && typeof req.body === 'object' ? req.body : {}
  if (clean(body.website, 200)) return res.status(200).json({ ok: true })

  const name = clean(body.name, 100)
  const email = clean(body.email, 254)
  const school = clean(body.school, 140)
  const topic = clean(body.topic, 80)
  const message = clean(body.message, 3000)
  const allowedTopics = new Set(['Product demo', 'School onboarding', 'Partnership', 'Something else'])

  if (!name || !email || !school || !message) return res.status(400).json({ error: 'Please complete all required fields.' })
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return res.status(400).json({ error: 'Enter a valid email address.' })
  if (!allowedTopics.has(topic)) return res.status(400).json({ error: 'Choose a valid inquiry topic.' })

  const apiKey = process.env.RESEND_API_KEY
  const sender = process.env.CONTACT_FROM_EMAIL
  const recipient = process.env.CONTACT_TO_EMAIL || 'community.divak@gmail.com'
  if (!apiKey || !sender) return res.status(503).json({ error: 'The contact form is not configured yet. Please try again later.' })

  const safeName = name.replace(/[\r\n]+/g, ' ')
  const safeSchool = school.replace(/[\r\n]+/g, ' ')
  const safeTopic = topic.replace(/[\r\n]+/g, ' ')
  const html = [
    '<h2>New CampusFlow website inquiry</h2>',
    `<p><strong>Name:</strong> ${escapeHtml(name)}</p>`,
    `<p><strong>Email:</strong> ${escapeHtml(email)}</p>`,
    `<p><strong>School:</strong> ${escapeHtml(school)}</p>`,
    `<p><strong>Topic:</strong> ${escapeHtml(topic)}</p>`,
    `<p><strong>Message:</strong><br>${escapeHtml(message).replace(/\n/g, '<br>')}</p>`,
  ].join('')
  const text = `New CampusFlow website inquiry\n\nName: ${name}\nEmail: ${email}\nSchool: ${school}\nTopic: ${topic}\n\n${message}`

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: sender,
        to: [recipient],
        reply_to: email,
        subject: `CampusFlow inquiry: ${safeTopic} from ${safeSchool} (${safeName})`,
        html,
        text,
      }),
      signal: AbortSignal.timeout(8000),
    })

    if (!response.ok) {
      console.error('Contact email delivery failed with status:', response.status)
      return res.status(502).json({ error: 'We could not send your message right now. Please try again shortly.' })
    }

    return res.status(200).json({ ok: true })
  } catch {
    return res.status(502).json({ error: 'We could not reach the email service. Please try again shortly.' })
  }
}
