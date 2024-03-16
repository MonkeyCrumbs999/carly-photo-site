import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Zoom, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/zoom";
import "swiper/css/scrollbar";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

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
    if (selectedImage !== null) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [selectedImage]);

  const handleSwiperClick = (event) => {
    event.stopPropagation();
  };

  const handleZoomChange = (swiper, scale) => {
    swiper.allowTouchMove = scale === 1;
  };

  return (
    <AnimatePresence>
      {selectedImage !== null && (
        <motion.div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            "--swiper-scrollbar-drag-bg-color": "#fff",
            "--swiper-scrollbar-bottom": "15px",
          }}
        >
          <Swiper
            ref={swiperRef}
            modules={[Zoom, Scrollbar]}
            spaceBetween={50}
            slidesPerView={1}
            zoom={{ enabled: true, maxRatio: 3, minRatio:1, toggle: true }}
            onZoomChange={handleZoomChange}
            scrollbar={{ draggable: true }}
            initialSlide={selectedImage}
            className="w-full h-full flex items-center justify-center"
            onClick={handleSwiperClick}
          >
            {images.map((image, index) => (
              <SwiperSlide
                key={index}
                className="flex items-center justify-center"
              >
                <div className="swiper-zoom-container sm:flex sm:items-center sm:justify-center sm:h-full">
                  <LazyLoadImage
                    src={image}
                    alt={`Gallery Image ${index + 1}`}
                    effect="blur"
                    placeholderSrc="/placeholder.jpg"
                    className="max-w-[90%] max-h-[80vh] sm:max-w-full sm:max-h-1/2 object-contain"
                    style={{ marginTop: "2rem", marginBottom: "2rem" }}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
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
