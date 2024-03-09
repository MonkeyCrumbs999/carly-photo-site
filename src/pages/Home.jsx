// Home.jsx
import React, { Suspense } from "react";
import { motion } from "framer-motion";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import Button from "../components/common/Button";
import ImageGrid from "../components/common/ImageGrid";

const Home = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="flex flex-col items-center justify-center">
        <LazyLoadComponent>
          <ImageGrid />
          <Suspense fallback={<div>Loading...</div>}>
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
              <Button href="/gallery" className="">
                Explore Gallery
              </Button>
            </div>
          </Suspense>
        </LazyLoadComponent>
      </div>
    </div>
  );
};

export default Home;
