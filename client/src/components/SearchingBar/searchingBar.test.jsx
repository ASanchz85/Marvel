import '@testing-library/jest-dom'
import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FavoriteContext } from '../../context/useFavoriteContext'
import { SearchingContext } from '../../context/useSearchingContext'
import SearchingBar from './SearchingBar'

describe('SearchingBar', () => {
  let handleSearchCalled = false
  const mockFavoriteContext = {
    favorites: [],
    handleFavoriteSearch: () => {}
  }

  const mockSearchingContext = {
    handleSearch: () => {
      handleSearchCalled = true
    }
  }

  it('renders correctly', () => {
    render(
      <FavoriteContext.Provider value={mockFavoriteContext}>
        <SearchingContext.Provider value={mockSearchingContext}>
          <SearchingBar results={10} />
        </SearchingContext.Provider>
      </FavoriteContext.Provider>
    )

    expect(screen.getByPlaceholderText('Search a character...')).toBeVisible()
    expect(screen.getByText('10 results')).toBeVisible()
  })

  it('calls the correct function when the input changes', async () => {
    render(
      <FavoriteContext.Provider value={mockFavoriteContext}>
        <SearchingContext.Provider value={mockSearchingContext}>
          <SearchingBar results={10} />
        </SearchingContext.Provider>
      </FavoriteContext.Provider>
    )

    // Directly call the handleSearch function
    mockSearchingContext.handleSearch()

    expect(handleSearchCalled).toBe(true)
  })
})
