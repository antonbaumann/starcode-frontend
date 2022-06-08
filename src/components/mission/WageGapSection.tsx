import './WageGapSection.scss'

import seventyFivePercentImg from '../../assets/img/75perc.png'
import hundredPercentImg from '../../assets/img/100perc.png'
import womanManImg from '../../assets/img/woman_man.png'

const WageGapSection = () => {
    return (
        <section className='wage-gap-section'>
            <div className='content'>
                <div className='graphic'>
                    <img src={seventyFivePercentImg} alt='75%' className='seventyfive-percent-image' />
                    <img src={womanManImg} alt='woman next to man' className='woman-man-image' />
                    <img src={hundredPercentImg} alt='100%' className='hundred-percent-image' />
                </div>
                <div className='text'>
                Trotz der großartigen Gehälter, die in der Branche gezahlt werden, verdienen Frauen* in dennoch nur 75% dessen, was ihre männlichen Kollegen verdienen
                </div>
            </div>
        </section>
    )
}

export default WageGapSection