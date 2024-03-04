import { render, screen } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import { FavoriteContext } from '../../context/useFavoriteContext'
import { SearchingContext } from '../../context/useSearchingContext'
import Header from './Header'
import { describe, expect, it } from 'vitest'
import '@testing-library/jest-dom'

describe('Header', () => {
  it('renders without crashing', () => {
    const MockHeader = () => (
      <Router>
        <FavoriteContext.Provider value={{ favoritesCount: 0 }}>
          <SearchingContext.Provider value={{ handleSearch: () => {} }}>
            <Header />
          </SearchingContext.Provider>
        </FavoriteContext.Provider>
      </Router>
    )

    render(<MockHeader />)
  })

  it('contains the MarvelLogo and HeartFull components', () => {
    const MockHeader = () => (
      <Router>
        <FavoriteContext.Provider value={{ favoritesCount: 0 }}>
          <SearchingContext.Provider value={{ handleSearch: () => {} }}>
            <Header />
          </SearchingContext.Provider>
        </FavoriteContext.Provider>
      </Router>
    )

    render(<MockHeader />)

    expect(
      screen.getByRole('img', { name: /marvel logo/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /heart full/i })).toBeInTheDocument()
  })
})
