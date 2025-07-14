import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Bixeps from "./pages/Bixeps";
import Qmt from "./pages/Qmt";
import Pricing from "./pages/Pricing";
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
          <Route path="/solutions/qmt" element={<Qmt />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/support" element={<Support />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
