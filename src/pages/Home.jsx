import React, { useState } from "react";
import { motion } from "framer-motion";
import { LazyLoadComponent } from "react-lazy-load-image-component";

const ProgressiveImage = ({ src, alt }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isLoading ? 0.5 : 1 }}
      transition={{ duration: 0.3 }}
    >
      <motion.img
        src={src}
        alt={alt}
        onLoad={() => setIsLoading(false)}
        initial={{ filter: "blur(10px)" }}
        animate={{ filter: "blur(0px)" }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

const Home = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="flex flex-col items-center justify-center">
        {/* Images container */}
        <div className="flex flex-col md:flex-row gap-4 items-start justify-center mb-4">
          {/* Container for the first image */}
          <div className="max-w-full md:w-5/12">
            <ProgressiveImage src="/image-1.jpg" alt="Description" />
          </div>
          {/* Container for the second image with vertical offset on desktop */}
          <div className="max-w-full md:w-2/3 md:mt-12">
            <ProgressiveImage src="/image-2.jpg" alt="Description" />
          </div>
        </div>
        <LazyLoadComponent>
          <div className="flex flex-col md:flex-row gap-4 items-start justify-center mb-4">
            {/* Container for the third image with vertical offset on desktop */}
            <div className="max-w-full md:w-2/3 md:mt-12">
              <ProgressiveImage src="/image-4.jpg" alt="Description" />
            </div>
            {/* Container for the fourth image with vertical offset on desktop */}
            <div className="max-w-full md:w-5/12">
              <ProgressiveImage src="/image-3.jpg" alt="Description" />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center mt-12 md:mt-24 mb-12 md:mb-24">
            <motion.h1
              className="text-4xl sm:text-5xl uppercase font-bold text-gray-800 mb-6 sm:mb-8 text-center"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Carly Pearl-Sacks <br />{" "}
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
        </LazyLoadComponent>
      </div>
    </div>
  );
};

export default Home;
