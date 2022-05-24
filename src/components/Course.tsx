import './Course.scss'
import ChatbotIcon from "./ChatbotIcon"
import classNames from 'classnames'
import {toDayMonth, toGermanLetterDate} from '../util/date'
import CollapseButton from './CollapseButton'
import Button from './Button'

type CourseProps = {
    className?: string
    isCollapsed: boolean
    title: string
    cities: string[]
    dateFrom: Date
    dateTo: Date
    ageFrom?: number
    ageTo?: number
    description: string

    onToggleCollapse: () => void
}

const Course = ({
    className, 
    isCollapsed, 
    title, 
    cities, 
    dateFrom, 
    dateTo, 
    ageFrom=12,
    ageTo=19,
    description, 
    onToggleCollapse,
}: CourseProps) => {
    return (
        <div className={classNames('course', className, {'collapsed': isCollapsed})}>
            <div className='course-header'>
                <ChatbotIcon height="2.5em" stroke="#0821DA"/>
                <div className="date">
                    {toDayMonth(dateFrom)}
                </div>

                <div className="info">
                    <div className="city">{cities.at(0)}</div>
                    <div className="title">{title}</div>
                </div>

                <Button className='enroll-button' text='anmelden' />
            </div>
            <div className="course-body">
                <div className="age"><b>Wer?</b> Mädchen* im Alter von {ageFrom} bis {ageTo}</div>
                <div className="when"><b>Wann?</b> {toGermanLetterDate(dateFrom)} - {toGermanLetterDate(dateTo)}</div>
                <div className="where"><b>Wo?</b> {cities.join(', ')}</div>
                <div className='description'>{description}</div>
            </div>
            <CollapseButton isCollapsed={!isCollapsed} onClick={onToggleCollapse}/>
        </div>
    )
}

export default Course