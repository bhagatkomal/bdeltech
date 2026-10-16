import { useState } from 'react'
import { Link } from 'react-router'
import team from '../assets/home-team.jpg'
import graduation from '../assets/careers-graduation-cap.svg'
import users from '../assets/careers-users.svg'
import globe from '../assets/careers-earth.svg'
import trophy from '../assets/careers-trophy.svg'
import briefcase from '../assets/careers-briefcase-business.svg'
import Icon from '../components/ui/Icon'
import { careerBenefits, careerPositions, careerStatistics } from '../data/careers'
import usePageTitle from '../hooks/usePageTitle'
import '../styles/careers.css'

const benefitIcons = [graduation, users, globe, trophy]

export default function CareersPage() {
  usePageTitle('Careers')
  const [selectedRole, setSelectedRole] = useState<string | null>(null)

  return (
    <div className="careers-page">
      <div className="container">
        <section className="careers-introduction" aria-labelledby="careers-page-title">
          <div>
            <p className="eyebrow">Careers</p>
            <h1 id="careers-page-title"><span>Build your future, </span><span>beautifully.</span></h1>
            <p className="careers-summary">We believe great people build great products. Join our team and be part of a culture that values growth, collaboration and impact.</p>
          </div>
          <img className="careers-hero-photo" src={team} alt="Team members collaborating in a welcoming workplace" fetchPriority="high" />
        </section>

        <dl className="careers-statistics" aria-label="Careers at bdeltech">
          {careerStatistics.map(({ value, label }) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}
        </dl>

        <section className="careers-culture" aria-labelledby="careers-culture-title">
          <p className="eyebrow">Life at bdeltech</p>
          <h2 id="careers-culture-title">A place to learn, create and belong.</h2>
          <div className="careers-benefits">
            {careerBenefits.map(({ title, description }, index) => (
              <article className="careers-benefit" key={title}>
                <span className="careers-benefit-icon"><img src={benefitIcons[index]} alt="" width="24" height="24" /></span>
                <h3>{title}</h3><p>{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="careers-positions" id="open-positions" aria-labelledby="careers-positions-title" tabIndex={-1}>
          <p className="eyebrow">Open positions</p>
          <h2 id="careers-positions-title">Find your next opportunity.</h2>
          <p className="careers-positions-description">Choose a role to start a conversation with our talent team.</p>
          <div className="careers-roles" role="group" aria-label="Choose a role">
            {careerPositions.map(({ title, location }) => (
              <button type="button" className="careers-role" key={title} aria-pressed={selectedRole === title} onClick={() => setSelectedRole(title)}>
                <img src={briefcase} alt="" width="24" height="24" />
                <span><strong>{title}</strong><span>{location} / Full-time</span></span>
                <Icon name="arrow" />
              </button>
            ))}
          </div>
          <Link className="button careers-apply" to="/contact">{selectedRole ? `Apply for ${selectedRole}` : 'View all positions'} <Icon name="arrow" /></Link>
        </section>

        <section className="careers-callout" aria-labelledby="careers-callout-title">
          <div>
            <p className="eyebrow">Make your mark</p>
            <h2 id="careers-callout-title">Ready to make an impact?</h2>
            <p>Explore our current opportunities and join our team.</p>
          </div>
          <Link className="button" to="/careers#open-positions">View careers <Icon name="arrow" /></Link>
        </section>
      </div>
    </div>
  )
}
