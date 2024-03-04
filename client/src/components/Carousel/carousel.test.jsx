import { render, screen, within } from '@testing-library/react'
import '@testing-library/jest-dom'
import Carousel from './Carousel'
import { describe, expect, it } from 'vitest'

// Mock data
const mockItems = [
  {
    id: 1,
    title: 'Comic 1',
    description: 'Description 1',
    date: '2022-01-01',
    thumbnail: { path: 'path1', extension: 'jpg' }
  },
  {
    id: 2,
    title: 'Comic 2',
    description: 'Description 2',
    date: '2022-01-02',
    thumbnail: { path: 'path2', extension: 'jpg' }
  },
  {
    id: 3,
    title: 'Comic 3',
    description: 'Description 3',
    date: '2022-01-03',
    thumbnail: { path: 'path3', extension: 'jpg' }
  }
]

describe('Carousel', () => {
  it('renders without crashing', () => {
    render(<Carousel comics={mockItems} />)
    const carouselElement = screen.getByRole('list')
    expect(carouselElement).toBeInTheDocument()
  })

  it('renders correct number of items', () => {
    render(<Carousel comics={mockItems} />)
    const carouselItems = screen.getAllByRole('listitem')
    expect(carouselItems.length).toBe(mockItems.length)
  })

  it('sorts comics by date', () => {
    render(<Carousel comics={mockItems} />)
    const carouselItems = screen.getAllByRole('listitem')
    // Assuming each CarouselCard renders the date in a 'p' element with class 'carousel__item--date'
    const dates = carouselItems
      .map((item) => {
        const dateElement = within(item).getByText((content, node) =>
          node.className.includes('carousel__item--date')
        )
        return dateElement ? dateElement.textContent : null
      })
      .filter((date) => date !== null)
    const sortedDates = [...dates].sort((a, b) => a.localeCompare(b))
    expect(dates).toEqual(sortedDates)
  })

  it('renders ScrollBar when there are more than 5 comics', () => {
    render(<Carousel comics={mockItems} />)
    if (mockItems.length > 5) {
      const scrollBar = screen.getByRole('scrollbar')
      expect(scrollBar).toBeInTheDocument()
    } else {
      const scrollBar = screen.queryByRole('scrollbar')
      expect(scrollBar).not.toBeInTheDocument()
    }
  })
})
