import { jest, test, expect, describe } from '@jest/globals'
import { renderHook } from '@testing-library/react-hooks'
import { useFetch } from './useFetch'

describe('useFetch custom hook', () => {
  test('fetches data successfully', async () => {
    // Mock the fetch function
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({ data: 'test data' })
    })

    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch('https://example.com')
    )

    // Initial loading state
    expect(result.current.loading).toBe(true)
    expect(result.current.error).toBe(null)
    expect(result.current.data).toBe(null)

    await waitForNextUpdate()

    // After data fetching
    expect(result.current.loading).toBe(false)
    expect(result.current.error).toBe(null)
    expect(result.current.data).toEqual({ data: 'test data' })

    // Cleanup
    delete global.fetch
  })

  test('handles fetch error', async () => {
    // Mock the fetch function to throw an error
    global.fetch = jest.fn().mockRejectedValue(new Error('Fetch error'))

    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch('https://example.com')
    )

    // Initial loading state
    expect(result.current.loading).toBe(true)
    expect(result.current.error).toBe(null)
    expect(result.current.data).toBe(null)

    await waitForNextUpdate()

    // After handling error
    expect(result.current.loading).toBe(false)
    expect(result.current.error).toEqual(new Error('Fetch error'))
    expect(result.current.data).toBe(null)

    // Cleanup
    delete global.fetch
  })
})
