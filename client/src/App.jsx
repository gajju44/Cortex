import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EventPage from './Pages/EventPage'
import HeroSection from './Components/Home/HeroSection'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/events" element={<EventPage />} />
        {/* other routes */}
      </Routes>
    </Router>
  );
}

export default App;
