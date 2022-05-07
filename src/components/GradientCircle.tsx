import './GradientCircle.scss'
import classNames from 'classnames'

type GradientCircleProps = {
    className?: string
}

const GradientCircle = ({className}: GradientCircleProps) => {
    return (
        <div className={classNames('gradient-circle', className)} />
    )
}

export default GradientCircle