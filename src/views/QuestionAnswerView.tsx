import Header from "../components/Header"
import Footer from "../components/Footer"
import OverviewSection from "../components/faq/OverviewSection"
import QuestionAnswerSection from "../components/faq/QuestionAnswerSection"

const QuestionAnswerView = () => {
    return (
        <main className="question-answer">
            <Header />
            <OverviewSection />
            <QuestionAnswerSection />
            <Footer />
        </main>
    )
}

export default QuestionAnswerView