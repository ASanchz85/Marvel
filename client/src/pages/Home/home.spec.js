// Home.test.js
import { jest, test, expect } from '@jest/globals'
import React from 'react'
import { render, waitFor, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Home from './Home'
import { SearchingContextProvider } from '../../context/useSearchingContext'

// Mocking the useFetch hook
jest.mock('../../hooks/useFetch', () => ({
  useFetch: jest.fn(() => ({
    data: { data: { results: [{ id: 1, name: 'Test Character' }] } }
  }))
}))

// Mocking the SearchingContextProvider
jest.mock('../../context/useSearchingContext', () => ({
  useSearchingContext: jest.fn(() => ({ search: '' }))
}))

test('renders home page with data', async () => {
  render(
    <MemoryRouter>
      <SearchingContextProvider>
        <Home />
      </SearchingContextProvider>
    </MemoryRouter>
  )

  // LoadingBar should not be rendered
  expect(screen.queryByText(/Loading/i)).not.toBeInTheDocument()

  // SearchingBar should be rendered
  expect(screen.getByRole('textbox', { name: /Search/i })).toBeInTheDocument()

  // Wait for data to be loaded
  await waitFor(() => {
    // Check if Card is rendered
    expect(screen.getByText(/Test Character/i)).toBeInTheDocument()
  })
})

test('renders home page with loading state', () => {
  // Mocking useSearchingContext to simulate search
  jest
    .spyOn(require('../../context/useSearchingContext'), 'useSearchingContext')
    .mockImplementation(() => ({ search: 'test' }))

  render(
    <MemoryRouter>
      <SearchingContextProvider>
        <Home />
      </SearchingContextProvider>
    </MemoryRouter>
  )

  // LoadingBar should be rendered
  expect(screen.getByText(/Loading/i)).toBeInTheDocument()

  // SearchingBar should be rendered
  expect(screen.getByRole('textbox', { name: /Search/i })).toBeInTheDocument()
})
