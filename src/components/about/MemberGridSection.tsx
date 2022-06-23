import SectionTitle from '../SectionTitle'
import { MemberModel } from '../../strapi/team/team'
import './MemberGridSection.scss'
import ExternalLink from '../ExternalLink'
import { ReactComponent as InstagramLogo } from '../../assets/svg/icons/instagram.svg'
import { ReactComponent as FacebookLogo } from '../../assets/svg/icons/facebook.svg'
import { ReactComponent as LinkedinLogo } from '../../assets/svg/icons/linkedin.svg'
import { ReactComponent as GithubLogo } from '../../assets/svg/icons/github.svg'
import { ReactComponent as EmailLogo } from '../../assets/svg/icons/email.svg'

type MemberGridSectionProps = {
  title: string
  members: MemberModel[]
}

const MemberGridSection = ({ title, members }: MemberGridSectionProps) => {
  return (
    <section className="member-grid-section">
      <SectionTitle>{title}</SectionTitle>
      <div className="content">
        {members.map((member, i) => (
          <div key={i} className="member">
            <img src={member.imageUrl} alt={member.name} />
            <h3>{member.name}</h3>
            <h4>{member.role}</h4>
            <div className="social-media-row">
              {member.instagramUrl && (
                <ExternalLink to={member.instagramUrl} target="_blank">
                  <InstagramLogo />
                </ExternalLink>
              )}
              {member.facebookUrl && (
                <ExternalLink to={member.facebookUrl} target="_blank">
                  <FacebookLogo />
                </ExternalLink>
              )}
              {member.linkedinUrl && (
                <ExternalLink to={member.linkedinUrl} target="_blank">
                  <LinkedinLogo />
                </ExternalLink>
              )}
              {member.githubUrl && (
                <ExternalLink to={member.githubUrl} target="_blank">
                  <GithubLogo />
                </ExternalLink>
              )}
              {member.email && (
                <ExternalLink to={member.email} target="_blank">
                  <EmailLogo />
                </ExternalLink>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default MemberGridSection
