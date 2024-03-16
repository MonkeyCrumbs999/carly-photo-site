import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Autoplay, Pagination, Navigation, EffectCoverflow } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow'; // Import CSS for coverflow effect

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
    <Swiper
      modules={[Autoplay, Pagination, Navigation, EffectCoverflow]} // Include EffectCoverflow module
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      loop={true}
      effect="coverflow" // Set effect to coverflow
      coverflowEffect={{
        rotate: 50, // Slide rotate in degrees
        stretch: 0, // Stretch space between slides (in px)
        depth: 100, // Depth offset in px (slides translate in Z axis)
        modifier: 1, // Effect multiplier
        slideShadows: true, // Enables slides shadows
      }}
      className="rounded-xl max-w-sm mx-auto"
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <LazyLoadImage
            src={`/${image}`}
            alt={`image ${index + 1}`}
            effect="blur"
            placeholder={<div className="h-full w-full bg-gray-200 animate-pulse" />}
            className="h-full w-full object-cover"
            delayMethod="throttle"
            delayTime={300}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default CarouselDefault;