import React from 'react'
import { jest, test, expect, describe } from '@jest/globals'
import { render, screen } from '@testing-library/react'
import { useParams } from 'react-router-dom'
import Details from './Details'
import { useFetch } from '../../hooks/useFetch'
import { FavoriteContextProvider } from '../../context/useFavoriteContext'

// Mock useParams hook
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn()
}))

// Mock useFetch hook
jest.mock('../../hooks/useFetch')

describe('Details component', () => {
  test('renders character details when character data is available', () => {
    const mockCharacterData = {
      id: 1,
      name: 'Test Character',
      comics: [
        { id: 1, title: 'Comic 1' },
        { id: 2, title: 'Comic 2' }
      ]
    }

    useParams.mockReturnValue({ id: '1' })
    useFetch.mockReturnValue({ data: mockCharacterData })

    render(
      <FavoriteContextProvider>
        <Details />
      </FavoriteContextProvider>
    )

    expect(screen.getByText('Test Character')).toBeInTheDocument()
    expect(screen.getByText('Comic 1')).toBeInTheDocument()
    expect(screen.getByText('Comic 2')).toBeInTheDocument()
  })

  test('renders loading bar when character data is not available', () => {
    useParams.mockReturnValue({ id: '1' })
    useFetch.mockReturnValue({ data: null })

    render(
      <FavoriteContextProvider>
        <Details />
      </FavoriteContextProvider>
    )

    expect(screen.getByText('Loading...')).toBeInTheDocument()
  })

  test('renders favorite character details when character is in favorites', () => {
    const mockFavoriteCharacter = {
      id: 1,
      name: 'Favorite Character',
      comics: [
        { id: 1, title: 'Comic 1' },
        { id: 2, title: 'Comic 2' }
      ]
    }

    console.log(mockFavoriteCharacter)
    useParams.mockReturnValue({ id: '1' })
    useFetch.mockReturnValue({ data: null })

    render(
      <FavoriteContextProvider>
        <Details />
      </FavoriteContextProvider>
    )

    expect(screen.getByText('Favorite Character')).toBeInTheDocument()
    expect(screen.getByText('Comic 1')).toBeInTheDocument()
    expect(screen.getByText('Comic 2')).toBeInTheDocument()
  })
})
