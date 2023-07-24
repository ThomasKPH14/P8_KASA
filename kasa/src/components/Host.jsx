import React from 'react'

function Host ( { host } ) {
  const { name, picture } = host;

  return (
    <div className='host-info'>
      <p>{name}</p>
      <img className='host-picture' src={picture} alt={`Host: ${name}`} />
    </div>
  )
}

export default Host