import Header from "../components/Header"
import Footer from "../components/Footer"
import HowYouCanHelpSection from "../components/volunteer/HowYouCanHelpSection"
import LocationsSection from "../components/volunteer/LocationsSection"

const VolunteerView = () => {
    return (
        <main className="volunteer">
            <Header />
            <HowYouCanHelpSection />
            <LocationsSection />
            <Footer />
        </main>
    )
}

export default VolunteerView