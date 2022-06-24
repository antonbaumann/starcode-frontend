import './Header.scss'
import { Link } from 'react-router-dom'
import StarcodeLogo from './StarcodeLogo'
import MenuIcon from './MenuIcon'
import { useState } from 'react'
import classNames from 'classnames'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <nav className="header">
        <div className="first-row-mobile">
          <MenuIcon
            open={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            height="1.2em"
          />
          <Link to="/" onClick={() => setMenuOpen(false)}>
            <StarcodeLogo className="logo" height="1.5em" />
            <h1 className="assitive-text">starcode</h1>
          </Link>
        </div>
        <ul className={classNames('menu', { open: menuOpen })}>
          <li>
            <Link to="/mission" onClick={() => setMenuOpen(false)}>
              Mission
            </Link>
          </li>
          <li>
            <Link to="/courses" onClick={() => setMenuOpen(false)}>
              Kursangebot
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setMenuOpen(false)}>
              Über uns
            </Link>
          </li>
          <li>
            <Link to="/volunteer" onClick={() => setMenuOpen(false)}>
              Volunteer
            </Link>
          </li>
          <li>
            <Link to="/donate" onClick={() => setMenuOpen(false)}>
              Spenden
            </Link>
          </li>
          {/* <li className="secondary"><Link to="/partners">Partner</Link></li> */}
          <li className="secondary">
            <Link to="/contact" onClick={() => setMenuOpen(false)}>
              Kontakt
            </Link>
          </li>
          <li className="secondary">
            <Link to="/faq" onClick={() => setMenuOpen(false)}>
              FAQ
            </Link>
          </li>
          <li className="secondary">
            <Link to="/imprint" onClick={() => setMenuOpen(false)}>
              Impressum
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Header
