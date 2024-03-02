import { useState } from 'react'
import { HeartEmpty } from '../../components'
import './card.css'

function Card () {
  const [slideOutAnimation, setSlideOutAnimation] = useState(false)

  const handleSlideOut = () => {
    setSlideOutAnimation(true)
  }

  return (
    <article
      className={`card ${slideOutAnimation ? 'card--slideOut' : ''}`}
      onMouseOver={handleSlideOut}
    >
      <div className='card__img'>
        <img
          src='https://via.placeholder.com/150'
          alt='placeholder'
        />
      </div>
      <div className='card__content'>
        <h4>Card Title</h4>
        <HeartEmpty width='16' height='15' />
      </div>
    </article>
  )
}

export default Card
