import Hero from '../components/home/Hero'
import Services from '../components/home/Services'
import WhyUs from '../components/home/WhyUs'
import Industries from '../components/home/Industries'
import ContactBanner from '../components/home/ContactBanner'
import usePageTitle from '../hooks/usePageTitle'
import '../styles/home.css'

export default function HomePage() {
  usePageTitle('Home')
  return <div className="home-page"><Hero /><Services /><WhyUs /><Industries /><ContactBanner /></div>
}
