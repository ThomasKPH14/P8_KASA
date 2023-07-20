import React from 'react';

function Error404() {
  return (
  <div className='main-page'>
    <div className='error-container'>
      <h1 className='error-container__title'>404</h1>
      <p className='error-container__text'>Oups! La page que <br></br>vous demandez n'existe pas.</p>
      <a href="/" className='error-container__url'>Retourner sur la page d’accueil</a>
    </div>
  </div>
  );
}

export default Error404;
