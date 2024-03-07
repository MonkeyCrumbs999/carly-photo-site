import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center justify-center">
        {/* Images container */}
        <div className="flex flex-col md:flex-row gap-4 items-start justify-center mb-4">
          {/* Container for the first image */}
          <div className="max-w-full md:w-5/12">
            <motion.img
              src="/src/assets/image-1.jpg"
              className="w-full h-auto"
              alt="Description"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            />
          </div>
          {/* Container for the second image with vertical offset on desktop */}
          <div className="max-w-full md:w-2/3 md:mt-12">
            <motion.img
              src="/src/assets/image-2.jpg"
              className="w-full h-auto"
              alt="Description"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }} // Adjust delay as needed
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4 items-start justify-center mb-4">
          {/* Container for the third image with vertical offset on desktop */}
          <div className="max-w-full md:w-2/3 md:mt-12">
            <motion.img
              src="/src/assets/image-4.jpg"
              className="w-full h-auto"
              alt="Description"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }} // Adjust delay as needed
            />
          </div>
          {/* Container for the fourth image with vertical offset on desktop */}
          <div className="max-w-full md:w-5/12">
            <motion.img
              src="/src/assets/image-3.jpg"
              className="w-full h-auto"
              alt="Description"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }} // Adjust delay as needed
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center mt-12 md:mt-24 mb-12 md:mb-24">
          <motion.h1
            className="text-4xl sm:text-5xl uppercase font-bold text-gray-800 mb-6 sm:mb-8 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Carly Pearl-Sacks <br />
            <span className="ml-24 sm:ml-64">Photography</span>
          </motion.h1>
          <motion.p
            className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Interested? Check out my portfolio and contact me to learn more.
          </motion.p>
          <a
            href="/gallery"
            className="inline-block bg-[#987671] text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg shadow-lg hover:bg-[#82635E] transition duration-300 transform hover:scale-110 active:scale-90"
          >
            Explore Gallery
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
