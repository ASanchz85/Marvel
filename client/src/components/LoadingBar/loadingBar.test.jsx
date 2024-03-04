import { render, screen } from '@testing-library/react'
import LoadingBar from './LoadingBar'
import { describe, expect, it } from 'vitest'
import '@testing-library/jest-dom'

describe('LoadingBar', () => {
  it('renders correctly', () => {
    render(<LoadingBar />)

    expect(screen.getByRole('progressbar')).toBeInTheDocument()
  })

  it('contains the correct classes', () => {
    render(<LoadingBar />)

    const loadingBar = screen.getByRole('progressbar')
    expect(loadingBar).toHaveClass('loadingbar__container')

    const innerDiv = loadingBar.firstChild
    expect(innerDiv).toHaveClass('loadingbar')
  })
})
