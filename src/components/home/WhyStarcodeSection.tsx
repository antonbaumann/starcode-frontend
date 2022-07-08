import './WhyStarcodeSection.scss'
import SectionTitle from '../SectionTitle'
import twoGirlsStar from '../../assets/img/2_girls_star.png'

const WhyStarcodeSection = () => {
  return (
    <section className="why-starcode">
      <div className="content">
        <SectionTitle className="section-title">Warum Starcode?</SectionTitle>
        <p>
          Wir bieten als gemeinnütziger Verein kostenlose Programmierkurse für
          Mädchen* zwischen 11 und 19 Jahren an, um ihnen die vielfältigen
          Möglichkeiten und Chancen der Informatik näher zu bringen und mit
          einer offenen und inspirierenden Community das Interesse an
          entsprechenden Studiengängen zu wecken. Gemeinsam wollen wir so für
          mehr Genderdiversität in der IT-Branche sorgen!
        </p>
      </div>
      <img src={twoGirlsStar} className="GirlsImage" alt="two girls" />
    </section>
  )
}

export default WhyStarcodeSection
