import Event from "../Event"

const UpcomingEventsSection = () => {
    return (
        <section className="upcoming-events">
            <div className="map"></div>
            <div className="event-list">
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