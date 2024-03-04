import React from 'react'
import { describe, test, expect } from '@jest/globals'
import { render, screen, fireEvent } from '@testing-library/react'
import HeroInfo from './HeroInfo'
import { FavoriteContextProvider } from '../../../context/useFavoriteContext'

describe('HeroInfo component', () => {
  test('renders hero info with correct details', () => {
    const mockCharacterData = {
      id: 1,
      name: 'Test Character',
      description: 'This is a test description.',
      thumbnail: {
        path: 'path/to/image',
        extension: 'jpg'
      }
    }

    render(
      <FavoriteContextProvider>
        <HeroInfo characterData={mockCharacterData} />
      </FavoriteContextProvider>
    )

    expect(screen.getByText('Test Character')).toBeInTheDocument()
    expect(screen.getByText('This is a test description.')).toBeInTheDocument()
    expect(screen.getByAltText('placeholder')).toHaveAttribute(
      'src',
      'path/to/image.jpg'
    )
  })

  test('toggles favorite status when heart icon is clicked', () => {
    const mockCharacterData = {
      id: 1,
      name: 'Test Character',
      description: 'This is a test description.',
      thumbnail: {
        path: 'path/to/image',
        extension: 'jpg'
      }
    }

    const { getByTestId } = render(
      <FavoriteContextProvider>
        <HeroInfo characterData={mockCharacterData} />
      </FavoriteContextProvider>
    )

    const heartIcon = getByTestId('heart-icon')

    fireEvent.click(heartIcon)

    expect(heartIcon).toHaveClass('heart-full')

    fireEvent.click(heartIcon)

    expect(heartIcon).toHaveClass('heart-empty')
  })
})
