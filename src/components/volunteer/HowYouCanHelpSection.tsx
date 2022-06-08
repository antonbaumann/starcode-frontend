import GradientCircle from '../GradientCircle'
import SectionTitle from '../SectionTitle'
import './HowYouCanHelpSection.scss'

import girlImage from '../../assets/img/girl3.png'

const HowYouCanHelpSection = () => {
    return (
        <section className='how-you-can-help-section'>
            <GradientCircle className='circle' />
            <div className='content'>
                <SectionTitle className='section-title'>Wie kannst du dich einbringen?</SectionTitle>
                <div className='description'>
                Du hast Interesse bekommen und möchtest dich bei *starcode engagieren? Unser Team freut sich immer über Zuwachs! 
                Egal aus welchem Fachgebiet, hier kann jede/jeder einbringen: von Organisation, über Kursvorbereitung und 
                -Durchführung, bis hin zur Arbeit vor Ort gibt es viele verschiedene und interessante Aufgaben, die Dich erwaten.
                </div>
            </div>
            <img src={girlImage} alt='girl' className='girl-image' />
        </section>
    )
}

export default HowYouCanHelpSection