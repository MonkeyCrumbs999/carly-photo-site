// ImageGrid.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";

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

const ImageGrid = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row gap-4 items-start justify-center mb-4">
        <div className="max-w-full md:w-5/12">
          <ProgressiveImage src="/image-1.jpg" alt="Description" />
        </div>
        <div className="max-w-full md:w-2/3 md:mt-12">
          <ProgressiveImage src="/image-2.jpg" alt="Description" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-4 items-start justify-center mb-4">
        <div className="max-w-full md:w-2/3 md:mt-12">
          <ProgressiveImage src="/image-4.jpg" alt="Description" />
        </div>
        <div className="max-w-full md:w-5/12">
          <ProgressiveImage src="/image-3.jpg" alt="Description" />
        </div>
      </div>
    </>
  );
};

export default ImageGrid;
