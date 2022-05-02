import './App.scss';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import AboutView from './views/AboutView';
import CoursesView from './views/CoursesView';
import HomeView from './views/HomeView'
import MissionView from './views/MissionView';
import VolunteerView from './views/VolunteerView';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/mission" element={<MissionView />} />
          <Route path="/courses" element={<CoursesView />} />
          <Route path="/about" element={<AboutView />} />
          <Route path="/volunteer" element={<VolunteerView />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
