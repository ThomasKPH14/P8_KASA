import React from 'react'

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

export default Tags