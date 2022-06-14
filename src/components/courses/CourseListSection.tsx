import Course from '../Course'
import {CourseModel} from '../../data/courses'
import './CourseListSection.scss'
import girlImage from '../../assets/img/girl2.png'
import { useState } from 'react'


type CourseListSectionProps = {
    identifier?: string 
    courses: CourseModel[]
}

const CourseListSection = ({courses, identifier}: CourseListSectionProps) => {   
    const [openCourseId, setOpenCourseId] = useState('')

    return (
        <div className="course-list-section" id={identifier}>
            {courses.map(course => (
                <Course 
                    key={course.id} 
                    course={course} 
                    isCollapsed={course.id !== openCourseId}
                    onToggleCollapse={() => setOpenCourseId(course.id === openCourseId ? '' : course.id)}
                />
            ))}
            <img src={girlImage} className="girl-image" alt='girl'/>
        </div>
    )
}

export default CourseListSection