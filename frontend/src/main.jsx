import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Login from './views/login/Login.jsx'
import './styles/global.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Login />
  </StrictMode>,
)
