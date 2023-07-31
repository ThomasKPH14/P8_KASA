// Importation de React
import React from 'react';
import BannerImage from '../assets/DesktopBanner.png';
import BannerImageAbout from '../assets/DesktopBannerAbout.png';



// Définition du composant Banner.
function Banner({ text, className }) {
  return (
    <div className={`banner ${className}`}>
      {className !== 'banner-about' ? (
        <img className="banner__image" src={BannerImage} alt="" />
      ) : (
        <img className="banner__image" src={BannerImageAbout} alt="" />
      )}
      <p className="banner__text">{text}</p>
    </div>
  );
}
// Le composant Banner est exporté pour pouvoir être utilisé dans d'autres fichiers.
export default Banner;
