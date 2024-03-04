import { Carousel } from '../../../components'
import './linkedComics.css'

function LinkedComics ({ comics }) {
  return (
    <section className='comics__container'>
      <div className='comic__details'>
        <h2>{`Comics (${comics ? comics?.length : 'N/A'})`}</h2>
        <Carousel comics={comics} />
      </div>
    </section>
  )
}

export default LinkedComics
