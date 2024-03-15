import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Button from "../components/common/Button";
import Carousel from "../components/common/Carousel";

const characterAnimation = {
  hidden: {
    opacity: 0,
    y: `0.25em`,
  },
  visible: {
    opacity: 1,
    y: `0em`,
    transition: {
      duration: 1,
      ease: [0.2, 0.65, 0.3, 0.9],
    },
  },
};

const splitText = (text, ctrls) => {
  return text.split(" ").map((word, wordIndex) => (
    <motion.span
      aria-hidden="true"
      key={wordIndex}
      initial="hidden"
      animate="visible" // Directly animate to visible without checking inView
      variants={characterAnimation}
      transition={{
        delayChildren: wordIndex * 0.25,
        staggerChildren: 0.05,
      }}
      style={{ display: "inline-block", marginRight: "0.25em", whiteSpace: "nowrap" }}
    >
      {word.split("").map((char, charIndex) => (
        <motion.span
          aria-hidden="true"
          key={charIndex}
          variants={characterAnimation}
          style={{ display: "inline-block", marginRight: "-0.05em" }}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  ));
};

const Home = () => {
  const [isContentLoaded, setIsContentLoaded] = useState(false);
  const ctrls = useAnimation();

  useEffect(() => {
    ctrls.start("visible");
  }, [ctrls]);

  useEffect(() => {
    setTimeout(() => {
      setIsContentLoaded(true);
    }, 300);
  }, []);

  if (!isContentLoaded) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="flex flex-col items-center justify-center">
          <Carousel />
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="flex flex-col items-center justify-center">
        <Carousel />
        <div className="flex flex-col items-center justify-center mt-12 md:mt-12 mb-12 md:mb-24">
          <h1 className="text-4xl sm:text-5xl uppercase font-bold text-gray-800 mb-6 sm:mb-8 text-center">
            {splitText("Carly Pearl-Sacks", ctrls)}
            <br />
            <span>{splitText("Photography", ctrls)}</span>
          </h1>
          <motion.p
            className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Interested? Check out my portfolio and contact me to learn more.
          </motion.p>
          <Button to="/portfolio">Explore Portfolio</Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
