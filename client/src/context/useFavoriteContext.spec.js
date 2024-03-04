import React from 'react'
import { describe, test, expect } from '@jest/globals'
import { renderHook, act } from '@testing-library/react-hooks'
import { FavoriteProvider, useFavoriteContext } from './FavoriteProvider'

describe('FavoriteProvider', () => {
  test('adds and removes favorites', () => {
    const wrapper = ({ children }) => (
      <FavoriteProvider>{children}</FavoriteProvider>
    )
    const { result } = renderHook(() => useFavoriteContext(), { wrapper })

    // Initial favorites should be an empty array
    expect(result.current.favorites).toEqual([])

    // Add a favorite
    act(() => {
      result.current.addFavorite({ id: 1, name: 'Test Character' })
    })

    // Favorites should contain the added favorite
    expect(result.current.favorites).toEqual([
      { id: 1, name: 'Test Character' }
    ])

    // Remove the favorite
    act(() => {
      result.current.removeFavorite(1)
    })

    // Favorites should be empty again
    expect(result.current.favorites).toEqual([])
  })

  test('updates favorites search', () => {
    const wrapper = ({ children }) => (
      <FavoriteProvider>{children}</FavoriteProvider>
    )
    const { result } = renderHook(() => useFavoriteContext(), { wrapper })

    // Initial favorites search should be null
    expect(result.current.favoritesSearch).toBe(null)

    // Update favorites search
    act(() => {
      result.current.handleFavoriteSearch('test')
    })

    // Favorites search should be updated
    expect(result.current.favoritesSearch).toBe('test')
  })
})
