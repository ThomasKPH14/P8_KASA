import React, { useState } from 'react';
import leftarrow from '../assets/arrow_left_ios-24px 2.png';
import rightarrow from '../assets/arrow_forward_ios-24px 1.png';

const Slide = ({ data }) => {
  const slides = data.pictures;
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevClick = () => {
    setCurrentSlide((prevSlide) => prevSlide === 0 ? slides.length - 1 : prevSlide - 1);
  };

  const handleNextClick = () => {
    setCurrentSlide((nextSlide) => nextSlide === slides.length - 1 ? 0 : nextSlide + 1);
  };

  return (
    <div>
      <img src={slides[currentSlide]} alt={data.title} />
      <p>{data.title}</p>
      <button onClick={handlePrevClick}>
        <img src={leftarrow} alt="Left" />
      </button>
      <button onClick={handleNextClick}>
        <img src={rightarrow} alt="Right" />
      </button>
      <p>{`${currentSlide + 1} / ${slides.length}`}</p>
    </div>
  );
};

export default Slide;
