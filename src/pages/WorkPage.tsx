import { Link } from 'react-router'
import desk from '../assets/solutions-original-0.jpg'
import Icon from '../components/ui/Icon'
import { workProjects } from '../data/work'
import usePageTitle from '../hooks/usePageTitle'
import '../styles/work.css'

export default function WorkPage() {
  usePageTitle('Work')
  return (
    <div className="work-page">
      <div className="container">
        <section className="work-introduction" aria-labelledby="work-page-title">
          <div>
            <p className="eyebrow">Our work</p>
            <h1 id="work-page-title"><span>Real solutions. </span><span>Measurable impact.</span></h1>
            <p className="work-summary">Explore how we’ve helped businesses solve complex challenges and achieve meaningful results.</p>
          </div>
          <img className="work-hero-photo" src={desk} alt="A minimal technology workspace with a laptop, headphones and plants" fetchPriority="high" />
        </section>

        <section className="work-projects" aria-label="Selected projects">
          {workProjects.map(({ category, title, description, image }) => (
            <article className="work-project" key={title}>
              <img className="work-project-photo" src={image} alt="" loading="lazy" />
              <div className="work-project-copy">
                <p className="eyebrow">{category}</p>
                <h2>{title}</h2>
                <p className="work-project-description">{description}</p>
                <Link className="work-project-link" to="/contact" aria-label={`View case study: ${title}`}>View case study <Icon name="arrow" /></Link>
              </div>
            </article>
          ))}
        </section>
      </div>
    </div>
  )
}
