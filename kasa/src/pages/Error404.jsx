// Importation React
import React from 'react';
// Déclaration de la fonction Error404 qui retourne un composant React.
function Error404() {
  return (
  <div className='main-page'>
    <div className='error-container'>
      <h1 className='error-container__title'>404</h1>
      <p className='error-container__text'>Oups! La page que vous demandez n'existe pas.</p>
      <a href="/" className='error-container__url'>Retourner sur la page d’accueil</a>
    </div>
  </div>
  );
}
// Exportation de la fonction Error404 pour qu'elle puisse être utilisée dans d'autres fichiers.
export default Error404;
