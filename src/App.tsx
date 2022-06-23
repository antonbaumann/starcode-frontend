import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import Page from './components/Page'
import AboutView from './views/AboutView'
import CoursesView from './views/CoursesView'
import HomeView from './views/HomeView'
import MissionView from './views/MissionView'
import VolunteerView from './views/VolunteerView'
import DonateView from './views/DonateView'
import ImprintView from './views/ImprintView'
import QuestionAnswerView from './views/QuestionAnswerView'
import ContactView from './views/ContactView'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Page title="Starcode">
                <HomeView />
              </Page>
            }
          />
          <Route
            path="/mission"
            element={
              <Page title="Starcode | Mission">
                <MissionView />
              </Page>
            }
          />
          <Route
            path="/courses"
            element={
              <Page title="Starcode | Kurse">
                <CoursesView />
              </Page>
            }
          />
          <Route
            path="/about"
            element={
              <Page title="Starcode | Über uns">
                <AboutView />
              </Page>
            }
          />
          <Route
            path="/volunteer"
            element={
              <Page title="Starcode | Volunteer">
                <VolunteerView />
              </Page>
            }
          />
          <Route
            path="/donate"
            element={
              <Page title="Starcode | Spenden">
                <DonateView />
              </Page>
            }
          />
          <Route
            path="/contact"
            element={
              <Page title="Starcode | Kontakt">
                <ContactView />
              </Page>
            }
          />
          <Route
            path="/faq"
            element={
              <Page title="Starcode | FAQ">
                <QuestionAnswerView />
              </Page>
            }
          />
          <Route
            path="/imprint"
            element={
              <Page title="Starcode | Impressum">
                <ImprintView />
              </Page>
            }
          />
        </Routes>
      </Router>
    </div>
  )
}

export default App
