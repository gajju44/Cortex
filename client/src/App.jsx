import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EventPage from './Pages/EventPage'
import EventDetails from './Components/EventPage/EventDetails';
import HeroSection from './Components/Home/HeroSection'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/events" element={<EventPage />} />
        <Route path="/events-details" element={<EventDetails />} />
        {/* other routes */}
      </Routes>
    </Router>
  );
}

export default App;
