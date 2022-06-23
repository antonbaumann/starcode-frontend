import SectionTitle from '../SectionTitle'
import './OverviewSection.scss'
import { ReactComponent as TeamSvg } from '../../assets/svg/Team.svg'

const OverviewSection = () => {
  return (
    <section className="about-overview-section">
      <div className="content">
        <SectionTitle>Das sind wir!</SectionTitle>
        <p>
          Das Starcode Team setzt sich aus Studierenden verschiedenster
          Fachrichtungen und Studienorte in und außerhalb Deutschlands zusammen.
          Unterstützt wird es durch die Expertise berufserfahrener Board-Members
          aus dem IT Bereich. Unser gemeinsames Ziel ist eine größere
          Genderdiversität im IT-Sektor!
        </p>
      </div>
      <TeamSvg className="team-svg" />
    </section>
  )
}

export default OverviewSection
