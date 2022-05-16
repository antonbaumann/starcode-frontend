import './Event.scss'

type EventProps = {
    date: Date
    location: string
    title: string
}

const Event = ({date, location, title}: EventProps) => {
    return (
        <div className="event">
            <div className="event-date">
                {String(date.getDay()).padStart(2, '0')}/{String(date.getMonth()).padStart(2, '0')}
            </div>
            <div className="event-text">
                <div className="event-location">{location}</div>
                <h3 className="event-title">{title}</h3>
            </div>
        </div>
    )
}

export default Event