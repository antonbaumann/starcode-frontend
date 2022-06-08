import GradientCircle from '../GradientCircle'
import './OurGoalSection.scss'

import handImg from '../../assets/img/hand.png'
import starImg from '../../assets/img/star_white.png'

const OurGoalSection = () => {
    return (
        <section className="our-goal-section">
            <div className="content">
                <div className='star-and-hand'>
                    <GradientCircle className='circle' />
                    <img src={starImg} alt="star" className='star-image' />
                    <img src={handImg} alt="hand" className='hand-image' />
                </div>
                <div className='text'>
                    Wir wollen durch unsere Kurse das Interesse junger Mädchen an der Informatik wecken und so die Folgen der mangelden Diversität in der Branche bekämpfen.
                </div>
            </div>
        </section>
    )
}

export default OurGoalSection