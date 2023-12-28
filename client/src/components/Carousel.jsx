import { Icon } from '@iconify/react';
import React, { useState, useEffect } from 'react';

const Carousel = ({ images, autoplayInterval = 3000 }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length);
  };

  useEffect(() => {
    // Autoplay functionality
    const autoplay = setInterval(() => {
      goToNextSlide();
    }, autoplayInterval);

    // Clear the interval when the component unmounts
    return () => clearInterval(autoplay);
  }, [currentSlide, autoplayInterval, images.length]);

  return (
    <div className="relative overflow-hidden">
      <div
        className="flex transition-transform duration-300 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <img src={image} alt={`Slide ${index + 1}`} className="w-full h-64 object-cover" />
          </div>
        ))}
      </div>

      <button
        onClick={goToPrevSlide}
        className="absolute left-0 text-purple-500 top-1/2 transform -translate-y-1/2 px-4 py-2 rounded"
      >
        <Icon icon="icon-park-solid:left-c" width="40" />
      </button>
      <button 
        onClick={goToNextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 text-purple-500 px-4 py-2 rounded"
      >
        <Icon icon="icon-park-solid:right-c" width="40" />
      </button>
    </div>
  );
};

export default Carousel;
