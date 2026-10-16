import { Link } from 'react-router'
import office from '../assets/about-original-0.jpg'
import team from '../assets/home-team.jpg'
import workspace from '../assets/about-original-2.jpg'
import source from '../assets/about-redesign-source.png'
import FigmaImageRegion from '../components/ui/FigmaImageRegion'
import Icon from '../components/ui/Icon'
import usePageTitle from '../hooks/usePageTitle'
import '../styles/about.css'

const statistics = [
  { value: '10+', label: 'Years of experience' },
  { value: '200+', label: 'Projects delivered' },
  { value: '100+', label: 'Happy clients' },
]
const principles = [
  { title: 'Our Mission', description: 'To make technology simpler, more accessible and more valuable for businesses.', region: { x: 858, y: 1668, width: 44, height: 44 } },
  { title: 'Our Vision', description: 'To become a trusted partner for organisations looking to build, modernise and grow.', region: { x: 1550, y: 1668, width: 44, height: 44 } },
  { title: 'Our Values', description: 'Customer first. Ownership. Transparency. Continuous innovation.', region: { x: 858, y: 2050, width: 44, height: 44 } },
]

export default function AboutPage() {
  usePageTitle('About')
  return (
    <div className="about-page">
      <div className="container">
        <section className="about-introduction" aria-labelledby="about-title">
          <div className="about-introduction-copy">
            <p className="eyebrow">About us</p>
            <h1 id="about-title">
              <span>We are a technology and </span>
              <span>digital services company </span>
              <span>helping businesses turn </span>
              <span>ideas, challenges and </span>
              <span>opportunities into </span>
              <span className="about-accent">scalable digital solutions.</span>
            </h1>
          </div>
          <img className="about-introduction-photo" src={office} alt="People working in a bright modern office with floor-to-ceiling windows" fetchPriority="high" />
        </section>

        <dl className="about-statistics" aria-label="Our experience">
          {statistics.map(({ value, label }) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}
        </dl>

        <section id="team" className="about-principles" aria-label="Our team and principles">
          <img className="about-team-photo" src={team} alt="Colleagues discussing a project around an office table" loading="lazy" />
          <div className="about-principle-cards">
            {principles.map(({ title, description, region }) => (
              <article className="about-principle-card" key={title}>
                <FigmaImageRegion className="about-principle-icon" source={source} sourceWidth={2267} region={region} alt="" />
                <h2>{title}</h2><p>{description}</p>
              </article>
            ))}
          </div>
        </section>
      </div>

      <section className="about-culture" aria-labelledby="culture-title">
        <div className="about-culture-copy">
          <p className="eyebrow">Our culture</p>
          <h2 id="culture-title">Curious minds. Meaningful<br className="about-culture-break" /> work.</h2>
          <p className="about-culture-description">We believe in collaboration, continuous learning and creating an environment where people and ideas thrive.</p>
          <Link className="button" to="/careers">Meet the team <Icon name="arrow" /></Link>
        </div>
        <img className="about-culture-photo" src={workspace} alt="A warm creative workspace with a laptop, plants, and a comfortable chair" loading="lazy" />
      </section>
    </div>
  )
}
