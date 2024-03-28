import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Autoplay, Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

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
    "home-9.webp",
  ];

  const swiperRef = useRef(null);

  useEffect(() => {
    // Preload images
    images.forEach((image, index) => {
      const img = new Image();
      img.src = `/${image}`;
      // Preload the next 2 images
      if (index < images.length - 2) {
        const nextImg = new Image();
        nextImg.src = `/${images[index + 1]}`;
        const nextNextImg = new Image();
        nextNextImg.src = `/${images[index + 2]}`;
      }
    });
  }, []);

  return (
    <Swiper
      modules={[Autoplay, Pagination, EffectCoverflow]}
      spaceBetween={30}
      slidesPerView={1}
      pagination={{ clickable: true }}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      loop={true}
      effect="coverflow"
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      preloadImages={true}
      watchSlidesProgress={true}
      className="rounded-xl w-full sm:max-w-sm mx-auto"
      onSlideChange={() => {
        // Preload the next 2 images after changing slides
        const swiper = swiperRef.current;
        if (swiper) {
          const activeIndex = swiper.activeIndex;
          const nextIndex = (activeIndex + 1) % images.length;
          const nextNextIndex = (activeIndex + 2) % images.length;
          const nextImg = new Image();
          nextImg.src = `/${images[nextIndex]}`;
          const nextNextImg = new Image();
          nextNextImg.src = `/${images[nextNextIndex]}`;
        }
      }}
      ref={swiperRef}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <LazyLoadImage
            src={`/${image}`}
            alt={`image ${index + 1}`}
            effect="blur"
            placeholder={
              <div className="h-full w-full bg-gray-200 animate-pulse" />
            }
            className="h-full w-full object-cover"
            delayMethod="throttle"
            delayTime={100}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default CarouselDefault;
