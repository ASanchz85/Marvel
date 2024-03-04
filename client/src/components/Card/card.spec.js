import React from 'react'
import { describe, test, expect } from '@jest/globals'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Card from './Card'
import { FavoriteContextProvider } from '../../context/useFavoriteContext'

describe('Card component', () => {
  test('renders card with correct props', () => {
    const mockCharacter = {
      id: 1,
      name: 'Test Character',
      thumbnail: {
        path: 'path/to/image',
        extension: 'jpg'
      }
    }

    const { getByText, getByAltText } = render(
      <FavoriteContextProvider>
        <Card {...mockCharacter} />
      </FavoriteContextProvider>
    )

    expect(getByText('Test Character')).toBeInTheDocument()
    expect(getByAltText('placeholder')).toHaveAttribute(
      'src',
      'path/to/image.jpg'
    )
  })

  test('changes fill color on mouse enter and leave', () => {
    const mockCharacter = {
      id: 1,
      name: 'Test Character',
      thumbnail: {
        path: 'path/to/image',
        extension: 'jpg'
      }
    }

    const { getByTestId } = render(
      <FavoriteContextProvider>
        <Card {...mockCharacter} />
      </FavoriteContextProvider>
    )

    const heartIcon = getByTestId('heart-icon')

    fireEvent.mouseEnter(heartIcon)
    expect(heartIcon).toHaveAttribute('fill', 'white')

    fireEvent.mouseLeave(heartIcon)
    expect(heartIcon).toHaveAttribute('fill', 'red')
  })

  test('toggles slideOutAnimation on mouse over', () => {
    const mockCharacter = {
      id: 1,
      name: 'Test Character',
      thumbnail: {
        path: 'path/to/image',
        extension: 'jpg'
      }
    }

    const { getByText } = render(
      <FavoriteContextProvider>
        <Card {...mockCharacter} />
      </FavoriteContextProvider>
    )

    const card = getByText('Test Character')

    fireEvent.mouseOver(card)
    expect(card).toHaveClass('card--slideOut')

    fireEvent.mouseLeave(card)
    expect(card).not.toHaveClass('card--slideOut')
  })
})
