import React from 'react'
import Card from './Card'
import Loading from '../Loading'
import { useContext } from 'react'
import { CoronaContext } from '../../context'

const Cards = () => {
  const { caseData } = useContext(CoronaContext)
  const { lastUpdate, recovered, confirmed, deaths } = caseData

  const cardItems = confirmed
    ? [
        {
          name: 'Infected',
          text: 'Number of infected cases',
          cases: recovered.value,
        },
        {
          name: 'Recovered',
          text: 'Number of recovered cases',
          cases: confirmed.value,
        },
        {
          name: 'Deaths',
          text: 'Number of deaths',
          cases: deaths.value,
        },
      ]
    : []

  const cardsContainer = cardItems.map((card, index) => (
    <Card cards={{ ...card, lastUpdate }} key={index} />
  ))

  return (
    <div className='container my-5'>
      <div className='row'>
        {cardItems.length ? cardsContainer : <Loading />}
      </div>
    </div>
  )
}

export default Cards
