import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import Button from "../components/common/Button";
import ImageGrid from "../components/common/ImageGrid";
import SkeletonLoader from "../components/common/SkeletonLoader"; // Assuming you have a similar loader component

const Home = () => {
  const [isContentLoaded, setIsContentLoaded] = useState(false);

  useEffect(() => {
    // Simulate content loading delay for the section after ImageGrid
    setTimeout(() => {
      setIsContentLoaded(true);
    }, 100); // Adjust this timeout to match your expected load time for the content after ImageGrid
  }, []);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="flex flex-col items-center justify-center">
        <LazyLoadComponent>
          <ImageGrid />
          {isContentLoaded ? (
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
              <Button href="/portfolio" className="">
                Explore Gallery
              </Button>
            </div>
          ) : (
            <SkeletonLoader /> // Placeholder while content is loading
          )}
        </LazyLoadComponent>
      </div>
    </div>
  );
};

export default Home;
