import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import Contact from "./components/Contact";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000); // Fake loading 2s
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <Navbar />

          {/* Sections with IDs */}
          <div id="home">
            <Hero />
          </div>

          <div id="about">
            <About />
          </div>

          <div id="education">
            <Education />
          </div>

          <div id="experience">
            <Experience />
          </div>

          <div id="contact">
            <Contact />
          </div>

          <Footer />
        </div>
      )}
    </>
  );
}

export default App;