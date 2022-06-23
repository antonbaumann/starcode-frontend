import './FindCoursesSection.scss'
import girlsImage from '../../assets/img/4_girls.png'
import GradientCircle from '../GradientCircle'
import SectionTitle from '../SectionTitle'
import Button from '../Button'
import { Link } from 'react-router-dom'

const FindCoursesSection = () => {
  return (
    <section className="find-courses">
      <div className="GirlsImageOnCirlce">
        <GradientCircle className="gradient-circle-home" />
        <img src={girlsImage} className="GirlsImage" alt="group of girls" />
      </div>
      <div className="content">
        <SectionTitle className="section-title">
          Everyone
          <br />
          Can Code
        </SectionTitle>
        <p>
          Finde Kurse in deiner Nähe und
          <br /> starte deine Zukunft in der IT
        </p>
        <Link to="/courses">
          <Button text="Kurs finden" />
        </Link>
      </div>
    </section>
  )
}

export default FindCoursesSection
