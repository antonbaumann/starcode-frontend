import GradientCircle from '../GradientCircle'
import './DonateSection.scss'
import girlsImage from '../../assets/img/4_girls.png'
import Button from '../Button'
import { Link } from 'react-router-dom'
import { sendEvent } from '../../util/analytics'

const DonateSection = () => {
  const sendDonateEvent = () => {
    sendEvent('donate', { category: 'donate' })
  }

  return (
    <section className="donate-section">
      <div className="content">
        <GradientCircle className="circle" />
        <img src={girlsImage} className="girls-image" alt="group of girls" />
        <Button
          text="Jetzt spenden"
          className="button"
          onClick={sendDonateEvent}
        />
        <div className="card">
          Wir freuen uns über jede Spende! Starcode inspiriert junge Frauen dazu
          ihre Leidenschaften in einer technologieorientierten Welt zu
          verfolgen. Durch Ihre Spende schaffen Sie den Teilnehmerinnen die
          Möglichkeit ihr Potenzial zu entfalten und einzigartige
          Lernerfahrungen im MINT-Bereich zu erleben. Ihre Spende ermöglicht
          Chancen im technischen Bereich, hilft bei der Entwicklung neuer
          Programme und bietet kostenlose und erstklassige Betreuung der
          Teilnehmerinnen. Oder <Link to="/contact">kontaktieren</Link> Sie uns
          für weitere Infos darüber wie Sie uns helfen können.
          <Link to="/volunteer">Hier</Link> gehts zu unserer Volunteer-Seite.
          Vielen Dank für Ihren Beitrag!
        </div>
      </div>
    </section>
  )
}

export default DonateSection
