import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Zoom, Navigation, Pagination, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/zoom";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

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

  const handleFullscreenClick = () => {
    const lightboxElement = document.querySelector(".lightbox");
    if (lightboxElement.requestFullscreen) {
      lightboxElement.requestFullscreen();
    } else if (lightboxElement.webkitRequestFullscreen) {
      lightboxElement.webkitRequestFullscreen();
    } else if (lightboxElement.msRequestFullscreen) {
      lightboxElement.msRequestFullscreen();
    }
  };

  return (
    <AnimatePresence>
      {selectedImage !== null && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 lightbox"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            "--swiper-navigation-size": "24px",
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
            "--swiper-pagination-bullet-size": "8px",
            "--swiper-pagination-bullet-inactive-color": "#fff",
            "--swiper-pagination-bullet-inactive-opacity": "0.5",
          }}
        >
          <Swiper
            ref={swiperRef}
            modules={[Zoom, Navigation, Pagination, Keyboard]}
            spaceBetween={50}
            slidesPerView={1}
            zoom={{ maxRatio: 3, toggle: true }}
            navigation
            pagination={{ clickable: true }}
            keyboard={{ enabled: true }}
            onZoomChange={handleZoomChange}
            initialSlide={selectedImage}
            className="w-full h-full flex items-center justify-center"
            onClick={handleSwiperClick}
          >
            {images.map((image, index) => (
              <SwiperSlide
                key={index}
                className="flex items-center justify-center w-full h-full"
              >
                <div className="swiper-zoom-container flex items-center justify-center w-full h-full">
                  <LazyLoadImage
                    src={image}
                    alt={`Gallery Image ${index + 1}`}
                    effect="blur"
                    placeholderSrc="/placeholder.jpg"
                    className="max-w-[90%] max-h-[80vh] object-contain mx-auto"
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
          <button
            className="absolute top-4 left-4 text-white text-lg font-bold z-50"
            onClick={handleFullscreenClick}
          >
            Fullscreen
          </button>
          <AnimatePresence>
            {showMessage && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-75 text-black py-2 px-4 rounded-lg shadow-md z-50"
              >
                Double-tap to zoom, swipe or use arrow keys to navigate
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Lightbox;
