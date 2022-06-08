import GradientCircle from '../GradientCircle'
import './WageComparisonSection.scss'

const WageComparisonSection = () => {
    return (
        <div className="wage-comparison-section">
            <div className="content">
                <div className='text'>Die IT-Branche bietet überdurchschnittliche Bezahlung</div>
                <GradientCircle className='circle'/>
            </div>
        </div>
    )
}

export default WageComparisonSection