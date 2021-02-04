import React from 'react'
import { useContext } from 'react'
import { CoronaContext } from '../../context'

const CountryPicker = () => {
  const { handleCountryChange, countries } = useContext(CoronaContext)

  function handleChange(e) {
    handleCountryChange(e.target.value)
  }

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 m-auto'>
          <select className='form-control' onChange={handleChange}>
            <option value=''>Global</option>
            {countries.length &&
              countries.map((country, i) => {
                return (
                  <option key={i} value={country}>
                    {country}
                  </option>
                )
              })}
          </select>
        </div>
      </div>
    </div>
  )
}

export default CountryPicker
