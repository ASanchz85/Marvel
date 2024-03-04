import { createContext, useState, useContext } from 'react'

const FavoriteContext = createContext()

export const useFavoriteContext = () => useContext(FavoriteContext)

export const FavoriteProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([])
  const [favoritesSearch, setFavoritesSearch] = useState(null)

  const addFavorite = (favorite) => {
    setFavorites([...favorites, favorite])
  }

  const removeFavorite = (id) => {
    setFavorites(favorites.filter((favorite) => favorite.id !== id))
  }

  const handleFavoriteSearch = (search) => {
    setFavoritesSearch(search)
  }

  const favoritesCount = favorites.length

  return (
    <FavoriteContext.Provider
      value={{
        favorites,
        addFavorite,
        removeFavorite,
        favoritesCount,
        favoritesSearch,
        handleFavoriteSearch
      }}
    >
      {children}
    </FavoriteContext.Provider>
  )
}
