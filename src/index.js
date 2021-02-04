import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { CoronaProvider } from './context'

ReactDOM.render(
  <CoronaProvider>
    <App />
  </CoronaProvider>,
  document.getElementById('root')
)
