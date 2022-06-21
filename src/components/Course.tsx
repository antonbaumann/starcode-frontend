import './Course.scss'
import ChatbotIcon from "./ChatbotIcon"
import classNames from 'classnames'
import {toDayMonth, toGermanLetterDate} from '../util/date'
import CollapseButton from './CollapseButton'
import Button from './Button'
import { CourseModel } from '../strapi/courses/courses'
import { Link } from 'react-router-dom'

type CourseProps = {
    className?: string
    isCollapsed: boolean
    course: CourseModel

    onToggleCollapse: () => void
}

const Course = ({
    className, 
    isCollapsed, 
    course,
    onToggleCollapse,
}: CourseProps) => {
    return (
        <div className={classNames('course', className, {'collapsed': isCollapsed})}>
            <div className='course-header'>
                <div className='chatbot-icon-container'>
                    <ChatbotIcon height="2.5em" stroke="#0821DA"/>
                </div>
                <div className="date">
                    {toDayMonth(course.startDate)}
                </div>

                <div className="info">
                    <div className="city">{course.city}</div>
                    <div className="title">{course.name}</div>
                </div>

                <Button className='enroll-button' text='anmelden' />
            </div>
            <div className="course-body">
                <div className="age"><b>Wer?</b> Mädchen* im Alter von {course.minimumAge} bis {course.maximumAge}</div>
                <div className="when"><b>Wann?</b> {toGermanLetterDate(course.startDate)} - {toGermanLetterDate(course.endDate)}</div>
                <div className="where"><b>Wo?</b> {course.city}</div>
                <div className='description'>{course.description}</div>
            </div>
            <a href={course.enrollFormUrl ?? '#'} target="_blank" rel="noopener noreferrer">
                <Button className='enroll-button-mobile' text='anmelden' />
            </a>
            <CollapseButton isCollapsed={!isCollapsed} onClick={onToggleCollapse}/>
        </div>
    )
}

export default Course