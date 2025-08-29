import React, { useState } from "react";

const Carousel = ({ slides }) => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-[20%] mx-auto bg-green-500">
      {/* Slides */}
      <div className="relative flex overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`flex-shrink-0 transition-transform duration-500 ease-in-out ${
              current === index ? "w-full md:w-1/2 block" : "hidden md:block md:w-1/2"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title || `Slide ${index + 1}`}
              className="w-[400px] h-64 object-cover rounded-xl"
            />
          </div>
        ))}
      </div>

      {/* Controls */}
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={prevSlide}
          className="px-3 py-2 bg-gray-800 text-white rounded-lg"
        >
          ←
        </button>
        <div className="flex space-x-2">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`h-1 w-6 rounded ${
                current === i ? "bg-blue-500" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
        <button
          onClick={nextSlide}
          className="px-3 py-2 bg-gray-800 text-white rounded-lg"
        >
          →
        </button>
      </div>
    </div>
  );
};

export default Carousel;
