import { useState } from 'react'
import type { FormEvent } from 'react'
import office from '../assets/about-original-0.jpg'
import mail from '../assets/contact-mail.svg'
import phone from '../assets/contact-phone.svg'
import pin from '../assets/contact-map-pin.svg'
import quote from '../assets/contact-quote.svg'
import Icon from '../components/ui/Icon'
import usePageTitle from '../hooks/usePageTitle'
import '../styles/contact.css'

const contactEmail = 'komal.bhagat@bdeltech.com'
const services = ['Software development', 'AI & automation', 'Cloud modernisation', 'Digital transformation']

export default function ContactPage() {
  usePageTitle('Contact')
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [statusMessage, setStatusMessage] = useState('')

  async function prepareMessage(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const fields = new FormData(form)
    const name = String(fields.get('name') ?? '').trim()
    const message = String(fields.get('message') ?? '').trim()
    const nameInput = form.elements.namedItem('name') as HTMLInputElement
    const messageInput = form.elements.namedItem('message') as HTMLTextAreaElement
    nameInput.setCustomValidity(name ? '' : 'Please enter your name.')
    messageInput.setCustomValidity(message ? '' : 'Please tell us about your goals.')
    if (!form.reportValidity()) return
    const service = String(fields.get('service'))
    setStatus('sending')
    setStatusMessage('Sending your message…')
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email: String(fields.get('email') ?? '').trim(),
          company: String(fields.get('company') ?? '').trim(),
          service,
          message,
        }),
      })
      const result = await response.json() as { message?: string; error?: string }
      if (!response.ok) throw new Error(result.error ?? 'Unable to send your message.')
      setStatus('success')
      setStatusMessage(result.message ?? 'Thanks — your message has been sent.')
      form.reset()
    } catch (error) {
      setStatus('error')
      setStatusMessage(error instanceof Error ? error.message : 'Unable to send your message right now.')
    }
  }

  return (
    <div className="contact-page">
      <div className="container">
        <section className="contact-introduction" aria-labelledby="contact-page-title">
          <div>
            <p className="eyebrow">Contact us</p>
            <h1 id="contact-page-title"><span>Let’s build </span><span>what’s next.</span></h1>
            <p className="contact-summary">Have a project in mind or want to learn more?<br className="contact-summary-break" /> We’d love to hear from you.</p>
          </div>
          <img className="contact-hero-photo" src={office} alt="A team collaborating in a bright meeting room with large windows" fetchPriority="high" />
        </section>
        <div className="contact-content">
          <form className="contact-form" onSubmit={prepareMessage} aria-label="Contact bdeltech" aria-describedby="contact-form-status" onChange={() => { if (status !== 'sending') { setStatus('idle'); setStatusMessage('') } }}>
            <div className="contact-form-fields">
              <label htmlFor="contact-name">Name <span aria-hidden="true">*</span>
                <input id="contact-name" name="name" placeholder="Your name" autoComplete="name" maxLength={120} required onChange={event => event.currentTarget.setCustomValidity('')} />
              </label>
              <label htmlFor="contact-email">Work email <span aria-hidden="true">*</span>
                <input id="contact-email" name="email" type="email" placeholder="you@company.com" autoComplete="email" maxLength={254} required />
              </label>
              <label htmlFor="contact-company">Company
                <input id="contact-company" name="company" placeholder="Your company" autoComplete="organization" maxLength={160} />
              </label>
              <label htmlFor="contact-service">How can we help? <span aria-hidden="true">*</span>
                <span className="contact-select"><select id="contact-service" name="service" defaultValue="" required><option value="" disabled>Select a service</option>{services.map(service => <option key={service}>{service}</option>)}</select></span>
              </label>
              <label className="contact-message-field" htmlFor="contact-message">Message <span aria-hidden="true">*</span>
                <textarea id="contact-message" name="message" placeholder="Tell us about your goals" rows={6} maxLength={5000} required onChange={event => event.currentTarget.setCustomValidity('')} />
              </label>
            </div>
            <button className="button contact-send" type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'Sending…' : 'Send message'} {status !== 'sending' && <Icon name="arrow" />}</button>
            <p id="contact-form-status" className={`contact-form-status contact-form-status-${status}`} role="status">{statusMessage}</p>
          </form>
          <aside className="contact-details" aria-label="Contact details">
            <dl className="contact-details-list">
              <div><span className="contact-detail-icon"><img src={mail} alt="" width="24" height="24" /></span><div><dt>Email</dt><dd><a href={`mailto:${contactEmail}`}>{contactEmail}</a></dd></div></div>
              <div><span className="contact-detail-icon"><img src={phone} alt="" width="24" height="24" /></span><div><dt>Phone</dt><dd><a href="tel:+919876543210">+91 98765 43210</a></dd></div></div>
              <div><span className="contact-detail-icon"><img src={pin} alt="" width="24" height="24" /></span><div><dt>Location</dt><dd>New Delhi, India</dd></div></div>
            </dl>
            <blockquote className="contact-quote"><img src={quote} alt="" width="24" height="24" /><p>“Technology should feel like momentum, not friction.”</p></blockquote>
            <div className="contact-location-art" aria-hidden="true"><span><img src={pin} alt="" width="24" height="24" /></span></div>
          </aside>
        </div>
      </div>
    </div>
  )
}
