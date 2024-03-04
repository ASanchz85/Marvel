import { render, screen } from '@testing-library/react'
import { FavoriteContext } from '../../context/useFavoriteContext'
import Card from './Card'
import { describe, expect, it } from 'vitest'
import '@testing-library/jest-dom'

describe('Card', () => {
  const mockFavoriteContext = {
    favorites: [
      {
        id: '1',
        name: 'Test Name',
        thumbnail: { path: 'path', extension: 'jpg' }
      }
    ]
  }

  const mockCardProps = {
    id: '1',
    name: 'Test Name',
    thumbnail: { path: 'path', extension: 'jpg' }
  }

  it('renders correctly', () => {
    render(
      <FavoriteContext.Provider value={mockFavoriteContext}>
        <Card {...mockCardProps} />
      </FavoriteContext.Provider>
    )

    expect(screen.getByText('Test Name')).toBeInTheDocument()
    expect(
      screen.getByRole('img', { name: /placeholder/i })
    ).toBeInTheDocument()
  })

  it('displays the correct heart icon based on favorite status', () => {
    render(
      <FavoriteContext.Provider value={mockFavoriteContext}>
        <Card {...mockCardProps} />
      </FavoriteContext.Provider>
    )

    expect(screen.getByRole('button', { name: /heart full/i })).toBeInTheDocument()

    const mockNonFavoriteCardProps = {
      id: '2',
      name: 'Test Name 2',
      thumbnail: { path: 'path2', extension: 'jpg' }
    }

    render(
      <FavoriteContext.Provider value={mockFavoriteContext}>
        <Card {...mockNonFavoriteCardProps} />
      </FavoriteContext.Provider>
    )

    expect(
      screen.getByRole('button', { name: /heart empty/i })
    ).toBeInTheDocument()
  })
})
