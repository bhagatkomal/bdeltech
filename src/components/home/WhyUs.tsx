import { statistics } from '../../data/home'
import team from '../../assets/home-team.jpg'

export default function WhyUs() {
  return (
    <section className="home-why" aria-labelledby="why-title">
      <div className="home-why-copy">
        <p className="eyebrow">Why us</p>
        <h2 id="why-title">A partner built for progress.</h2>
        <p className="section-description">Small enough to care, experienced enough to deliver, and focused on making a measurable difference.</p>
        <dl className="home-statistics">{statistics.map(({ value, label }) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>
      </div>
      <img className="home-team-photo" src={team} alt="A team collaborating around a table in an open, modern office" loading="lazy" />
    </section>
  )
}
