import './Footer.scss';
import Button from "./Button"
import classNames from "classnames"
import { Link } from "react-router-dom"
import FacebookIcon from './FacebookIcon';
import InstagramIcon from './InstagramIcon';
import { useSocialMediaUrls } from '../strapi/social/social';
import ExternalLink from './ExternalLink';

type FooterProps = {
    darkMode?: boolean
}

const Footer = ({darkMode}: FooterProps) => {
    const socialMediaUrls = useSocialMediaUrls()

    return (
        <footer className={classNames('footer', {'dark': darkMode})}>
            Du willst mehr erfahren?

            <ExternalLink to={socialMediaUrls.newsletterUrl} target="_blank">
                <Button text="Newsletter" className="newsletter-button"/>
            </ExternalLink>

            <div className="social-media">
                <ExternalLink to={socialMediaUrls.facebookUrl} target="_blank">
                    <FacebookIcon height='2em' stroke='#000' />
                </ExternalLink>
                <ExternalLink to={socialMediaUrls.instagramUrl} target="_blank">
                    <InstagramIcon height='2em' stroke='#000' />
                </ExternalLink>
            </div>

            <div className="footer-menu">
                <Link to="/contact">Kontakt</Link>
                <Link to="/faq">FAQ</Link>
                <Link to="/imprint">Impressum</Link>
            </div>
        </footer>
    )
}

export default Footer