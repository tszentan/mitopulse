import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Bixeps from "./pages/Bixeps";
import BixepsPro from "./pages/BixepsPro";
import Qmt from "./pages/Qmt";
import Locations from "./pages/Locations";
import About from "./pages/About";
import Support from "./pages/Support";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-1 pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/solutions/bixeps" element={<Bixeps />} />
          <Route path="/solutions/bixeps-pro" element={<BixepsPro />} />
          <Route path="/solutions/qmt" element={<Qmt />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/about" element={<About />} />
          <Route path="/support" element={<Support />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
