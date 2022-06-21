import { useFAQ, FAQModel } from '../../strapi/faq/faq'
import './QuestionAnswerSection.scss';

type FAQElementProps = {
    number: number
} & FAQModel

const FAQElement = ({number, question, answer}: FAQElementProps) => {
    return (
        <div className='question-answer-element'>
            <div className='number'>{String(number).padStart(2, '0')}</div>
            <div className='content'>
                <div className='question'>{question}</div>
                <div className='answer'>{answer}</div>
            </div>
        </div>
    )
}     

const QuestionAnswerSection = () => {
    const questions = useFAQ()

    return (
        <section className='question-answer-section'>
            {questions.map(({question, answer}, index) => (
                <FAQElement 
                    key={index} 
                    number={index + 1} 
                    question={question}
                    answer={answer}
                />
            ))}
        </section>
    )
}

export default QuestionAnswerSection