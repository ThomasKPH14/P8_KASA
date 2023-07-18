import React from 'react';
import Logo from '../assets/LogoBlack.png';

function Footer() {
  return (
    <footer>
      <img src={Logo} alt="Logo" />
      <p>© 2020 Kasa. All<br />rights reserved</p>
    </footer>
  )
}

export default Footer