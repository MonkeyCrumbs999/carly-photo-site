// src/components/common/Lightbox.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Lightbox = ({ images, selectedImage, onClose }) => {
  const [showMessage, setShowMessage] = useState(true);

  useEffect(() => {
    // Check if the user has already clicked on the lightbox
    const hasClickedBefore = localStorage.getItem("lightboxClicked");

    if (hasClickedBefore) {
      setShowMessage(false); // Don't show the message if they've clicked before
    } else {
      const timer = setTimeout(() => {
        setShowMessage(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleSwiperClick = (event) => {
    event.stopPropagation();
    // Mark that the user has clicked on the lightbox
    localStorage.setItem("lightboxClicked", "true");
  };

  return (
    <AnimatePresence>
      {selectedImage !== null && (
        <motion.div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <Swiper
            modules={[Pagination]}
            spaceBetween={50}
            slidesPerView={1}
            pagination={{
              type: "progressbar",
              progressbarFillClass: "swiper-pagination-progressbar-fill",
              el: ".custom-pagination",
            }}
            initialSlide={selectedImage}
            className="w-full h-full flex items-center justify-center"
            onClick={handleSwiperClick}
          >
            {images.map((image, index) => (
              <SwiperSlide
                key={index}
                className="flex items-center justify-center"
              >
                <img
                  src={image}
                  alt={`Gallery Image ${index + 1}`}
                  className="max-w-[90%] max-h-[80vh] object-contain"
                  style={{ marginTop: "2rem", marginBottom: "2rem" }}
                />
              </SwiperSlide>
            ))}
            <div className="custom-pagination absolute bottom-0 left-0 right-0 w-full"></div>
          </Swiper>
          {/* Close button */}
          <button
            className="absolute top-4 right-4 text-white text-4xl font-bold"
            onClick={onClose}
          >
            &times;
          </button>
          <AnimatePresence>
            {showMessage && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="absolute right-60 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-75 text-black py-2 px-4 rounded-lg shadow-md z-50"
              >
                Swipe left or right to view images
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Lightbox;
