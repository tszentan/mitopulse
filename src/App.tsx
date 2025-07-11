import './styles/App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Bixeps from './pages/Bixeps';
import Qmt from './pages/Qmt';
import Pricing from './pages/Pricing';
import About from './pages/About';
import Support from './pages/Support';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bixeps" element={<Bixeps />} />
        <Route path="/qmt" element={<Qmt />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/about" element={<About />} />
        <Route path="/support" element={<Support />} />
      </Routes>
    </Router>
  );
}

export default App;