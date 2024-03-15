import React from 'react';
import { Carousel } from '@material-tailwind/react';
import { motion } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function CarouselDefault() {
  const images = [
    "home-1.webp",
    "home-2.webp",
    "home-3.webp",
    "home-4.webp",
    "home-5.webp",
    "home-6.webp",
    "home-7.webp",
    "home-8.webp",
    "home-9.webp"
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Carousel
        className="rounded-xl max-w-sm mx-auto"
        autoplay={true}
        autoplayDelay={4000}
      >
        {images.map((image, index) => (
          <LazyLoadImage
            key={index}
            src={`/${image}`}
            alt={`image ${index + 1}`}
            effect="blur"
            placeholder={<div className="h-full w-full bg-gray-200 animate-pulse" />}
            className="h-full w-full object-cover"
          />
        ))}
      </Carousel>
    </motion.div>
  );
}

export default CarouselDefault;