import { useState } from 'react'
import { HeartEmpty, HeartFull } from '../../components'
import { useFavoriteContext } from '../../context/useFavoriteContext'
import './card.css'

function Card ({ id, name, thumbnail }) {
  const [slideOutAnimation, setSlideOutAnimation] = useState(false)
  const [fillColor, setFillCetcolor] = useState('red')
  const { favorites } = useFavoriteContext()

  const isFavorite = favorites.some((favorite) => favorite.id === id)

  const handleSlideOut = () => {
    setSlideOutAnimation(true)
  }

  return (
    <article
      className={`card ${slideOutAnimation ? 'card--slideOut' : ''}`}
      onMouseOver={handleSlideOut}
      onMouseEnter={() => setFillCetcolor('white')}
      onMouseLeave={() => setFillCetcolor('red')}
    >
      <div className='card__img'>
        <img
          src={`${thumbnail.path}.${thumbnail.extension}`}
          alt='placeholder'
        />
      </div>
      <div className='card__content'>
        <h4>{name}</h4>
        {isFavorite
          ? (
            <HeartFull
              width='16'
              height='15'
              fill={fillColor}
            />
            )
          : (
            <HeartEmpty
              width='16'
              height='15'
            />
            )}
      </div>
    </article>
  )
}

export default Card
