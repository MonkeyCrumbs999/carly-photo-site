import React from "react";

const Footer = () => {
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
