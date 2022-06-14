import './LetsChangeTogetherSection.scss'
import SectionTitle from '../SectionTitle'
import ArrowDownIcon from '../ArrowDownIcon'

const LetsChangeTogetherSection = () => {

    const handleArrowClick = () => {
        const arrowIcon = document.getElementsByClassName('arrow-icon')[0]
        const bounds = arrowIcon.getBoundingClientRect();
        window.scroll({
            top: bounds.bottom + window.scrollY, 
            left: 0, 
            behavior: 'smooth' 
          });
    }

    return (
        <section className="lets-change-together-section">
            <SectionTitle className="section-title">Lets Change Together</SectionTitle>
            <div className='arrow-container'>
                <ArrowDownIcon height='3em' stroke='#fff' className='arrow-icon' onClick={handleArrowClick}/>
            </div>
        </section>
    )
        
}

export default LetsChangeTogetherSection