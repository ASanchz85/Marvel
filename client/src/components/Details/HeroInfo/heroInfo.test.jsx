import { render, screen, fireEvent } from '@testing-library/react'
import { FavoriteContext } from '../../../context/useFavoriteContext'
import HeroInfo from './HeroInfo'
import { describe, expect, it } from 'vitest'
import '@testing-library/jest-dom'

const mockCharacterData = {
  id: 1,
  name: 'Test Character',
  description: 'Test Description',
  thumbnail: {
    path: 'http://example.com/image',
    extension: 'jpg'
  }
}

const FavoriteContextWrapper = ({ children }) => {
  const favoriteContextValue = {
    favorites: [],
    addFavorite: () => {},
    removeFavorite: () => {}
  }

  return (
    <FavoriteContext.Provider value={favoriteContextValue}>
      {children}
    </FavoriteContext.Provider>
  )
}

describe('HeroInfo', () => {
  it('renders without crashing', () => {
    render(
      <FavoriteContextWrapper>
        <HeroInfo characterData={mockCharacterData} />
      </FavoriteContextWrapper>
    )
  })

  it('displays the character name, description, and image', () => {
    render(
      <FavoriteContextWrapper>
        <HeroInfo characterData={mockCharacterData} />
      </FavoriteContextWrapper>
    )
    expect(screen.getByText('Test Character')).toBeInTheDocument()
    expect(screen.getByText('Test Description')).toBeInTheDocument()
    expect(screen.getByRole('img')).toHaveAttribute(
      'src',
      'http://example.com/image.jpg'
    )
  })

  it('toggles favorite status when the favorite button is clicked', async () => {
    render(
      <FavoriteContextWrapper>
        <HeroInfo characterData={mockCharacterData} />
      </FavoriteContextWrapper>
    )
    const favoriteButton = screen.getByRole('button')
    expect(favoriteButton).toHaveClass('HeartEmpty')
    fireEvent.click(favoriteButton)
    await screen.findByRole('button', { class: 'HeartFull' })
    fireEvent.click(favoriteButton)
    await screen.findByRole('button', { class: 'HeartEmpty' })
  })
})
