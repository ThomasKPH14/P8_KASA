// Importation React
import React from 'react'
// Définir un composant fonctionnel Host
function Host ( { host } ) {
  const { name, picture } = host;
// Retourner le JSX pour le composant Host
  return (
    <div className='host-info'>
      <p>{name}</p>
      <img className='host-picture' src={picture} alt={`Host: ${name}`} />
    </div>
  )
}
// Exporter le composant Host pour l'utiliser dans d'autres fichiers
export default Host