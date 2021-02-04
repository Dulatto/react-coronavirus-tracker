import React from 'react'
import './App.css'
import { NavBar, Cards, CountryPicker, Charts, Footer } from './components'

export const App = () => {
  return (
    <>
      <NavBar />
      <Cards />
      <CountryPicker />
      <Charts />
      <Footer />
    </>
  )
}

export default App
