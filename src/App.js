import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Preloader from "./components/Preloaders";
import CardComponent from "./components/CardComponent";
import TwoCardComponent from "./components/TwoCardComponent";
import Social from "./components/SocialComponent";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulate loading time (6 seconds)

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <div className="bg-black text-white min-h-screen">
          <Header />
          <HeroSection />
          <CardComponent></CardComponent>
          <TwoCardComponent></TwoCardComponent>
          <Social></Social>
        </div>
      )}
    </>
  );
}

export default App;
