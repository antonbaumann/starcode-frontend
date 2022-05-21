import './UpcomingEventsSection.scss'
import Event from "../Event"
import { ReactComponent as Map } from '../../assets/svg/Map.svg'
import SectionTitle from '../SectionTitle'

const UpcomingEventsSection = () => {
    return (
        <section className="upcoming-events">
            <div className="location">
                <Map className='map-svg'/>
                <SectionTitle className="section-title">Wo findest du uns?</SectionTitle>
                <p>Momentan bieten wir Kurse in München, Berlin, Augsburg Zürich und Wien an. 
                Du hast Lust einen Ableger in deiner Stadt zu gründen? Dann schau doch mal hier!</p>
            </div>
            <div className="event-list">
                <Event 
                    date={new Date(2020, 5, 1)}
                    location="Berlin"
                    title="Einsteigerkurs Chatbot"
                />
                <Event 
                    date={new Date(2020, 5, 1)}
                    location="Berlin"
                    title="Einsteigerkurs Chatbot"
                />
                <Event 
                    date={new Date(2020, 5, 1)}
                    location="Berlin"
                    title="Einsteigerkurs Chatbot"
                />
                <Event 
                    date={new Date(2020, 5, 1)}
                    location="Berlin"
                    title="Einsteigerkurs Chatbot"
                />
                <Event 
                    date={new Date(2020, 5, 1)}
                    location="Berlin"
                    title="Einsteigerkurs Chatbot"
                />
            </div>
        </section>
    )
}

export default UpcomingEventsSection