import { useState } from "react"
import CourseListSection from "../components/courses/CourseListSection"
import NextCoursesSection from "../components/courses/NextCoursesSection"
import Footer from "../components/Footer"
import Header from "../components/Header"

import { useCourses } from "../data/courses"

const CoursesView = () => {
    const courses = useCourses()
    const cities = Array.from(new Set(courses.map(course => course.city))).sort()

    const [selectedCity, setSelectedCity] = useState<string | null>(null)

    const courseListSectionId = 'course-list-section-id'

    const scrollToCourseList = () => {
        const courseList = document.getElementById(courseListSectionId)
        if (!courseList) return

        const bounds = courseList.getBoundingClientRect()

        window.scrollTo({
        top: bounds.top + window.scrollY - 60, 
        left: 0, 
        behavior: 'smooth' 
        });
    }

    const selectCity = (city: string) => {
        setSelectedCity(city)
        scrollToCourseList()
    }

    const resetFilter = () => {
        setSelectedCity(null)
    }

    return (
        <main className="courses">
            <Header />
            <NextCoursesSection 
                cities={cities} 
                selectedCity={selectedCity} 
                onSelectCity={selectCity}
                onResetFilter={resetFilter}
                onClickArrow={scrollToCourseList}
            />
            <CourseListSection 
                courses={courses.filter(course => selectedCity === null || course.city === selectedCity)}
                identifier={courseListSectionId}
            /> 
            <Footer />
        </main>
    )
}

export default CoursesView