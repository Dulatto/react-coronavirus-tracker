import React from 'react'
import logo from '../assets/logo.png'

const NavBar = () => {
  return (
    <nav className='navbar navbar-light bg-light border-bottom'>
      <div className='container'>
        <a className='navbar-brand' href='/'>
          <img src={logo} alt='Corona Logo' />
        </a>
      </div>
    </nav>
  )
}

export default NavBar
