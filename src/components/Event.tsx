import './Event.scss'
import { toDayMonth } from '../util/date'

type EventProps = {
  date: Date
  location: string
  title: string
}

const Event = ({ date, location, title }: EventProps) => {
  return (
    <div className="event">
      <div className="event-date">{toDayMonth(date)}</div>
      <div className="event-text">
        <div className="event-location">{location}</div>
        <h3 className="event-title">{title}</h3>
      </div>
    </div>
  )
}

export default Event
