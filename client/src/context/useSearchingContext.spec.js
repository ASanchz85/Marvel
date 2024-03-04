import React from 'react'
import { test, expect, describe } from '@jest/globals'
import { renderHook, act } from '@testing-library/react-hooks'
import { render, fireEvent, screen } from '@testing-library/react'
import { SearchingProvider, useSearchingContext } from './useSearchingContext'

describe('useSearchingContext custom hook', () => {
  test('returns search value and handleSearch function', () => {
    const wrapper = ({ children }) => (
      <SearchingProvider>{children}</SearchingProvider>
    )
    const { result } = renderHook(() => useSearchingContext(), { wrapper })

    expect(result.current.search).toBe(null)
    expect(typeof result.current.handleSearch).toBe('function')
  })

  test('updates search value when handleSearch is called', () => {
    const wrapper = ({ children }) => (
      <SearchingProvider>{children}</SearchingProvider>
    )
    const { result } = renderHook(() => useSearchingContext(), { wrapper })

    act(() => {
      result.current.handleSearch('test search')
    })

    expect(result.current.search).toBe('test search')
  })
})

describe('SearchingProvider context provider', () => {
  test('provides search value and handleSearch function to children', () => {
    const TestComponent = () => {
      const { search, handleSearch } = useSearchingContext()
      return (
        <div>
          <input
            type='text'
            value={search || ''}
            onChange={(e) => handleSearch(e.target.value)}
          />
          <span>{search}</span>
        </div>
      )
    }

    render(
      <SearchingProvider>
        <TestComponent />
      </SearchingProvider>
    )

    const inputElement = screen.getByRole('textbox')
    fireEvent.change(inputElement, { target: { value: 'test input' } })

    expect(inputElement.value).toBe('test input')
    expect(screen.getByText('test input')).toBeInTheDocument()
  })
})
