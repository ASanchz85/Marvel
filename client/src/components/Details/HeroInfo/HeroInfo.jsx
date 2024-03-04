import { HeartEmpty, HeartFull } from '../../../components'
import { useFavoriteContext } from '../../../context/useFavoriteContext'
import './heroInfo.css'

function HeroInfo ({ characterData }) {
  const { id, name, description, thumbnail } = characterData
  const { favorites, addFavorite, removeFavorite } = useFavoriteContext()

  const isFavorite = favorites.some((favorite) => favorite.id === id)

  const toggleFavorite = () => {
    if (isFavorite) {
      removeFavorite(id)
    } else {
      addFavorite({ ...characterData })
    }
  }

  return (
    <article className='hero__container'>
      <div className='hero__details'>
        <div className='hero__details--img'>
          <img
            src={`${thumbnail.path}.${thumbnail.extension}`}
            alt='placeholder'
          />
        </div>
        <div className='hero__details--info'>
          <div className='hero__details--title'>
            <h1>{name}</h1>
            <div
              className='hero__details--favourite'
              onClick={toggleFavorite}
            >
              {isFavorite ? <HeartFull /> : <HeartEmpty />}
            </div>
          </div>
          <div className='hero__details--description'>
            {description
              ? (
                <p>{description}</p>
                )
              : (
                <p>No description available</p>
                )}
          </div>
        </div>
      </div>
    </article>
  )
}

export default HeroInfo
