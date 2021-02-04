import React, { useContext } from 'react'
import { Line, Bar } from 'react-chartjs-2'
import { CoronaContext } from '../../context'

const Charts = () => {
  const { caseData, country, caseDailyData } = useContext(CoronaContext)
  const { confirmed, recovered, deaths } = caseData
  const dailyData = caseDailyData

  const linechart = dailyData.length ? (
    <Line
      data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [
          {
            data: dailyData.map(({ confirmed }) => confirmed),
            label: 'Infected',
            borderColor: '#3333ff',
            fill: true,
          },
          {
            data: dailyData.map(({ deaths }) => deaths),
            label: 'Deaths',
            borderColor: 'red',
            backgroundColor: 'rgba(255, 0, 0, 0.5)',
            fill: true,
          },
        ],
      }}
    />
  ) : null

  const barChart = confirmed ? (
    <Bar
      data={{
        labels: ['Infected', 'Recovered', 'Deaths'],
        datasets: [
          {
            label: 'People',
            backgroundColor: [
              'rgba(0, 0, 255, 0.5)',
              'rgba(0, 255, 0, 0.5)',
              'rgba(255, 0, 0, 0.5)',
            ],
            data: [confirmed.value, recovered.value, deaths.value],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: `Curent state in ${country}` },
      }}
    />
  ) : null

  return (
    <div className='container mt-5 pb-5'>
      <div className='row'>
        <div className='col-md-8 m-auto'>{country ? barChart : linechart}</div>
      </div>
    </div>
  )
}

export default Charts
