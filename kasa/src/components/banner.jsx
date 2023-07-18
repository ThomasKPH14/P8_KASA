import React from 'react';

import BannerImage from '../assets/Bannermobile.png'

function Banner({ text }) {
  return (
    <div className="banner">
      <img className="banner__image" src={BannerImage} alt="Banner" />
      <p className="banner__text">{text}</p>
    </div>
  );
}

export default Banner;
