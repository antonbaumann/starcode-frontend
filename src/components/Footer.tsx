import './Footer.scss'
import Button from './Button'
import classNames from 'classnames'
import { Link } from 'react-router-dom'
import { ReactComponent as InstagramLogo } from '../assets/svg/icons/instagram.svg'
import { ReactComponent as FacebookLogo } from '../assets/svg/icons/facebook.svg'
import { ReactComponent as LinkedinLogo } from '../assets/svg/icons/linkedin.svg'
import { useSocialMediaUrls } from '../strapi/social/social'
import ExternalLink from './ExternalLink'

type FooterProps = {
  darkMode?: boolean
}

const Footer = ({ darkMode }: FooterProps) => {
  const socialMediaUrls = useSocialMediaUrls()

  return (
    <footer className={classNames('footer', { dark: darkMode })}>
      Du willst mehr erfahren?
      <ExternalLink to={socialMediaUrls.newsletterUrl} target="_blank">
        <Button text="Newsletter" className="newsletter-button" />
      </ExternalLink>
      <div className="social-media">
        <ExternalLink to={socialMediaUrls.facebookUrl} target="_blank">
          <FacebookLogo height="2em" width="2em" stroke="#000" />
        </ExternalLink>
        <ExternalLink to={socialMediaUrls.instagramUrl} target="_blank">
          <InstagramLogo height="2em" width="2em" stroke="#000" />
        </ExternalLink>
        <ExternalLink to={socialMediaUrls.linkedinUrl} target="_blank">
          <LinkedinLogo height="2em" width="2em" stroke="#000" />
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
