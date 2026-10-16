import { Link } from 'react-router'
import { services } from '../../data/home'
import HomeImage from './HomeImage'

export default function Services() {
  return (
    <section className="home-section home-services" aria-labelledby="home-services-title">
      <div className="container">
        <p className="eyebrow">What we do</p>
        <h2 id="home-services-title">From ambition to impact.</h2>
        <p className="section-description">End-to-end technology capabilities designed around the outcomes your business needs.</p>
        <div className="home-services-grid">
          {services.map(({ title, description, image }) => (
            <Link to="/services" className="home-service-card" key={title}>
              <HomeImage className="home-service-icon" region={image} />
              <h3>{title}</h3><p>{description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
