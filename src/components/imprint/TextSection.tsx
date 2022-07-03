import './TextSection.scss'
import classNames from 'classnames'

type TextSectionProps = {
  title: string
  className?: string
  children?: JSX.Element
}

const TextSection = ({ title, className, children }: TextSectionProps) => {
  return (
    <section className={classNames('text-section', className)}>
      <h2>{title}</h2>
      <div className="content">{children}</div>
    </section>
  )
}

export default TextSection
