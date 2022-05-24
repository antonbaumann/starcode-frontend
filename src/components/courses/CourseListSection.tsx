import Course from '../Course'
import './CourseListSection.scss'
import girlImage from '../../assets/img/girl2.png'

import { useState } from 'react'

const CourseListSection = () => {   

    const [isCollapsed, setIsCollapsed] = useState(true)

    return (
        <div className="course-list-section">
            <Course 
                isCollapsed={isCollapsed}
                onToggleCollapse={() => setIsCollapsed(!isCollapsed)}
                title="Einsteigerkurs Chatbot"
                cities={["Berlin", "Hamburg"]}
                dateFrom={new Date("2020-01-01")}
                dateTo={new Date("2020-01-31")}
                description="Ein Chatbot ist eine künstliche Intelligenz, die sprachlich mit Menschen interagieren kann - so wie Siri, nur einfacher.
                In unserem Kurs lernst Du, wie man so einen Bot programmiert. Dafür wirst Du die Programmiersprache Python kennenlernen. Deiner Kreativität sind keine Grenzen gesetzt. 
                Du möchtest einen Spiele-Bot erstellen, der mit dir ein Ratespiel spielt? Oder doch lieber ein Reise-Bot, der dir bei deiner Urlaubsplanung hilft? 
                Der Kurs ist für Anfängerinnen* designt und wir fangen natürlich mit den Grundlagen an. Du musst also weder Vorkenntnisse noch einen eigenen Computer besitzen. 
                Unsere Kurse werden von xxxx geleitet. 
                Gemeinsam mit den anderen Teilnehmerinnen* wartet auf Dich eine aufgeschlossene Community, ein Wochenende voller neuer Erfahrungen und ganz viel Spaß!
                Wir freuen uns auf dich!"
            />
            <img src={girlImage} className="girl-image"/>
        </div>
    )
}

export default CourseListSection