import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Experience from "./pages/Experience";
import Skills from "./pages/Skills";
import FloatingHomeButton from "./components/FloatingHomeButton";
import Navbar from "./components/Navbar";
import BackgroundMusic from "./components/BackgroundMusic";

function App() {
  return (
    <Router>
      <Navbar />
      <BackgroundMusic />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <FloatingHomeButton />
    </Router>
  );
}

export default App;