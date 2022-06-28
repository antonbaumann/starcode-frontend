import './NextCoursesSection.scss'
import SectionTitle from '../SectionTitle'
import girlImg from '../../assets/img/girl1.png'
import Button from '../Button'
import ArrowDownIcon from '../ArrowDownIcon'
import { useState } from 'react'
import classNames from 'classnames'
import { ReactComponent as FilterIcon } from '../../assets/svg/icons/filter.svg'
import { sendEvent } from '../../util/analytics'

type NextCoursesSectionProps = {
  cities: string[]
  selectedCity: string | null
  onSelectCity: (city: string) => void
  onResetFilter: () => void
  onClickArrow?: () => void
}

const NextCoursesSection = ({
  cities,
  selectedCity,
  onSelectCity,
  onResetFilter,
  onClickArrow,
}: NextCoursesSectionProps) => {
  const [showOptions, setShowOptions] = useState(false)

  const selectCity = (city: string) => {
    onSelectCity(city)
    setShowOptions(false)
    sendEvent('course_filter', { city: city, category: 'course' })
  }

  const resetFilters = () => {
    onResetFilter()
    setShowOptions(false)
  }

  const formatCityButtonText = (city: string | null) => {
    return city === null ? '' : ': ' + city
  }

  return (
    <section className="next-courses-section">
      <div className="image-container">
        <img src={girlImg} alt="girl" />
      </div>
      <div className="content">
        <SectionTitle className="title">Unsere Nächsten Kurse</SectionTitle>
        <div className="filter-container">
          <Button
            text={'Stadt' + formatCityButtonText(selectedCity)}
            icon={<FilterIcon width="0.9em" height="0.9em" />}
            className="filter-button"
            onClick={() => setShowOptions(!showOptions)}
          />
          <Button
            text="Zurücksetzen"
            className="reset-button"
            onClick={resetFilters}
          />
        </div>
        <div
          className={classNames('options-container', { hidden: !showOptions })}
        >
          {cities.map((city) => (
            <Button
              text={city}
              className="option-button"
              key={city}
              onClick={() => selectCity(city)}
            />
          ))}
        </div>

        <div className="all-courses-indicator">
          <p>Zu allen Kursen</p>
          <ArrowDownIcon height="3em" stroke="#000" onClick={onClickArrow} />
        </div>
      </div>
    </section>
  )
}

export default NextCoursesSection
