import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import PixelPets from "./PixelPets";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PixelPets />
    <App />
  </React.StrictMode>
)
