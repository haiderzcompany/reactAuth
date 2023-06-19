import React, { useState } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';

const Carousel = ({
  children: slides,
  controls = false,
  indicator = false,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const prev = () =>
    setCurrentSlide(() => {
      return currentSlide == 0 ? slides.length - 1 : currentSlide - 1;
    });
  const next = () =>
    setCurrentSlide(() => {
      return currentSlide == slides.length - 1 ? 0 : currentSlide + 1;
    });
  return (
    <div className='overflow-hidden relative'>
      <div
        className='flex flex-row transition-transform ease-out duration-500 select-none'
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides}
      </div>
      {controls && (
        <div className='absolute inset-0 flex items-center justify-between p-4'>
          <button
            onClick={prev}
            className='bg-gray-300/50 hover:bg-gray-300/80 hover:text-gray-700 text-gray-500 rounded-full transition-all delay-100'
          >
            <FiChevronLeft size={40} />
          </button>
          <button
            onClick={next}
            className='bg-gray-300/50 hover:bg-gray-300/80 hover:text-gray-700 text-gray-500 rounded-full transition-all delay-100'
          >
            <FiChevronRight size={40} />
          </button>
        </div>
      )}
      {indicator && (
        <div className='absolute bottom-4 right-0 left-0'>
          <div className='flex items-center justify-center gap-2'>
            {slides.map((_, i) => {
              return (
                <div
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`cursor-pointer transition-all w-3 h-3 bg-white rounded-full ${
                    currentSlide == i ? 'px-4 py-1' : 'bg-opacity-50'
                  }`}
                ></div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Carousel;
