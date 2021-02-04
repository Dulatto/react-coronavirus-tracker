import React from 'react'

const Loading = () => {
  return (
    <div className='d-flex justify-content-center align-center w-100'>
      <div className='spinner-border text-secondary m-5' role='status'>
        <span className='sr-only'>Loading...</span>
      </div>
    </div>
  )
}

export default Loading
