import { createContext, useState, useContext } from 'react'

export const SearchingContext = createContext()

export const useSearchingContext = () => useContext(SearchingContext)

export const SearchingProvider = ({ children }) => {
  const [search, setSearch] = useState(null)

  const handleSearch = (newSearch) => {
    setSearch(newSearch)
  }

  return (
    <SearchingContext.Provider
      value={{
        search,
        handleSearch
      }}
    >
      {children}
    </SearchingContext.Provider>
  )
}
