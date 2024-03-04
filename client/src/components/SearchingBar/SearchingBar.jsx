import { useRef } from 'react'
import { MagnifyingLens } from '../../components'
import { useFavoriteContext } from '../../context/useFavoriteContext'
import { useSearchingContext } from '../../context/useSearchingContext'
import './searchingBar.css'

function SearchingBar ({ results, isFavorite = false }) {
  const { favorites, handleFavoriteSearch } = useFavoriteContext()
  const { handleSearch } = useSearchingContext()
  const debounceRef = useRef()

  const handleInput = (e) => {
    e.preventDefault()
    const inputValue = e.target.value

    if (isFavorite) {
      const searchResults = favorites.filter((item) =>
        item.name.toLowerCase().includes(inputValue.toLowerCase())
      )

      handleFavoriteSearch(searchResults)
    } else {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current)
      }

      debounceRef.current = setTimeout(() => {
        handleSearch(inputValue)
      }, 400)
    }
  }

  return (
    <section className='searchingbar__container'>
      <div className='searchingbar__item'>
        <MagnifyingLens />
        <input
          type='text'
          placeholder='Search a character...'
          className='searchingbar__input'
          onChange={handleInput}
        />
      </div>
      <span className='searchingbar__results'>{results} results</span>
    </section>
  )
}

export default SearchingBar
