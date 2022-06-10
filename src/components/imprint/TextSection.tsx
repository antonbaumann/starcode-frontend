import './TextSection.scss'
import classNames from 'classnames'

type TextSectionProps = {
    title: string
    text: string
    className?: string
}

const TextSection = ({ title, text, className }: TextSectionProps) => {
    return (
        <section className={classNames('text-section', className)}>
            <h2>{title}</h2>
            <div className='content'>
                {text}
            </div>
        </section>
    )
}

export default TextSection