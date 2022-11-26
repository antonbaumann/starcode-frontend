import './FindCoursesSection.scss'
import girlsImage from '../../assets/img/4_girls.png'
import GradientCircle from '../GradientCircle'
import SectionTitle from '../SectionTitle'
import Button from '../Button'
import ExternalLink from '../ExternalLink'

const FindCoursesSection = () => {
  return (
    <section className="find-courses">
      <div className="GirlsImageOnCirlce">
        <GradientCircle className="gradient-circle-home" />
        <img src={girlsImage} className="GirlsImage" alt="group of girls" />
      </div>
      <div className="content">
        <SectionTitle className="section-title">
          Coding ist
          <br />
          Frauensache!
        </SectionTitle>
        <p>
          Kostenlose Programmierkurse
          <br />
          von Student:innen für Schülerinnen*!
        </p>
        <div className="button-container">
          <ExternalLink to="http://eepurl.com/ibqUwf" target="_blank">
            <Button text="Schülerinnen" />
          </ExternalLink>
          <ExternalLink to="https://forms.gle/4scBtkLUrFbq1Wbm9" target="_blank">
            <Button text="Lehrer:innen" />
          </ExternalLink>
        </div>
      </div>
    </section>
  )
}

export default FindCoursesSection
