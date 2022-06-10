import './UpcomingEventsSection.scss'
import Event from "../Event"
import { ReactComponent as Map } from '../../assets/svg/Map.svg'
import SectionTitle from '../SectionTitle'
import { useCourses } from '../../data/courses'

const UpcomingEventsSection = () => {
    const courses = useCourses()

    return (
        <section className="upcoming-events">
            <div className="location">
                <Map className='map-svg'/>
                <SectionTitle className="section-title">Wo findest du uns?</SectionTitle>
                <p>Momentan bieten wir Kurse in München, Berlin, Augsburg Zürich und Wien an. 
                Du hast Lust einen Ableger in deiner Stadt zu gründen? Dann schau doch mal hier!</p>
            </div>
            <div className="event-list">
                {courses.slice(0, 5).map(course => <Event 
                    key={course.id} 
                    date={course.startDate} 
                    location={course.city} 
                    title={course.name}
                />)}
            </div>
        </section>
    )
}

export default UpcomingEventsSection