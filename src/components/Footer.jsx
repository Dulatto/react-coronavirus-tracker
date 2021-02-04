import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className='footer-copyright py-3 text-center'>
        <div className='container-fluid'>
          © {new Date().getFullYear()} Copyright:{' '}
          <a href='https://www.fb.com/aashishmaharjan.2001'>Aashish Maharjan</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
