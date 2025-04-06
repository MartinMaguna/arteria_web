import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import CampoEstrellas from './Componentes/CampoEstrellas/CampoEstrellas.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <CampoEstrellas />
  </StrictMode>,
) 
