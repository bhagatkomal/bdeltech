import { Link } from 'react-router'
import { navigation } from '../../data/navigation'

const copyrightYear = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-company">
            <Link className="footer-brand" to="/">bdeltech</Link>
            <p>Technology, engineering and delivery for ambitious businesses.</p>
          </div>
          <nav className="footer-navigation" aria-label="Footer navigation">
            {navigation.filter(({ to }) => to !== '/').map(({ label, to }) => <Link key={to} to={to}>{label}</Link>)}
          </nav>
        </div>
        <p className="footer-copyright">© {copyrightYear} bdeltech. All rights reserved.</p>
      </div>
    </footer>
  )
}
