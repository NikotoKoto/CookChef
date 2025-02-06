import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { ApiContext } from './context/ApiContext'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router}> 
      {/* Need routerProvider with router */}
    <ApiContext.Provider value="https://restapi.fr/api/recipes">
    <App  />
    </ApiContext.Provider>
    </RouterProvider>
  </StrictMode>,
)
