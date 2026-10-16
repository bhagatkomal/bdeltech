import { Link } from 'react-router'
import mountains from '../../assets/home-mountains.jpg'
import Icon from '../ui/Icon'

export default function ContactBanner() {
  return (
    <section className="home-contact" aria-labelledby="contact-banner-title">
      <img className="home-contact-landscape" src={mountains} alt="" loading="lazy" />
      <div className="home-contact-ring" aria-hidden="true" />
      <div className="home-contact-copy">
        <p className="eyebrow">Let’s build something great</p>
        <h2 id="contact-banner-title">Have a technology challenge? Let’s<br />talk.</h2>
      </div>
      <Link className="button" to="/contact">Start a conversation <Icon name="arrow" /></Link>
    </section>
  )
}
