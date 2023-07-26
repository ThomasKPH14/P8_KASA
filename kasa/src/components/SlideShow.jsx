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
    <div class="cont-slide-arrow">
      <img src={slides[currentSlide]} alt={data.title} />
      <button class="buttonleftarrow" onClick={handlePrevClick}>
        <img src={leftarrow} alt="Left" className="left-arrow" /> 
      </button>
      <button class="buttonrightarrow" onClick={handleNextClick}>
        <img src={rightarrow} alt="Right" className="right-arrow" /> 
      </button>
      <p class="slidenumber">{`${currentSlide + 1} / ${slides.length}`}</p>
    </div>
  );
};

export default Slide;
