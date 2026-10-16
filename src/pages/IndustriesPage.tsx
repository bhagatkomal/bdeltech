import building from '../assets/home-building.jpg'
import source from '../assets/industries-figma-source.png'
import homeSource from '../assets/home-figma-source.png'
import ContactCallout from '../components/ui/ContactCallout'
import FigmaImageRegion from '../components/ui/FigmaImageRegion'
import { industrySectors } from '../data/industries'
import usePageTitle from '../hooks/usePageTitle'
import '../styles/industries.css'

export default function IndustriesPage() {
  usePageTitle('Industries')
  return (
    <div className="industries-page">
      <div className="container">
        <section className="industries-introduction" aria-labelledby="industries-page-title">
          <div className="industries-introduction-copy">
            <p className="eyebrow">Industries</p>
            <h1 id="industries-page-title"><span>Built for diverse </span><span>industries. Focused on </span><span>real business impact.</span></h1>
            <p className="industries-summary">We understand the unique needs of each industry and deliver solutions that create measurable value.</p>
          </div>
          <img className="industries-hero-photo" src={building} alt="A modern glass office building reflecting the sky" fetchPriority="high" />
        </section>

        <section className="industry-sectors" aria-label="Industries we serve">
          {industrySectors.map(({ title, description, image, imageSource }) => (
            <article className="industry-sector-card" key={title}>
              {imageSource === 'home' ? (
                <span className="industry-sector-icon industry-sector-icon--additional">
                  <FigmaImageRegion className="industry-sector-glyph" region={image} source={homeSource} sourceWidth={1553} alt="" />
                </span>
              ) : (
                <FigmaImageRegion className="industry-sector-icon" region={image} source={source} sourceWidth={2560} alt="" />
              )}
              <h2>{title}</h2><p>{description}</p>
            </article>
          ))}
        </section>
      </div>
      <ContactCallout
        titleId="industries-contact-title"
        eyebrow="Your industry. Our expertise."
        title="Let’s build solutions that work for you."
        buttonLabel="Consult us"
        showRing={false}
      />
    </div>
  )
}
