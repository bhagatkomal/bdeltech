import { useRef, useState } from 'react'
import type { FormEvent } from 'react'
import { Link } from 'react-router'
import workspace from '../assets/about-original-2.jpg'
import Icon from '../components/ui/Icon'
import { insightCategories, insights } from '../data/insights'
import usePageTitle from '../hooks/usePageTitle'
import '../styles/insights.css'

export default function InsightsPage() {
  usePageTitle('Insights')
  const [category, setCategory] = useState<string>('All')
  const [selectedInsight, setSelectedInsight] = useState<(typeof insights)[number] | null>(null)
  const [subscriptionMessage, setSubscriptionMessage] = useState('')
  const preview = useRef<HTMLDialogElement>(null)
  const visibleInsights = insights.filter(insight => category === 'All' || insight.category === category)

  function subscribe(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubscriptionMessage('Newsletter subscriptions aren’t available yet. Please contact us to stay in touch.')
  }

  return (
    <div className="insights-page">
      <div className="container">
        <section className="insights-introduction" aria-labelledby="insights-page-title">
          <div>
            <p className="eyebrow">Insights</p>
            <h1 id="insights-page-title"><span>Ideas, trends & </span><span>perspectives.</span></h1>
            <p className="insights-summary">Explore the latest articles, industry insights and technology trends to stay ahead of what’s next.</p>
          </div>
          <img className="insights-hero-photo" src={workspace} alt="Laptop in a thoughtful workspace" fetchPriority="high" />
        </section>

        <section aria-label="Latest insights">
          <div className="insights-filters" role="group" aria-label="Filter insights by category">
            {insightCategories.map(value => <button key={value} type="button" aria-pressed={category === value} onClick={() => setCategory(value)}>{value}</button>)}
          </div>
          <p className="insights-screen-reader" role="status">{visibleInsights.length} articles</p>
          <div className="insights-grid">
            {visibleInsights.map(insight => (
              <article className="insight-card" key={insight.title}>
                <img src={insight.image} alt="" loading="lazy" />
                <div className="insight-card-copy">
                  <p className="eyebrow">{insight.category}</p>
                  <h2>{insight.title}</h2>
                  <p className="insight-description">{insight.description}</p>
                  <button className="insight-read-more" type="button" aria-label={`Read more: ${insight.title}`} onClick={() => { setSelectedInsight(insight); preview.current?.showModal() }}>Read more <Icon name="arrow" /></button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="insights-newsletter" aria-labelledby="newsletter-title">
          <div>
            <p className="eyebrow">Stay in the loop</p>
            <h2 id="newsletter-title">Get our latest insights.</h2>
            <p>Trends, thinking and practical advice—straight to your inbox.</p>
          </div>
          <form onSubmit={subscribe} className="insights-subscribe">
            <label className="insights-screen-reader" htmlFor="newsletter-email">Email address</label>
            <div className="insights-subscribe-fields">
              <input id="newsletter-email" name="email" type="email" autoComplete="email" placeholder="you@company.com" required aria-describedby="newsletter-status" />
              <button className="button" type="submit">Subscribe <Icon name="arrow" /></button>
            </div>
            <p id="newsletter-status" role="status">{subscriptionMessage}{subscriptionMessage && <> <Link to="/contact">Contact us <span aria-hidden="true">→</span></Link></>}</p>
          </form>
        </section>
      </div>

      <dialog className="insight-preview" ref={preview} aria-labelledby="insight-preview-title">
        <form method="dialog"><button className="insight-preview-close" aria-label="Close article preview"><Icon name="close" /></button></form>
        {selectedInsight && <>
          <p className="eyebrow">{selectedInsight.category}</p>
          <h2 id="insight-preview-title">{selectedInsight.title}</h2>
          <p>{selectedInsight.description}</p>
          <p className="insight-preview-note">The full article is coming soon.</p>
          <Link className="button" to="/contact">Discuss this topic <Icon name="arrow" /></Link>
        </>}
      </dialog>
    </div>
  )
}
