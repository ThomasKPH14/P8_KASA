// Importation React
import React from 'react';
// Importation de l'image du logo
import Logo from '../assets/LogoBlack.png';
// Déclaration de la fonction Footer qui définit le composant Footer
function Footer() {
  return (
    <footer>
      <img src={Logo} alt="Logo" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}
// Exportation du composant Footer pour qu'il puisse être importé et utilisé dans d'autres fichiers
export default Footer