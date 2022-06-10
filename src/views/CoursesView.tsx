import { useEffect } from "react"
import { json } from "stream/consumers"
import CourseListSection from "../components/courses/CourseListSection"
import NextCoursesSection from "../components/courses/NextCoursesSection"
import Footer from "../components/Footer"
import Header from "../components/Header"

import { useCourses } from "../data/courses"

const CoursesView = () => {
    const courses = useCourses()

    return (
        <main className="courses">
            <Header />
            <NextCoursesSection />
            <CourseListSection courses={courses}/> 
            <Footer />
        </main>
    )
}

export default CoursesView