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
              <Page title="starcode">
                <HomeView />
              </Page>
            }
          />
          <Route
            path="/mission"
            element={
              <Page title="starcode | Mission">
                <MissionView />
              </Page>
            }
          />
          <Route
            path="/courses"
            element={
              <Page title="starcode | Kurse">
                <CoursesView />
              </Page>
            }
          />
          <Route
            path="/about"
            element={
              <Page title="starcode | Über uns">
                <AboutView />
              </Page>
            }
          />
          <Route
            path="/volunteer"
            element={
              <Page title="starcode | Volunteer">
                <VolunteerView />
              </Page>
            }
          />
          <Route
            path="/donate"
            element={
              <Page title="starcode | Spenden">
                <DonateView />
              </Page>
            }
          />
          <Route
            path="/contact"
            element={
              <Page title="starcode | Kontakt">
                <ContactView />
              </Page>
            }
          />
          <Route
            path="/faq"
            element={
              <Page title="starcode | FAQ">
                <QuestionAnswerView />
              </Page>
            }
          />
          <Route
            path="/imprint"
            element={
              <Page title="starcode | Impressum">
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
