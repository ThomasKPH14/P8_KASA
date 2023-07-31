// Importer la bibliothèque React.
import React from 'react'
// Définir un composant fonctionnel Tags qui prend des "tags" comme props
function Tags({ tags }) {
  return (
    <div className="tag-container">
      <ul className='tag-list'>
        { tags.map((tag, index) => (
            <li key={index}>{ tag }</li>
        )) }
      </ul>
    </div>
  )
}
// Exporter le composant Tags pour qu'il puisse être utilisé dans d'autres fichiers.
export default Tags