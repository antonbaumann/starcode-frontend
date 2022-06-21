import SectionTitle from "../SectionTitle"
import { MemberModel } from "../../strapi/team/team"
import './MemberGridSection.scss'

type MemberGridSectionProps = {
    title: string
    members: MemberModel[]
}

const MemberGridSection = ({title, members}: MemberGridSectionProps) => {
    return (
        <section className='member-grid-section'>
            <SectionTitle>{title}</SectionTitle>
            <div className="content">
                {members.map((member, i) => (
                    <div key={i} className='member'>
                        <img src={member.imageUrl} alt={member.name} />
                        <h3>{member.name}</h3>
                        <h4>{member.role}</h4>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default MemberGridSection