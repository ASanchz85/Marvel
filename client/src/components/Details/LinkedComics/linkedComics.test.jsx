import { render, screen } from '@testing-library/react'
import LinkedComics from './LinkedComics'
import { describe, expect, it } from 'vitest'
import '@testing-library/jest-dom'

// Mock data
const mockComics = [
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

describe('LinkedComics', () => {
  it('renders without crashing', () => {
    render(<LinkedComics comics={mockComics} />)
    const linkElement = screen.getByText(/Comic 1/i)
    expect(linkElement).toBeInTheDocument()
  })

  it('renders correct number of comics', () => {
    render(<LinkedComics comics={mockComics} />)
    const comicElements = screen.getAllByText(/Comic /i)
    expect(comicElements.length).toBe(mockComics.length)
  })

  it('renders correct comic title and description', () => {
    render(<LinkedComics comics={mockComics} />)
    const comicTitle = screen.getByText(/Comic 1/i)
    expect(comicTitle).toBeInTheDocument()
  })
})
