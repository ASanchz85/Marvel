import { renderHook } from '@testing-library/react-hooks'
import { test, expect, describe } from '@jest/globals'
import { useScrollBarPercentage } from './useScrollBarPercentage'

describe('useScrollBarPercentage custom hook', () => {
  test('calculates scroll percentage correctly', () => {
    // Create a ref object
    const carouselRef = { current: document.createElement('div') }
    carouselRef.current.scrollWidth = 1000
    carouselRef.current.clientWidth = 500
    carouselRef.current.scrollLeft = 250

    const { result } = renderHook(() => useScrollBarPercentage(carouselRef))

    // Check if the initial scroll percentage is 50
    expect(result.current).toBe(25)
  })

  test('returns 0 if carouselRef is not defined', () => {
    const { result } = renderHook(() => useScrollBarPercentage(null))

    // Check if the scroll percentage is 0 when carouselRef is not defined
    expect(result.current).toBe(0)
  })
})
