import { Outlet, useLocation } from 'react-router'
import Header from './Header'
import Footer from './Footer'
import useRouteScroll from '../../hooks/useRouteScroll'

export default function SiteLayout() {
  const pathname = useLocation().pathname
  const isFullWidth = ['/', '/about', '/services', '/solutions', '/industries', '/work', '/insights', '/careers', '/contact'].includes(pathname)
  useRouteScroll()
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Header />
      <main id="main-content" className={isFullWidth ? 'home-content' : 'container main-content'} tabIndex={-1}><Outlet /></main>
      <Footer />
    </div>
  )
}
