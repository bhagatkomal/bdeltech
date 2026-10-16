import { industries } from '../../data/home'
import HomeImage from './HomeImage'

export default function Industries() {
  return (
    <section id="industries" className="home-section home-industries" aria-labelledby="industries-title">
      <div className="container">
        <p className="eyebrow">Industries</p>
        <h2 id="industries-title">Expertise that understands your world.</h2>
        <div className="home-industries-grid">
          {industries.map(({ title, image }) => <article className="home-industry-card" key={title}><HomeImage className="home-industry-icon" region={image} /><h3>{title}</h3></article>)}
        </div>
      </div>
    </section>
  )
}
