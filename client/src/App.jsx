import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import BrainTeaser from "./components/BrainTeaser";
import Footer from "./components/Footer";

function App() {

  const [isAppLoading, setIsAppLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);

      setTimeout(() => {
        setIsAppLoading(false);
      }, 800);

    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // 🎬 Netflix-style logo loader
  const PageLoader = () => {
    return (
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center bg-black transition-opacity duration-700 ${
          fadeOut ? "opacity-0" : "opacity-100"
        }`}
      >

        <div className="text-center">

          {/* Glow background */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-72 h-72 bg-purple-600/20 blur-3xl rounded-full animate-pulse"></div>
          </div>

          {/* Animated Logo Text */}
          <h1 className="relative text-4xl md:text-6xl font-extrabold text-white tracking-widest animate-pulse">
            Aaiswarya PM
          </h1>

          {/* Subtitle */}
          <p className="mt-4 text-gray-400 text-sm tracking-widest">
            Portfolio Loading...
          </p>

        </div>

      </div>
    );
  };

  return (
    <>
      {isAppLoading && <PageLoader />}

      {!isAppLoading && (
        <>
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Achievements />
          <Contact />
          <BrainTeaser />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;