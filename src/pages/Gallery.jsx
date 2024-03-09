// src/components/pages/Gallery.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useSwipeable } from "react-swipeable";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Lightbox from "../components/common/Lightbox";

const Gallery = () => {
  const images = [
    "image-1.jpg",
    "image-3.jpg",
    "image-5.jpg",
    "image-4.jpg",
    "image-2.jpg",
    "image-9.jpg",
    "image-6.jpg",
    "image-7.jpg",
    "image-8.jpg",
    "image-10.jpg",
    // Add more image file names
  ];

  const [selectedImage, setSelectedImage] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    // Prevent scrolling when lightbox is open
    if (selectedImage !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [selectedImage]);

  const openLightbox = (index) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const goToNextImage = () => {
    setSelectedImage((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPreviousImage = () => {
    setSelectedImage((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToImage = (index) => {
    setSelectedImage(index);
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: goToNextImage,
    onSwipedRight: goToPreviousImage,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <div className="container mx-auto px-6 py-8 md:py-2">
      <motion.div
        className="flex flex-col items-center justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Gallery</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => openLightbox(index)}
            >
              <LazyLoadImage
                src={`/${image}`}
                alt={`Gallery Image ${index + 1}`}
                effect="blur"
                placeholderSrc="/placeholder.jpg"
                className="w-full h-auto rounded-lg shadow-lg cursor-pointer"
              />
            </motion.div>
          ))}
        </div>
        <Lightbox
          images={images}
          selectedImage={selectedImage}
          onClose={closeLightbox}
          onPrev={goToPreviousImage}
          onNext={goToNextImage}
          onDotClick={goToImage}
          swipeHandlers={swipeHandlers}
        />
      </motion.div>
    </div>
  );
};

export default Gallery;
