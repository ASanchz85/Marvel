import React from 'react'
import { describe, test, expect, jest } from '@jest/globals'
import { render, screen, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Header from './Header'
import { FavoriteContextProvider } from '../../context/useFavoriteContext'
import { SearchingContextProvider } from '../../context/useSearchingContext'

describe('Header component', () => {
  test('renders header with correct favorites count', () => {
    const mockFavoritesCount = 5

    render(
      <MemoryRouter>
        <FavoriteContextProvider>
          <Header />
        </FavoriteContextProvider>
      </MemoryRouter>
    )

    const favoritesLink = screen.getByRole('link', { name: /Favorites/i })
    const favoritesCount = screen.getByText(mockFavoritesCount.toString())

    expect(favoritesLink).toBeInTheDocument()
    expect(favoritesCount).toBeInTheDocument()
    expect(favoritesCount).toHaveTextContent('5')
  })

  test('resets global search when Marvel logo is clicked', () => {
    const mockHandleSearch = jest.fn()

    render(
      <MemoryRouter>
        <SearchingContextProvider>
          <Header />
        </SearchingContextProvider>
      </MemoryRouter>
    )

    fireEvent.click(screen.getByAltText('Marvel Logo'))

    expect(mockHandleSearch).toHaveBeenCalledTimes(1)
    expect(mockHandleSearch).toHaveBeenCalledWith('')
  })
})
