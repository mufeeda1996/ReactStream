import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './Styles/index.scss'
import {BrowserRouter} from 'react-router-dom'
import Appcontext from './Context/Appcontext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Appcontext>
  <BrowserRouter>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </BrowserRouter>
  </Appcontext>
)
