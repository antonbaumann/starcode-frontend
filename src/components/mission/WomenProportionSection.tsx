import './WomenProportionSection.scss'
import twentyFivePercentImage from '../../assets/img/25perc.png'

const WomenProportionSection = () => {
  return (
    <div className="women-proportion-section">
      <div className="text-image-group">
        <span>Frauen* machen in Deutschland aber nur</span>
        <img src={twentyFivePercentImage} alt="25%" className="percent-image" />
        <span>der Informatik-Studierenden aus.</span>
      </div>
    </div>
  )
}

export default WomenProportionSection
