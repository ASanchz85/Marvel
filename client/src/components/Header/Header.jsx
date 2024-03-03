import { Link } from 'react-router-dom'
import { HeartFull, MarvelLogo } from '../../components'
import './header.css'

function Header () {
  return (
    <header className='header'>
      <Link to='/'>
        <MarvelLogo />
      </Link>
      <div className='header__favourite'>
        <Link to='/favorites'>
          <HeartFull />
        </Link>
        <span>3</span>
      </div>
    </header>
  )
}

export default Header
