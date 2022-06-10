export type FAQModel = {
    question: string
    answer: string
}

export const useFAQ = (): FAQModel[] => [
    {
        question: 'Brauche ich Programmier-Vorkenntnisse, um an einem Starcode Kurs teilzunehmen?',
        answer: 'Nein. Keinerlei Vorkenntnisse sind nötig, um bei uns einen Kurs zu belegen. Das einzige was Du mitbringen musst, ist Neugierde, Motivation und gute Laune!'
    },
    {
        question: 'Bekomme ich im Anschluss eine Teilnahmebestätigung?',
        answer: 'Ja, nach dem Absolvieren des Kurses erhältst Du von uns ein Starcode-Zertifikat, welches bestätigt, dass Du erfolgreich an dem Workshop teilgenommen hast.'
    },
    {
        question: 'Findet der Kurs online oder in präsenz statt?',
        answer: 'Unser Ziel ist es, die Kurse in Präsenz stattfinden zu lassen. Wir halten uns selbstverständlich an die Corona-Regelungen, damit der Workshop reibungslos und sicher ist.'
    },
    {
        question: 'Wie kann ich für Starcode spenden?',
        answer: 'Vielen Dank für Ihre Unterstützung! Auf unserer Spenden-Seite erhalten Sie weitere Informationen, wie Sie an uns spenden können.'
    },
    {
        question: 'Wie kann ich bei dem Projekt mitmachen?',
        answer: 'Vielen Dank für das Interesse! Es gibt zahlreiche Möglichkeiten, sich bei Starcode einzubringen. Auf der Volunteer-Page findest Du weitere Informationen.'
    }
]