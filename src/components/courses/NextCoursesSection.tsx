import './NextCoursesSection.scss';
import SectionTitle from "../SectionTitle"
import girlImg from '../../assets/img/girl1.png';
import Button from '../Button';
import ArrowDownIcon from '../ArrowDownIcon';
import { useState } from 'react';
import classNames from 'classnames'

type NextCoursesSectionProps = {
    cities: string[]
    selectedCity: string | null
    onSelectCity: (city: string) => void
    onResetFilter: () => void
    onClickArrow?: () => void
}

const NextCoursesSection = ({cities, selectedCity, onSelectCity, onResetFilter, onClickArrow}: NextCoursesSectionProps) => {
    const [showOptions, setShowOptions] = useState(false)

    const selectCity = (city: string) => {
        onSelectCity(city)
        setShowOptions(false)
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
            <div className="content">
                <SectionTitle className="title">Unsere Nächsten Kurse</SectionTitle>  
                <div className='filter-container'>
                    <Button 
                        text={'Stadt' + formatCityButtonText(selectedCity)}
                        className='filter-button'
                        onClick={() => setShowOptions(!showOptions)}
                    />
                    <Button 
                        text='Zurücksetzen'
                        className='reset-button'
                        onClick={resetFilters}
                    />
                </div>
                <div className={classNames('options-container', {'hidden': !showOptions})}>
                    {cities.map(city => (
                        <Button 
                            text={city} 
                            className="option-button" 
                            key={city}
                            onClick={() => selectCity(city)}
                        />
                    ))}
                </div>

                <div className='all-courses-indicator'>
                    <p>Zu allen Kursen</p>
                    <ArrowDownIcon height='3em' stroke='#000' onClick={onClickArrow} />
                </div>

            </div>
            <div className="image-container">
                <img src={girlImg} />
            </div>
        </section>
    )
}

export default NextCoursesSection