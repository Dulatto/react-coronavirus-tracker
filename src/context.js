import React, { useState, useEffect } from 'react'

const CoronaContext = React.createContext()
const CoronaProvider = ({ children }) => {
  const url = 'https://covid19.mathdro.id/api'
  const [caseData, setCaseData] = useState([])
  const [caseDailyData, setCaseDailyData] = useState([])
  const [country, setCountry] = useState(null)
  const [countries, setCountries] = useState([])

  // Only fetch once
  useEffect(() => {
    // Fetch Countries List
    const getCountriesList = () => {
      fetch(url + '/countries')
        .then((res) => res.json())
        .then(({ countries }) => {
          setCountries(countries.map((country) => country.name))
        })
        .catch(() => setCountries())
    }

    // Fetch Daily Summary
    const getDailyData = () => {
      fetch(url + '/daily')
        .then((res) => res.json())
        .then((data) => {
          const item = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate,
          }))
          setCaseDailyData(item)
        })
        .catch(() => setCaseDailyData([]))
    }

    getDailyData()
    getCountriesList()
  }, [])

  // Fetch Cases, Recoveries, Deaths
  useEffect(() => {
    let changeableUrl = url
    const getData = () => {
      if (country) changeableUrl = url + '/countries/' + country
      fetch(changeableUrl)
        .then((res) => res.json())
        .then((item) => setCaseData(item))
        .catch(() => setCaseData([]))
    }
    getData(country)
  }, [country])

  // Fetch specific country data
  const handleCountryChange = async (country) => {
    setCountry(country)
  }

  return (
    <CoronaContext.Provider
      value={{
        caseData,
        handleCountryChange,
        country,
        caseDailyData,
        countries,
      }}
    >
      {children}
    </CoronaContext.Provider>
  )
}

export { CoronaProvider, CoronaContext }
