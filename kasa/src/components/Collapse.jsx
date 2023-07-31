// Importation des hooks React nécessaires : useState pour la gestion de l'état.
import React, { useState } from 'react';
// Définition du composant Accordion
function Accordion({ title, content }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleAccordion = () => {
    setIsExpanded((isExpanded) => !isExpanded);
  };

  return (
    <div className={`accordion ${isExpanded ? 'expanded' : ''}`} onClick={toggleAccordion}>
      <button className='accordion__title'>
        {title}
        <span></span>
      </button>
      <p className='accordion__content'>{content}</p>
    </div>
  );
}
// Exportation du composant Accordion pour qu'il puisse être utilisé dans d'autres fichiers.
export default Accordion;
