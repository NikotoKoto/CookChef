import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { ApiContext } from './context/ApiContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ApiContext.Provider value="https://restapi.fr/api/recipes">
    <App  />
    </ApiContext.Provider>
  </StrictMode>,
)
