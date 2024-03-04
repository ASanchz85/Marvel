import { Link } from 'react-router-dom'
import { HeartFull, MarvelLogo } from '../../components'
import { useFavoriteContext } from '../../context/useFavoriteContext'
import { useSearchingContext } from '../../context/useSearchingContext'
import './header.css'

function Header () {
  const { favoritesCount } = useFavoriteContext()
  const { handleSearch } = useSearchingContext()

  const handleResetGlobalSearch = () => {
    handleSearch('')
  }

  return (
    <header className='header'>
      <Link to='/' onClick={handleResetGlobalSearch}>
        <MarvelLogo />
      </Link>
      <div className='header__favourite'>
        <Link to='/favorites'>
          <HeartFull />
        </Link>
        <span>{favoritesCount}</span>
      </div>
    </header>
  )
}

export default Header
