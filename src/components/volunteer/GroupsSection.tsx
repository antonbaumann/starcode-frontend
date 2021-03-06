import './GroupsSection.scss'
import SectionTitle from '../SectionTitle'
import { VolunteerGroup, volunteerGroups } from '../../data/volunteerGroups'
import { useState } from 'react'
import classNames from 'classnames'
import ExternalLink from '../ExternalLink'
import { sendEvent } from '../../util/analytics'

const GroupsSection = () => {
  const [selectedGroup, setSelectedGroup] = useState<VolunteerGroup>(
    volunteerGroups[0],
  )

  const handleClick = (groupTitle: string) => {
    const group = volunteerGroups.find((group) => group.title === groupTitle)
    if (group) {
      setSelectedGroup(group)
      sendEvent('volunteer_group_info', { group: groupTitle })
    }
  }

  return (
    <section className="groups-section">
      <SectionTitle className="section-title">Unsere Gruppen</SectionTitle>
      <div className="groups-card">
        <div className="groups-selector">
          {volunteerGroups.map((group: VolunteerGroup) => (
            <div
              className={classNames('group-selector-item', {
                active: group.title === selectedGroup.title,
              })}
              key={group.title}
              onClick={() => handleClick(group.title)}
            >
              <img src={group.iconUrl} alt={group.title} />
            </div>
          ))}
        </div>
        <div className="content">
          <h3>{selectedGroup.title}</h3>
          <p>
            {selectedGroup.description + ' '}
            <ExternalLink to={'mailto:' + selectedGroup.contactEmail}>
              <>{selectedGroup.contactEmail}</>
            </ExternalLink>
          </p>
        </div>
      </div>
    </section>
  )
}

export default GroupsSection
