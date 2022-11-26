import teachingSvg from '../assets/svg/Teaching.svg'
import organizationSvg from '../assets/svg/Organization.svg'
import outreachSvg from '../assets/svg/Outreach.svg'
import localGroupsSvg from '../assets/svg/LocalGroups.svg'
import techSvg from '../assets/svg/Tech.svg'

export type VolunteerGroup = {
  title: string
  description: string
  iconUrl: string
  contactEmail: string
}

export const volunteerGroups: VolunteerGroup[] = [
  {
    title: 'Lehre',
    description:
      'Lehrende arbeiten direkt mit den Schülerinnen* im Rahmen unserer Kurse. Ihr vermittelt zunächst die Grundlagen der entsprechenden Sprachen und betreut dann die eigenständigen Aufgaben und Projekte und seid Ansprechspersonen bei Fragen. Außerdem gestaltet ihr das Freizeitprogramm mit. Ein wenig Programmiererfahrung in den relevanten Sprachen ist erforderlich, jedoch sind Grundkenntnisse meistens mehr als genug! Ansprechperson ist Pauli, ihr erreicht sie unter',
    iconUrl: teachingSvg,
    contactEmail: 'lokal@starcode.de',
  },
  {
    title: 'Organisation',
    description:
      'Auch bei starcode fallen die typischen Aufgaben innerhalb einer Organisation an: Human Resources, Recht, Finanzen und vieles mehr. Ohne die Menschen in unserem Organisationsteam würde bei uns gar nichts laufen. Wir suchen Menschen die Interesse an Orga- und Management Themen haben. Vorerfahrung in den Bereichen Wirtschaft, Psychologie, Management und Jura sind hilfreich, jedoch freuen wir über alle interessierten Menschen und bringen euch gerne alles bei, was ihr benötigt. Ansprechperson ist Friedrich unter',
    iconUrl: organizationSvg,
    contactEmail: 'friedrich@starcode.de',
  },
  {
    title: 'Outreach',
    description:
      'Im Outreach Team kümmern wir um alle Arten, wie wir nach außen sichtbar sind. Hier geht es beispielsweise darum, eine gute Marketingstrategie zu entwickeln und umzusetzen, unsere Präsenz in den sozialen Medien zu managen und alles von Plakaten bis hin zur Website zu designen. Außerdem bemüht sich das Team um Sponsoringkooperationen und ist Ansprechsteam für Presseberichte. Wir suchen nach Menschen für Interesse für Marketing, Design und Kommunikation. Ansprechperson ist Katja unter',
    iconUrl: outreachSvg,
    contactEmail: 'pr@starcode.de',
  },
  {
    title: 'Lokale Gruppen',
    description:
      'Die Lokalgruppen sind das Herz von Starcode. Hier werden die Kurse tatsächlich durchgeführt. Aufgaben enthalten der Kontakt mit Schulen, Kontakt zu Universitäten, Organisieren der Kurslogistik, Anwerben der Schülerinnen, Akquise von Lehrenden, Raumbuchung und vieles mehr. Alle Skills sind hier gebraucht, insbesondere Organisationstalente und Eigeninitiative ist sehr gern gesehen! Momentan arbeiten wir in Aachen, Augsburg, Berlin, München und Zürich, wir eröffnen aber gerne weitere Standorte mit euch. Ansprechperson ist Pauli unter',
    iconUrl: localGroupsSvg,
    contactEmail: 'lokal@starcode.de',
  },
  {
    title: 'Tech',
    description:
      'In der Techgruppe arbeiten wir an dem, worum es bei Starcode eigentlich geht: Informatik. Primär kümmern wir uns hier um die Lehrinhalte. Wir überlegen, welche Kurse wir gerne für die Schülerinnen anbieten würden und entwickeln diese. Hierfür erarbeiten wir Lernkonzepte und Materialien, sowie Aufgabenstellungen und Hilfestellungen für Abschlussprojekte. Außerdem entwickeln wir bereits bestehende Kurse ständig weiter, um unser Lehrangebot stetig zu verbessern. Weiterhin haben wir eine Untergruppe, die sich um das Web-Development unserer eigenen Seite kümmert. Ansprechperson ist Julia unter',
    iconUrl: techSvg,
    contactEmail: 'tech@starcode.de',
  },
]
