import React, { useState, useEffect } from "react";

const Footer = () => {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    // Assuming images take around 3 seconds to load; adjust this value based on your needs
    const timer = setTimeout(() => setShowFooter(true), 100);

    return () => clearTimeout(timer);
  }, []);

  if (!showFooter) {
    return null;
  }

  return (
    <footer className="bg-[#858786] text-white py-6">
      <div className="container mx-auto px-6">
        <p className="text-center">
          &copy; {new Date().getFullYear()} Carly Pearl-Sacks Photography. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
