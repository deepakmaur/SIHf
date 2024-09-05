import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Preloader from "./components/Preloaders";
import TwoCardComponent from "./components/TwoCardComponent";
import Social from "./components/SocialComponent";
import ChatComponent from "./components/ChatComponent";
import LoginPage from "./components/LoginPage"; // Import your LoginPage component
import ParticleRing from "./components/ParticleRing"; // Import ParticleRing component
import LinksSection from "./components/Link";
import { Link } from "lucide-react";

function App({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulate loading time (2 seconds)

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {loading ? (
        <Preloader />
      ) : (
        <div className="relative min-h-screen text-white bg-custom-gradient">
          {/* Background particle animation */}
          <div className="fixed top-0 left-0 w-full h-full -z-10">
            <ParticleRing />
          </div>

          {/* Foreground content */}
          <Header />
          <Routes>
            <Route path="/" element={<HeroSection />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/Chat" element={<ChatComponent />} />
          </Routes>
          <LinksSection/>
        </div>
      )}
    </Router>
  );
}

export default App;
