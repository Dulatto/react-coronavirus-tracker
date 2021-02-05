import React from 'react'
import './App.css'
import { NavBar, Cards, CountryPicker, Charts } from './components'

export const App = () => {
  return (
    <>
      <NavBar />
      <Cards />
      <CountryPicker />
      <Charts />     
    </>
  )
}

export default App
