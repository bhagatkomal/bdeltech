import { Link } from 'react-router'
import building from '../../assets/home-building.jpg'
import HomeImage from './HomeImage'
import Icon from '../ui/Icon'

export default function Hero() {
  return (
    <section className="home-hero" aria-labelledby="hero-title">
      <div className="container hero-inner">
        <div className="hero-copy">
          <p className="eyebrow">Your technology partner</p>
          <h1 id="hero-title">Technology.<br />Delivery.<br /><span>Digital<br />Transformation.</span></h1>
          <p className="hero-description">We help businesses build, modernise and scale digital solutions through technology, engineering and outcome-driven delivery.</p>
          <div className="hero-actions">
            <Link className="button" to="/contact">Talk to us <Icon name="arrow" /></Link>
            <Link className="button button-outline" to="/services">Explore our services <Icon name="arrow" /></Link>
          </div>
          <ul className="hero-proof" aria-label="Our approach"><li><span aria-hidden="true">✓</span>Senior delivery teams</li><li><span aria-hidden="true">✓</span>Built to scale</li></ul>
        </div>
        <div className="hero-visual">
          <div className="hero-orbit" aria-hidden="true" /><div className="hero-small-orbit" aria-hidden="true" />
          <img className="hero-building" src={building} alt="Modern glass office building" fetchPriority="high" />
          <div className="hero-note"><HomeImage className="hero-note-icon" region={{ x: 1393, y: 307, width: 20, height: 24 }} /><p>Build<br />Modernise<br />Scale</p></div>
        </div>
      </div>
    </section>
  )
}
