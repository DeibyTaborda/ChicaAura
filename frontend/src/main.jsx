import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router} from 'react-router-dom'
import './styles/global.css'
import RoutesChicaAura from './routes/Routes.jsx'

createRoot(document.getElementById('root')).render(
  <Router>
    <RoutesChicaAura/>
  </Router>
)
