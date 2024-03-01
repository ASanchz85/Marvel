import './header.css'

function Header () {
  return (
    <header className='header'>
      <img src='/Marvel logo.svg' alt='Marvel logo' />
      <div className='header__favourite'>
        <img src='/State=Default.svg' alt='Favourite icon' />
        <span>0</span>
      </div>
    </header>
  )
}

export default Header
