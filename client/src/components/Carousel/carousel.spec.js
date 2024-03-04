import React from 'react'
import { jest, test, expect, describe } from '@jest/globals'
import { render, screen } from '@testing-library/react'
import Carousel from './Carousel'
import { useScrollBarPercantaje } from '../../hooks/useScrollBarPercantaje'

jest.mock('../../hooks/useScrollBarPercantaje')

describe('Carousel component', () => {
  test('renders carousel with comics', () => {
    const comics = [
      { id: 1, title: 'Comic 1', date: '2023-01-01' },
      { id: 2, title: 'Comic 2', date: '2023-01-02' }
    ]
    useScrollBarPercantaje.mockReturnValue(50) // Mocking scroll percentage

    render(<Carousel comics={comics} />)

    // Check if each comic card is rendered
    expect(screen.getByText('Comic 1')).toBeInTheDocument()
    expect(screen.getByText('Comic 2')).toBeInTheDocument()

    // Check if scroll bar is rendered
    expect(screen.getByTestId('scroll-bar')).toBeInTheDocument()
  })

  test('does not render scroll bar if comics length is less than or equal to 5', () => {
    const comics = [
      { id: 1, title: 'Comic 1', date: '2023-01-01' },
      { id: 2, title: 'Comic 2', date: '2023-01-02' },
      { id: 3, title: 'Comic 3', date: '2023-01-03' }
    ]
    useScrollBarPercantaje.mockReturnValue(50) // Mocking scroll percentage

    render(<Carousel comics={comics} />)

    // Check if scroll bar is not rendered
    expect(screen.queryByTestId('scroll-bar')).toBeNull()
  })

  test('renders scroll bar with correct percentage', () => {
    const comics = [
      { id: 1, title: 'Comic 1', date: '2023-01-01' },
      { id: 2, title: 'Comic 2', date: '2023-01-02' },
      { id: 3, title: 'Comic 3', date: '2023-01-03' },
      { id: 4, title: 'Comic 4', date: '2023-01-04' },
      { id: 5, title: 'Comic 5', date: '2023-01-05' },
      { id: 6, title: 'Comic 6', date: '2023-01-06' }
    ]
    useScrollBarPercantaje.mockReturnValue(50) // Mocking scroll percentage

    render(<Carousel comics={comics} />)

    // Check if scroll bar is rendered with correct percentage
    const scrollBar = screen.getByTestId('scroll-bar')
    expect(scrollBar).toBeInTheDocument()
    expect(scrollBar).toHaveStyle('height: 50%')
  })
})
