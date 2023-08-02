// Importer React et le hook useState pour gérer l'état local
import React, { useState } from 'react';
// Importer les images des flèches
import leftarrow from '../assets/arrow_left.png';
import rightarrow from '../assets/arrow_forward.png';

// Définir un composant fonctionnel Slide qui reçoit les données des slides en props
// Pour le Carrousel j’utilise le composant « Slide », afin de changer les images (suivante ou précédente) je fais appel à un hook d’état « useState ». 
// Pour cela je déclare la variable d’état « currentSlide » qui aura pour état initial « 0 », et « setCurrentSlide » sera la fonction qui la modifie, sa mise à jour.  
// Pour indiquer le nombre total d’images dans le carrousel, j’utilise « length » sur l'array des images. J’utilise l’opérateur ternaire pour tester une condition et renvoyer un index d'image. 
// Pour passer à l’image suivante j’utilise « handleNextClick ». Si « currentSlide » (l'index de l’image affiché) n’est pas encore arrivé à la dernière image on augmente l'index de 1, mais si on est à la dernière on retourne à 0, soit la première image. 
// Pour revenir à la précédente j’utilise « handlePrevClick ». Si « currentSlide » n’est pas à 0 (la première image), on diminue l'index de 1. Si on est à la première image, on retourne à la dernière image. 
// Je récupère les images à afficher grâce à la propriété "pictures" des données passées en props.
// J'utilise l'opérateur ternaire pour décider d'afficher ou non les boutons de navigation : s'il n'y a qu'une seule image, il n'y aura pas de boutons.
// J'utilise un écouteur d'événement "onClick" sur les boutons "Suivant" et "Précédent" qui appelle respectivement les fonctions "handleNextClick" et "handlePrevClick".
// Pour afficher le numéro de l'image actuellement affichée, j'utilise "currentSlide + 1" (puisque les index commencent à 0) et "slides.length" pour afficher le nombre total d'images.


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
