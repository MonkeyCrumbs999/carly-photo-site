// src/components/common/Lightbox.jsx
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const Lightbox = ({
  images,
  selectedImage,
  onClose,
  onPrev,
  onNext,
  onDotClick,
  swipeHandlers,
}) => {
  return (
    <AnimatePresence>
      {selectedImage !== null && (
        <motion.div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          {...swipeHandlers}
        >
          {/* Left arrow */}
          <button
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-4xl font-bold"
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
          >
            &#8592;
          </button>

          {/* Image */}
          <motion.img
            src={images[selectedImage]}
            alt={`Gallery Image ${selectedImage + 1}`}
            className="max-w-full max-h-[90vh] mx-auto"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            style={{ marginBottom: "2rem" }}
          />

          {/* Close button */}
          <button
            className="absolute top-4 right-4 text-white text-4xl font-bold"
            onClick={onClose}
          >
            &times;
          </button>

          {/* Right arrow */}
          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-4xl font-bold"
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
          >
            &#8594;
          </button>

          {/* Dots */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center">
            <div className="flex items-center space-x-2">
              {images.map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full ${
                    index === selectedImage ? "bg-white" : "bg-gray-500"
                  } cursor-pointer`}
                  onClick={(e) => {
                    e.stopPropagation();
                    onDotClick(index);
                  }}
                ></div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Lightbox;
