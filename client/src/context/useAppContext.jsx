import { createContext, useState, useContext, useEffect } from 'react'

const AppContext = createContext()

export const useAppContext = () => useContext(AppContext)

export const AppProvider = ({ children }) => {
  const [items, setItems] = useState([])
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    const storedFavorites =
      JSON.parse(window.localStorage.getItem('marvel_favorites')) || []
    setFavorites(storedFavorites)
  }, [])

  useEffect(() => {
    window.localStorage.setItem('marvel_favorites', JSON.stringify(favorites))
  }, [favorites])

  const addToFavorites = (itemId) => {
    setFavorites([...favorites, itemId])
  }

  const removeFromFavorites = (itemId) => {
    setFavorites(favorites.filter((id) => id !== itemId))
  }

  const updateItems = (newItems) => {
    setItems(newItems)
  }

  return (
    <AppContext.Provider
      value={{ items, favorites, addToFavorites, removeFromFavorites, updateItems }}
    >
      {children}
    </AppContext.Provider>
  )
}
