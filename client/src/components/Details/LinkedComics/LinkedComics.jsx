import { Carousel } from '../../../components'
import './linkedComics.css'

function LinkedComics () {
  return (
    <section className='comics__container'>
      <div className='comic__details'>
        <h2>Comics</h2>
        <Carousel />
      </div>
    </section>
  )
}

export default LinkedComics
