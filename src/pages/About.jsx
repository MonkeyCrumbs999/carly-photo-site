import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="container mx-auto px-6 py-8 md:py-2">
      <div className="flex flex-col items-center justify-center">
        <motion.h1
          className="text-4xl font-bold text-gray-800 mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          A Little About Me!
        </motion.h1>
        <motion.p
          className="text-lg text-gray-600 mb-8 w-full md:w-1/2" 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
Hey there!</motion.p><motion.p  className="text-lg text-gray-600 mb-8 w-full md:w-1/2" 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }} >

I'm Carly, a photographer with a decade of experience. I officially started my business 7 years back, but my love for photography began in the equestrian world, where I photographed events and did sales photos for horses. </motion.p>

<motion.p  
className="text-lg text-gray-600 mb-8 w-full md:w-1/2" 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >Since then, I've fallen head over heels for portrait photography. Dogs steal my heart, but I have a soft spot for all animals, and people are pretty awesome too.</motion.p>

 <motion.p  className="text-lg text-gray-600 mb-8 w-full md:w-1/2" 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >Thanks for stopping by my site! </motion.p>
        
        <motion.p  className="text-lg text-gray-600 mb-8 w-full md:w-1/2" 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}>Can't wait to chat with you.        </motion.p>
      </div>
    </div>
  );
};

export default About;
