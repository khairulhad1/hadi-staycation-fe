import React, { useState } from "react";

export default function FeatureImg({ data }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? data.imageId.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === data.imageId.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="container mt-10 mx-auto px-6">
      <div className=""></div>
      <div className="relative mb-6 w-full" data-carousel="slide">
        <div className="relative  h-56 overflow-hidden rounded-lg md:h-[600px] lg-h[800px]">
          {data.imageId.map((item, index) => (
            <div
              key={`image-${index}`}
              className={`${
                activeIndex === index ? "block" : "hidden"
              } duration-700 ease-in-out`}
              data-carousel-item
            >
              <img
                src={`${import.meta.env.VITE_BASE_API_URL}/${item.imageUrl}`}
                alt={`image-${index}`}
                className="absolute block object-contain h-full  -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              />
            </div>
          ))}
        </div>
      </div>
      {/* Slider controls */}
      <div className="flex justify-center items-center pt-4">
        <button
          type="button"
          className="flex justify-center items-center me-4 h-full cursor-pointer group focus:outline-none"
          onClick={prevSlide}
        >
          <span className="text-gray-400 hover:text-gray-900">
            <svg
              className="rtl:rotate-180 w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 5H1m0 0 4 4M1 5l4-4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="flex justify-center items-center h-full cursor-pointer group focus:outline-none"
          onClick={nextSlide}
        >
          <span className="text-gray-400 hover:text-gray-900">
            <svg
              className="rtl:rotate-180 w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
    </section>
  );
}
