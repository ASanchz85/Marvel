import React from 'react'
import { jest, test, expect, describe } from '@jest/globals'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Favorites from './Favorites'
import { FavoriteContextProvider } from '../../context/useFavoriteContext'

describe('Favorites component', () => {
  const favoritesData = [
    { id: 1, name: 'Favorite Character 1' },
    { id: 2, name: 'Favorite Character 2' }
  ]

  test('renders favorites with default favorites', () => {
    render(
      <MemoryRouter>
        <FavoriteContextProvider>
          <Favorites />
        </FavoriteContextProvider>
      </MemoryRouter>
    )

    // Check if SearchingBar with favoritesCount is rendered
    expect(screen.getByText(/Favorites: 0/i)).toBeInTheDocument()

    // Check if cards for each favorite are rendered
    favoritesData.forEach((favorite) => {
      expect(
        screen.getByText(new RegExp(favorite.name, 'i'))
      ).toBeInTheDocument()
    })
  })

  test('renders favorites with searched favorites', () => {
    const favoritesSearchData = [
      { id: 3, name: 'Searched Favorite 1' },
      { id: 4, name: 'Searched Favorite 2' }
    ]

    render(
      <MemoryRouter>
        <FavoriteContextProvider>
          <Favorites />
        </FavoriteContextProvider>
      </MemoryRouter>
    )

    // Mocking the useFavoriteContext to return searched favorites
    jest
      .spyOn(require('../../context/useFavoriteContext'), 'useFavoriteContext')
      .mockImplementation(() => ({
        favorites: favoritesData,
        favoritesCount: favoritesData.length,
        favoritesSearch: favoritesSearchData
      }))

    // Check if SearchingBar with favoritesCount is rendered
    expect(screen.getByText(/Favorites: 2/i)).toBeInTheDocument()

    // Check if cards for each searched favorite are rendered
    favoritesSearchData.forEach((searchedFavorite) => {
      expect(
        screen.getByText(new RegExp(searchedFavorite.name, 'i'))
      ).toBeInTheDocument()
    })
  })
})
