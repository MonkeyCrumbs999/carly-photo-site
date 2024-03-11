import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Pricing from "./pages/Pricing";
import SkeletonLoader from "../src/components/common/SkeletonLoader";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate content loading delay
    setTimeout(() => {
      setIsLoading(false);
    }, 100); // Adjust this timeout to match your expected load time
  }, []);

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-beige">
        <Header />
        <main className="flex-grow">
          {isLoading ? (
            <SkeletonLoader />
          ) : (
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/pricing" element={<Pricing />} />
            </Routes>
          )}
        </main>
        {/* Display the Footer only after isLoading is false */}
        {!isLoading && <Footer />}
      </div>
    </Router>
  );
};

export default App;
