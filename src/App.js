import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SocialLinks from "./components/SocialLinks";
import Footer from "./components/Footer";
import "@fortawesome/fontawesome-free/css/all.min.css";
import About from "./components/About";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleTheme = () => setDarkMode((prevMode) => !prevMode);

  return (
    <Router>
      <div className={darkMode ? "dark-theme app-wrapper" : "app-wrapper"}>
        <Navbar toggleTheme={toggleTheme} isDarkMode={darkMode} />
        <SocialLinks />

        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About isDarkMode={darkMode} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
