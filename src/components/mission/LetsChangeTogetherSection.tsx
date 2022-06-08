import './LetsChangeTogetherSection.scss'
import SectionTitle from '../SectionTitle'
import ArrowDownIcon from '../ArrowDownIcon'

const LetsChangeTogetherSection = () => {
    return (
        <section className="lets-change-together-section">
            <SectionTitle className="section-title">Lets Change Together</SectionTitle>
            <div className='arrow-container'>
                <ArrowDownIcon height='3em' stroke='#fff'/>
            </div>
        </section>
    )
        
}

export default LetsChangeTogetherSection