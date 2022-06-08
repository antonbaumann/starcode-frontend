import './LocationsSection.scss'
import SectionTitle from '../SectionTitle'
import { ReactComponent as MapSvg } from '../../assets/svg/Map.svg'

const LocationsSection = () => {
    return (
        <section className='locations-section'>
            <MapSvg className='map-svg' />
            <div className='content'>
                <SectionTitle className='section-title'>Wo findest du uns?</SectionTitle>
                <div className='description'>
                Momentan bieten wir Kurse in München, Berlin, Augsburg Zürich und Wien an. Du hast Lust einen Ableger in deiner Stadt zu gründen? Dann schau doch mal hier!
                </div>
            </div>
        </section>
    )
}

export default LocationsSection