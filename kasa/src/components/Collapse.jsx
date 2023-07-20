import React, { useState } from 'react';

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

export default Accordion;
