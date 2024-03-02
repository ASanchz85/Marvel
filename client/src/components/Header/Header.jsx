import { HeartFull } from '../../components'
import './header.css'

function Header () {
  return (
    <header className='header'>
      <img src='/Marvel logo.svg' alt='Marvel logo' />
      <div className='header__favourite'>
        <HeartFull />
        <span>3</span>
      </div>
    </header>
  )
}

export default Header
