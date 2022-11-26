import { Link } from 'react-router-dom'
import SectionTitle from '../SectionTitle'
import './OverviewSection.scss'

const OverviewSection = () => {
  return (
    <section className="overview-section">
      <SectionTitle className="section-title">FAQ</SectionTitle>
      <div className="text">
        Du hast Fragen an uns? Schreib uns gerne eine Email oder kontaktiere
        unsere Fachspezialisten.
        <br />
        <Link to="/about">Hier</Link> findest du alle Kontakte.
      </div>
      <div className="text">
        Unsere allgemeine Email: <br />
        <a href="mailto:contact@starcode.de">contact@starcode.de</a>
      </div>
    </section>
  )
}

export default OverviewSection
