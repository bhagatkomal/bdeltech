import desk from '../assets/solutions-original-0.jpg'
import source from '../assets/solutions-figma-source.png'
import homeSource from '../assets/home-figma-source.png'
import ContactCallout from '../components/ui/ContactCallout'
import FigmaImageRegion from '../components/ui/FigmaImageRegion'
import { solutions } from '../data/solutions'
import usePageTitle from '../hooks/usePageTitle'
import '../styles/solutions.css'

export default function SolutionsPage() {
  usePageTitle('Solutions')
  return (
    <div className="solutions-page">
      <div className="container">
        <section className="solutions-introduction" aria-labelledby="solutions-title">
          <div className="solutions-introduction-copy">
            <p className="eyebrow">Our solutions</p>
            <h1 id="solutions-title"><span>Turn ideas into </span><span>scalable digital </span><span>solutions.</span></h1>
            <p className="solutions-summary">We help businesses modernise, innovate and create better experiences with technology.</p>
          </div>
          <div className="solutions-hero-visual">
            <div className="solutions-hero-orbit" aria-hidden="true" />
            <img className="solutions-hero-photo" src={desk} alt="A modern desk with a monitor, headphones, keyboard, and plants" fetchPriority="high" />
          </div>
        </section>

        <section className="solution-offerings" aria-label="Our digital solutions">
          {solutions.map(({ title, description, image, imageSource }) => (
            <article className="solution-card" key={title}>
              <FigmaImageRegion className="solution-card-icon" region={image} source={imageSource === 'home' ? homeSource : source} sourceWidth={imageSource === 'home' ? 1553 : 2560} alt="" />
              <h2>{title}</h2><p>{description}</p>
            </article>
          ))}
        </section>
      </div>
      <ContactCallout titleId="solutions-contact-title" />
    </div>
  )
}
