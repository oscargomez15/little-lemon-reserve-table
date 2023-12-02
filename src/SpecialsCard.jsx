import React from 'react'

export const SpecialsCard = ({image, title, price, description}) => {
  return (
    <article className='specials-card'>
        <img src={image} alt={title}/>
        <div className='card-title'>
            <h2>{title}</h2>
            <h2>{price}</h2>
        </div>
        <p>{description}</p>
    </article>
  )
}
