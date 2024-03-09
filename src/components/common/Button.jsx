import React from "react";
import { motion } from "framer-motion";

const Button = ({ children, href, className }) => {
  return (
    <motion.a
      href={href}
      className={`inline-block bg-[#987671] text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg shadow-lg hover:bg-[#82635E] transition duration-300 transform hover:scale-110 active:scale-90 ${className}`}
    >
      {children}
    </motion.a>
  );
};

export default Button;
