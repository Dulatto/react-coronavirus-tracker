import React from 'react'
import Countup from 'react-countup'

const Card = ({ cards: { name, text, cases, lastUpdate } }) => {
  return (
    <div className='col-md-4'>
      <div className={'card mb-3 box-' + name.toLowerCase()}>
        <div className='card-body'>
          <h4 className='card-title'>
            <Countup start={0} end={cases} duration={2.5} separator=',' />
          </h4>
          <p className='card-text text-secondary m-0'>
            {new Date(lastUpdate).toDateString()}
          </p>
          <p className='card-text'>{text}</p>
        </div>
        <div className='card-header bg-light text-white font-weight-bold'>{name}</div>
      </div>
    </div>
  )
}

export default Card
