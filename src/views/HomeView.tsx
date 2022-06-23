import Footer from '../components/Footer'
import Header from '../components/Header'
import FindCoursesSection from '../components/home/FindCoursesSection'
import UpcomingEventsSection from '../components/home/UpcomingEventsSection'
import WhyStarcodeSection from '../components/home/WhyStarcodeSection'

const Home = () => {
  return (
    <main className="home">
      <Header />
      <FindCoursesSection />
      <WhyStarcodeSection />
      <UpcomingEventsSection />
      <Footer darkMode={true} />
    </main>
  )
}

export default Home
