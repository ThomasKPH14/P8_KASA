import React from 'react';
import BannerImage from '../assets/Bannermobile.png';

function Banner({ text, className }) {
  return (
    <div className={`banner ${className}`}>
      {className !== 'banner-about' ? (
        <img className="banner__image" src={BannerImage} alt="Banner" />
      ) : (
        <img className="banner__image" src="/assets/AboutBanner.png" alt="" />
      )}
      <p className="banner__text">{text}</p>
    </div>
  );
}

export default Banner;
