import type { ReactNode } from 'react'
import { Link } from 'react-router'
import Icon from './Icon'
import '../../styles/contact-callout.css'

type ContactCalloutProps = {
  titleId?: string
  eyebrow?: string
  title?: ReactNode
  buttonLabel?: string
  showRing?: boolean
}

export default function ContactCallout({
  titleId = 'contact-callout-title',
  eyebrow = 'Let’s build something great',
  title = <>Have a technology challenge? Let’s<br />talk.</>,
  buttonLabel = 'Start a conversation',
  showRing = true,
}: ContactCalloutProps) {
  return (
    <section className="contact-callout" aria-labelledby={titleId}>
      {showRing && <div className="contact-callout-ring" aria-hidden="true" />}
      <div className="contact-callout-copy">
        <p className="eyebrow">{eyebrow}</p>
        <h2 id={titleId}>{title}</h2>
      </div>
      <Link className="button" to="/contact">{buttonLabel} <Icon name="arrow" /></Link>
    </section>
  )
}
