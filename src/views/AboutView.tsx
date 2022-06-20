import ContactInfoSection from "../components/about/ContactInfoSection"
import MemberGridSection from "../components/about/MemberGridSection"
import OverviewSection from "../components/about/OverviewSection"
import Footer from "../components/Footer"
import Header from "../components/Header"
import { useBoardMembers, useTeamMembers } from "../data/team"

const AboutView = () => {
    return (
        <main className="about">
            <Header />
            <OverviewSection />
            <MemberGridSection title="Vorstand" members={useBoardMembers()} />
            <MemberGridSection title="Team" members={useTeamMembers()} />
            <ContactInfoSection />
            <Footer />
        </main>
    )
}

export default AboutView