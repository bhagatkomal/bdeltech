import { useState } from 'react'
import { Link, NavLink } from 'react-router'
import { navigation } from '../../data/navigation'
import Icon from '../ui/Icon'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link className="brand" to="/" onClick={closeMenu}><span className="brand-mark" aria-hidden="true">b</span>bdeltech</Link>
        <button className="menu-toggle" type="button" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} aria-controls="main-navigation" onClick={() => setMenuOpen(!menuOpen)}><Icon name={menuOpen ? 'close' : 'menu'} /></button>
        <nav id="main-navigation" className={menuOpen ? 'navigation is-open' : 'navigation'} aria-label="Main navigation">
          {navigation.map(({ label, to }) => to.includes('#') ? (
            <Link key={to} to={to} onClick={closeMenu}>{label}</Link>
          ) : (
            <NavLink key={to} to={to} end onClick={closeMenu}>{label}</NavLink>
          ))}
          <Link className="button mobile-contact" to="/contact" onClick={closeMenu}>Contact <Icon name="arrow" /></Link>
        </nav>
        <Link className="button header-contact" to="/contact">Contact <Icon name="arrow" /></Link>
      </div>
    </header>
  )
}
