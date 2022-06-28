import './Course.scss'
import ChatbotIcon from './ChatbotIcon'
import classNames from 'classnames'
import { toDayMonth, toGermanLetterDate } from '../util/date'
import CollapseButton from './CollapseButton'
import Button from './Button'
import { CourseModel } from '../strapi/courses/courses'
import ExternalLink from './ExternalLink'
import { sendEvent } from '../util/events'

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
  const handleCourseBoxClick = () => {
    if (isCollapsed) {
      onToggleCollapse()
      sendCourseDetailEvent()
    }
  }

  const sendCourseEnrollEvent = () => {
    sendEvent('course_enroll', { city: course.city, category: 'course' })
  }

  const sendCourseDetailEvent = () => {
    sendEvent('course_detail', { city: course.city, category: 'course' })
  }

  return (
    <div
      className={classNames('course', className, { collapsed: isCollapsed })}
      onClick={handleCourseBoxClick}
    >
      <div className="course-header">
        <div className="chatbot-icon-container">
          <ChatbotIcon height="2.5em" stroke="#0821DA" />
        </div>
        <div className="date">{toDayMonth(course.startDate)}</div>

        <div className="info">
          <div className="city">{course.city}</div>
          <div className="title">{course.name}</div>
        </div>
        <ExternalLink to={course.enrollFormUrl ?? '#'} target="_blank">
          <Button
            className="enroll-button"
            text="anmelden"
            onClick={sendCourseEnrollEvent}
          />
        </ExternalLink>
      </div>
      <div className="course-body">
        <div className="age">
          <b>Wer?</b> Mädchen* im Alter von {course.minimumAge} bis{' '}
          {course.maximumAge}
        </div>
        <div className="when">
          <b>Wann?</b> {toGermanLetterDate(course.startDate)} -{' '}
          {toGermanLetterDate(course.endDate)}
        </div>
        <div className="where">
          <b>Wo?</b> {course.city}
        </div>
        <div className="description">{course.description}</div>
      </div>
      <ExternalLink to={course.enrollFormUrl ?? '#'} target="_blank">
        <Button
          className="enroll-button-mobile"
          text="anmelden"
          onClick={sendCourseEnrollEvent}
        />
      </ExternalLink>
      <CollapseButton isCollapsed={!isCollapsed} onClick={onToggleCollapse} />
    </div>
  )
}

export default Course
