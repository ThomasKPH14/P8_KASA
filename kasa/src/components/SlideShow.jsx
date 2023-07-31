// Importer React et le hook useState pour gérer l'état local
import React, { useState } from 'react';
// Importer les images des flèches
import leftarrow from '../assets/arrow_left.png';
import rightarrow from '../assets/arrow_forward.png';

// Définir un composant fonctionnel Slide qui reçoit les données des slides en props
const Slide = ({ data }) => {

  const slides = data.pictures;
 
  const [currentSlide, setCurrentSlide] = useState(0);

 
  const handlePrevClick = () => {
    setCurrentSlide((prevSlide) => prevSlide === 0 ? slides.length - 1 : prevSlide - 1);
  };

 
  const handleNextClick = () => {
    setCurrentSlide((nextSlide) => nextSlide === slides.length - 1 ? 0 : nextSlide + 1);
  };

  // Retourner le JSX pour le composant Slide
  return (
    <div className="cont-slide-arrow">
     
      <img src={slides[currentSlide]} alt={data.title} />
     
      {slides.length > 1 && (
        <>
          {/* Bouton précédent */}
          <button className="buttonleftarrow" onClick={handlePrevClick}>
            <img src={leftarrow} alt="Left" className="left-arrow" /> 
          </button>
          {/* Bouton suivant */}
          <button className="buttonrightarrow" onClick={handleNextClick}>
            <img src={rightarrow} alt="Right" className="right-arrow" /> 
          </button>
          {/* Numérotation des slides */}
          <p className="slidenumber">{`${currentSlide + 1} / ${slides.length}`}</p>
        </>
      )}
    </div>
  );
};

// Exporter le composant Slide pour l'utiliser dans d'autres fichiers
export default Slide;
