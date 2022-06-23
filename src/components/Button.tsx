import './Button.scss'
import classNames from 'classnames'

type ButtonProps = {
  text: string
  className?: string
  children?: React.ReactNode
  onClick?: () => void
}

const Button = ({ text, className, onClick }: ButtonProps) => {
  return (
    <div className={classNames('button', className)} onClick={onClick}>
      {text}
    </div>
  )
}

export default Button
