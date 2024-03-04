import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { FavoriteProvider } from './context/useFavoriteContext.jsx'
import { SearchingProvider } from './context/useSearchingContext.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FavoriteProvider>
      <SearchingProvider>
        <App />
      </SearchingProvider>
    </FavoriteProvider>
  </React.StrictMode>
)
