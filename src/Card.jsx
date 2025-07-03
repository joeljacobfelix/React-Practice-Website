import React from 'react'
import { Link } from 'react-router-dom'


const Card = ({id , title, onClick, to}) => {
  return (
    
    <div 
      className='card' 
      onClick={()=>onClick(id)}
    >
      <img 
        className="card-image" 
        src="./vite.svg"
      />

      <h3 className="card-title">
        {title}
      </h3>
      <p className='card-text'>
        Here goes the content of the card
      </p>
    </div>
    
  )
}

export default Card

