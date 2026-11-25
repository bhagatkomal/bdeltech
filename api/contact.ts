import { Resend } from 'resend'

type VercelRequest = { method?: string; body?: unknown }
type VercelResponse = { status: (code: number) => VercelResponse; json: (body: Record<string, string>) => void }

const recipient = process.env.CONTACT_EMAIL ?? 'komal.bhagat@bdeltech.com'
const sender = process.env.RESEND_FROM_EMAIL ?? 'Bdeltech website <contact@bdeltech.com>'

type ContactPayload = {
  name?: unknown
  email?: unknown
  company?: unknown
  service?: unknown
  message?: unknown
}

function value(input: unknown, maxLength: number) {
  return typeof input === 'string' ? input.trim().slice(0, maxLength) : ''
}

export default async function handler(request: VercelRequest, response: VercelResponse) {
  const send = (data: Record<string, string>, status = 200) => response.status(status).json(data)
  if (request.method !== 'POST') return send({ error: 'Method not allowed.' }, 405)

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    return send({ error: 'Email service is not configured. Add RESEND_API_KEY in Vercel Project Settings → Environment Variables, then redeploy.' }, 503)
  }

  let payload: ContactPayload | undefined
  try {
    payload = (typeof request.body === 'string' ? JSON.parse(request.body) : request.body) as ContactPayload
  } catch {
    return send({ error: 'Invalid request body.' }, 400)
  }
  if (!payload || typeof payload !== 'object') return send({ error: 'Invalid request body.' }, 400)

  const name = value(payload.name, 120)
  const email = value(payload.email, 254)
  const company = value(payload.company, 160)
  const service = value(payload.service, 100)
  const message = value(payload.message, 5000)

  if (!name || !message || !service || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return send({ error: 'Please complete all required fields with a valid email.' }, 400)
  }

  const resend = new Resend(apiKey)
  const { error } = await resend.emails.send({
    from: sender,
    to: [recipient],
    replyTo: email,
    subject: `Bdeltech enquiry: ${service}`,
    text: [
      `Name: ${name}`,
      `Work email: ${email}`,
      `Company: ${company || 'Not provided'}`,
      `Service: ${service}`,
      '',
      message,
    ].join('\n'),
  })

  if (error) {
    console.error('Resend email failed', error)
    return send({ error: 'Unable to send your message right now.' }, 502)
  }

  return send({ message: 'Thanks — your message has been sent.' })
}
