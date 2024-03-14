import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const Button = ({ children, to, className }) => {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <NavLink
        to={to}
        className={({ isActive }) =>
          `inline-block bg-[#987671] text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg shadow-lg 
           ${
             isActive
               ? "bg-[#82635E]" // Active state styles
               : "hover:bg-[#82635E] transition duration-300 transform hover:scale-110 active:scale-90" // Inactive state styles
           } ${className}`
        }
      >
        {children}
      </NavLink>
    </motion.div>
  );
};

export default Button;
