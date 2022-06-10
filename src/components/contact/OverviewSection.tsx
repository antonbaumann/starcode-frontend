import SectionTitle from '../SectionTitle'
import './OverviewSection.scss'
import { ReactComponent as MunichChurch } from '../../assets/svg/MunichChurch.svg'

const OverviewSection = () => {
    return (
        <section className='contact-overview-section'>
            <div className='content'>
                <div className='text'>
                    <SectionTitle className='section-title'>So erreichst du uns:</SectionTitle>
                    <div className='table'>
                    <div className='table-row'>
                            <div className='key'>Adresse</div>
                            <div className='value'>Heilmannstr. 15<br />81479 München<br />Deutschland</div>
                        </div>
                        <div className='table-row'>
                            <div className='key'>Telefon</div>
                            <div className='value'>+49 152 29676216</div>
                        </div>
                        <div className='table-row'>
                            <div className='key'>Email</div>
                            <div className='value'>info@starcode.de</div>
                        </div>
                    </div>
                </div>
                <div className='image'>
                    <MunichChurch className='munich-church' />
                </div>
            </div>
        </section>
    )
}

export default OverviewSection