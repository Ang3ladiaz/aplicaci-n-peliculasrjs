import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { MoviApp } from './MoviApp'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MoviApp/>    
  </StrictMode>
)
