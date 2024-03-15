import React, { useState } from 'react';
import { Carousel as MaterialTailwindCarousel } from '@material-tailwind/react';
import { motion } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';

function CarouselDefault() {
  const images = [
    "home-1.jpg",
    "home-2.jpg",
    "home-3.jpg",
    "home-4.jpg",
    "home-5.jpg",
    "home-6.jpg",
    "home-7.jpg",
    "home-8.jpg",
    "home-9.jpg"
  ];

  // State to keep track of the currently displayed image
  const [activeIndex, setActiveIndex] = useState(0);

  // Function to update the activeIndex, called on slide change
  const handleSlideChange = (newIndex) => {
    setActiveIndex(newIndex);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <MaterialTailwindCarousel 
        className="rounded-xl max-w-sm mx-auto" 
        autoplay={true} 
        autoplayDelay={4000}
        // Assuming the Carousel component accepts an onChange or similar prop
        onChange={handleSlideChange}
      >
        {/* Render only the active image and preload the next one */}
        {images.filter((_, index) => index === activeIndex || index === (activeIndex + 1) % images.length).map((image, index) => (
          <LazyLoadImage
            key={index}
            src={image}
            alt={`image ${index + 1}`}
            effect="blur"
            className="h-full w-full object-cover"
          />
        ))}
      </MaterialTailwindCarousel>
    </motion.div>
  );
}

export default CarouselDefault;