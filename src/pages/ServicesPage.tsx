import { Link } from 'react-router'
import workspace from '../assets/about-original-2.jpg'
import reference from '../assets/services-redesign-source.png'
import homeReference from '../assets/home-figma-source.png'
import FigmaImageRegion from '../components/ui/FigmaImageRegion'
import Icon from '../components/ui/Icon'
import { serviceOfferings } from '../data/services'
import usePageTitle from '../hooks/usePageTitle'
import '../styles/services.css'

export default function ServicesPage() {
  usePageTitle('Services')
  return (
    <div className="services-page">
      <div className="container">
        <section className="services-introduction" aria-labelledby="services-title">
          <div className="services-introduction-copy">
            <p className="eyebrow">Our services</p>
            <h1 id="services-title"><span>Comprehensive </span><span>technology services </span><span>for modern </span><span>businesses.</span></h1>
            <p className="services-summary">From strategy to support, we provide end-to-end capabilities to help you build, modernise and scale.</p>
          </div>
          <div className="services-hero-visual">
            <div className="services-hero-orbit" aria-hidden="true" />
            <img className="services-hero-photo" src={workspace} alt="A bright workspace with plants, a comfortable chair, and a laptop on a wooden desk" fetchPriority="high" />
          </div>
        </section>

        <section className="service-offerings" aria-label="Our technology services">
          {serviceOfferings.map(({ title, description, image, iconSource }) => (
            <article className="service-offering" key={title}>
              <FigmaImageRegion className="service-offering-icon" region={image} source={iconSource === 'home' ? homeReference : reference} sourceWidth={iconSource === 'home' ? 1553 : 2360} alt="" />
              <h2>{title}</h2>
              <p>{description}</p>
            </article>
          ))}
        </section>
      </div>

      <section className="services-contact" aria-labelledby="services-contact-title">
        <div className="services-contact-ring" aria-hidden="true" />
        <div className="services-contact-copy">
          <p className="eyebrow">Let’s build something great</p>
          <h2 id="services-contact-title">Have a technology challenge? Let’s<br />talk.</h2>
        </div>
        <Link className="button" to="/contact">Start a conversation <Icon name="arrow" /></Link>
      </section>
    </div>
  )
}
