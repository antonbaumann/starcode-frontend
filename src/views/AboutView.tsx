import ContactInfoSection from "../components/about/ContactInfoSection"
import MemberGridSection from "../components/about/MemberGridSection"
import OverviewSection from "../components/about/OverviewSection"
import Footer from "../components/Footer"
import Header from "../components/Header"
import { useTeam } from "../strapi/team/team"

const AboutView = () => {
    const team = useTeam()

    return (
        <main className="about">
            <Header />
            <OverviewSection />
            <MemberGridSection title="Vorstand" members={team.board} />
            <MemberGridSection title="Team" members={team.members} />
            <ContactInfoSection />
            <Footer />
        </main>
    )
}

export default AboutView