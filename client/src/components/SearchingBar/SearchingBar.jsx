import { MagnifyingLens } from '../../components'
import './searchingBar.css'

function SearchingBar () {
  return (
    <section className='searchingbar__container'>
      <div className='searchingbar__item'>
        <MagnifyingLens />
        <input
          type='text'
          placeholder='Search a character...'
          className='searchingbar__input'
        />
      </div>
      <span className='searchingbar__results'>50 results</span>
    </section>
  )
}

export default SearchingBar
