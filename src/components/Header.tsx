import "./Header.scss"
import { Link } from "react-router-dom"
import StarcodeLogo from "./StarcodeLogo"
import MenuIcon from "./MenuIcon"
import { useState } from "react"
import classNames from "classnames"

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    return (<>
        <nav className="header">
            <div className="first-row-mobile">
                <MenuIcon 
                    open={menuOpen} 
                    onClick={() => setMenuOpen(!menuOpen)}
                    height="1.2em" 
                />
                <Link to="/"><StarcodeLogo className="logo" height="1.5em"/><h1 className="assitive-text">starcode</h1></Link>
            </div>
            <ul className={classNames("menu", {open: menuOpen})}>
                <li><Link to="/mission">Mission</Link></li>
                <li><Link to="/courses">Kursangebot</Link></li>
                <li><Link to="/about">Über uns</Link></li>
                <li><Link to="/volunteer">Volunteer</Link></li>
                <li><Link to="/donate">Spenden</Link></li>
                {/* <li className="secondary"><Link to="/partners">Partner</Link></li> */}
                <li className="secondary"><Link to="/contact">Kontakt</Link></li>
                <li className="secondary"><Link to="/faq">FAQ</Link></li>
                <li className="secondary"><Link to="/imprint">Impressum</Link></li>
            </ul>
        </nav>
    </>)
}

export default Header