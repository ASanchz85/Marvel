import React from 'react'
import { describe, test, expect, jest } from '@jest/globals'
import { render, screen, fireEvent } from '@testing-library/react'
import SearchingBar from './SearchingBar'
import { FavoriteContextProvider } from '../../context/useFavoriteContext'
import { SearchingContextProvider } from '../../context/useSearchingContext'

describe('SearchingBar component', () => {
  test('renders searching bar with correct placeholder', () => {
    render(
      <FavoriteContextProvider>
        <SearchingContextProvider>
          <SearchingBar results={0} />
        </SearchingContextProvider>
      </FavoriteContextProvider>
    )

    const searchInput = screen.getByPlaceholderText('Search a character...')

    expect(searchInput).toBeInTheDocument()
  })

  test('calls handleSearch when input changes and isFavorite is false', () => {
    const mockHandleSearch = jest.fn()

    render(
      <FavoriteContextProvider>
        <SearchingContextProvider>
          <SearchingBar results={0} />
        </SearchingContextProvider>
      </FavoriteContextProvider>
    )

    const searchInput = screen.getByPlaceholderText('Search a character...')
    fireEvent.change(searchInput, { target: { value: 'test' } })

    expect(mockHandleSearch).not.toHaveBeenCalled()
  })

  test('calls handleFavoriteSearch when input changes and isFavorite is true', () => {
    const mockHandleFavoriteSearch = jest.fn()

    render(
      <FavoriteContextProvider>
        <SearchingContextProvider>
          <SearchingBar
            results={0}
            isFavorite
          />
        </SearchingContextProvider>
      </FavoriteContextProvider>
    )

    const searchInput = screen.getByPlaceholderText('Search a character...')
    fireEvent.change(searchInput, { target: { value: 'test' } })

    expect(mockHandleFavoriteSearch).not.toHaveBeenCalled()
  })
})
