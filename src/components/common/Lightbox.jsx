import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Zoom } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/zoom";

const Lightbox = ({ images, selectedImage, onClose }) => {
  const [showMessage, setShowMessage] = useState(true);
  const swiperRef = useRef(null);

  useEffect(() => {
    const hasShownMessage = localStorage.getItem("hasShownLightboxMessage");

    if (!hasShownMessage) {
      const timer = setTimeout(() => {
        setShowMessage(false);
        localStorage.setItem("hasShownLightboxMessage", "true");
      }, 2000);

      return () => clearTimeout(timer);
    } else {
      setShowMessage(false);
    }
  }, []);

  useEffect(() => {
    // When the lightbox is open, disable scrolling on the body
    if (selectedImage !== null) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    // Cleanup function to ensure scrolling is re-enabled when the component unmounts
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [selectedImage]); // This effect depends on the selectedImage

  const handleSwiperClick = (event) => {
    event.stopPropagation();
  };

  // Adjust the swiper's allowTouchMove property based on zoom state
  const handleZoomChange = (swiper, scale) => {
    if (scale === 1) {
      swiper.allowTouchMove = true;
    } else {
      swiper.allowTouchMove = false;
    }
  };

  return (
    <AnimatePresence>
      {selectedImage !== null && (
        <motion.div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          // Removed onClick={onClose} from here to disable closing by clicking outside
        >
          <Swiper
            ref={swiperRef}
            modules={[Pagination, Zoom]}
            spaceBetween={50}
            slidesPerView={1}
            zoom={true}
            onZoomChange={handleZoomChange} // Listen to zoom change
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
                <div className="swiper-zoom-container">
                  <img
                    src={image}
                    alt={`Gallery Image ${index + 1}`}
                    className="max-w-[90%] max-h-[80vh] object-contain"
                    style={{ marginTop: "2rem", marginBottom: "2rem" }}
                  />
                </div>
              </SwiperSlide>
            ))}
            <div className="custom-pagination absolute bottom-0 left-0 right-0 w-full z-50"></div>
          </Swiper>
          {/* Increase z-index of the close button */}
          <button
            className="absolute top-4 right-4 text-white text-4xl font-bold z-50"
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
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-75 text-black py-2 px-4 rounded-lg shadow-md z-50"
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
