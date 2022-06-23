import Footer from '../components/Footer'
import Header from '../components/Header'
import GradientWrapper from '../components/mission/GradientWrapper'
import LetsChangeTogetherSection from '../components/mission/LetsChangeTogetherSection'
import FastestGrowingIndustrySection from '../components/mission/FastestGrowingIndustrySection'
import WomenProportionSection from '../components/mission/WomenProportionSection'
import GenderExplanation from '../components/GenderExplanation'
import WageComparisonSection from '../components/mission/WageComparisonSection'
import WageGapSection from '../components/mission/WageGapSection'
import OurGoalSection from '../components/mission/OurGoalSection'

const MissionView = () => {
  return (
    <main className="mission">
      <Header />
      <GradientWrapper>
        <LetsChangeTogetherSection />
        <FastestGrowingIndustrySection />
        <WomenProportionSection />
        <WageComparisonSection />
        <WageGapSection />
        <OurGoalSection />
      </GradientWrapper>
      <GenderExplanation />
      <Footer />
    </main>
  )
}

export default MissionView
