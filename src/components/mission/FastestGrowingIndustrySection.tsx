import './FastestGrowingIndustrySection.scss'

import arrowImg from '../../assets/img/arrow.png'
import graphImg from '../../assets/img/graph.png'

const FastestGrowingIndustrySection = () => {
    return (
        <section className="fastest-growing-industry-section">
            <img src={arrowImg} alt='arrow' className='arrow-image'/>
            <div className='text-on-graph'>
                <div className='circle' />
                <img src={graphImg} alt='graph' className='graph-image'/>
                <span className='text'>Die IT-Branche ist einer der am schnellsten wachsenden Wirtschaftszweige der Welt</span>
            </div>
        </section>
    )
}

export default FastestGrowingIndustrySection