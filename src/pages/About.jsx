import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="container mx-auto px-6 py-8">
      <div className="flex flex-col items-center justify-center">
        <motion.h1
          className="text-4xl font-bold text-gray-800 mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Carly Pearl-Sacks
        </motion.h1>
        <motion.p
          className="text-lg text-gray-600 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Blah blah blah blah blah blah blah blah blah blah blah blah blah blahS
        </motion.p>
      </div>
    </div>
  );
};

export default About;
