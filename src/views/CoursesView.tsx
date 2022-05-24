import CourseListSection from "../components/courses/CourseListSection"
import NextCoursesSection from "../components/courses/NextCoursesSection"
import Footer from "../components/Footer"
import Header from "../components/Header"

const CoursesView = () => {
    return (
        <main className="courses">
            <Header />
            <NextCoursesSection />
            <CourseListSection /> 
            <Footer />
        </main>
    )
}

export default CoursesView