import Header from "../components/Header"
import FindCoursesSection from "../components/home/FindCoursesSection"
import NewsSection from "../components/home/NewsSection"
import UpcomingEventsSection from "../components/home/UpcomingEventsSection"
import WhyStarcodeSection from "../components/home/WhyStarcodeSection"

const Home = () => {
    return (
        <main className="home">
            <Header />
            <FindCoursesSection />
            <WhyStarcodeSection />
            <UpcomingEventsSection />
            <NewsSection />
        </main>
    )
}

export default Home