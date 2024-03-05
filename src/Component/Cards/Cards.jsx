import React from 'react'

import './cards.css'

export const Cards = ({data}) => {

  return (
    <div className='Men-card'>
        <div className="card-img">
          <img src={data.img}></img>
        </div>
        <div className="card-description">
          <p>{data.description}</p>
          <span>RS{data.price}</span>
        </div>
        <div className='card-button'>
          <button type='button'>Quick View</button>
        </div>
      </div>
  )
}
