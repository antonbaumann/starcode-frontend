import Header from "../components/Header"
import Footer from "../components/Footer"
import HowYouCanHelpSection from "../components/volunteer/HowYouCanHelpSection"
import LocationsSection from "../components/volunteer/LocationsSection"
import GroupsSection from "../components/volunteer/GroupsSection"

const VolunteerView = () => {
    return (
        <main className="volunteer">
            <Header />
            <HowYouCanHelpSection />
            <LocationsSection />
            <GroupsSection />
            <Footer />
        </main>
    )
}

export default VolunteerView