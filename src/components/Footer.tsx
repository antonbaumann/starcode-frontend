import './Footer.scss';
import Button from "./Button"
import classNames from "classnames"
import { Link } from "react-router-dom"
import FacebookIcon from './FacebookIcon';
import InstagramIcon from './InstagramIcon';
import TicktockIcon from './TicktockIcon';

type FooterProps = {
    darkMode?: boolean
}

const Footer = ({darkMode}: FooterProps) => {
    return (
        <footer className={classNames('footer', {'dark': darkMode})}>
            Du willst mehr erfahren?

            <Button text="Newsletter" className="newsletter-button"/>

            <div className="social-media">
                <FacebookIcon height='2em' stroke='#000' />
                <InstagramIcon height='2em' stroke='#000' />
                {/* <TicktockIcon height='2em' stroke='#000' /> */}
            </div>

            <div className="footer-menu">
                <Link to="/partners">Partner</Link>
                <Link to="/contact">Kontakt</Link>
                <Link to="/faq">FAQ</Link>
                <Link to="/imprint">Impressum</Link>
            </div>
        </footer>
    )
}

export default Footer