import './Button.scss'
import classNames from 'classnames'

type ButtonProps = {
  text: string
  className?: string
  icon?: React.ReactNode
  onClick?: () => void
}

const Button = ({ text, className, icon, onClick }: ButtonProps) => {
  return (
    <div className={classNames('button', className)} onClick={onClick}>
      {icon && <div className="icon-wrapper">{icon}</div>}
      <div className='text'>{text}</div>
    </div>
  )
}

export default Button
