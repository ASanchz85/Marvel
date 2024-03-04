import { Link } from 'react-router-dom'
import { Card, SearchingBar } from '../../components'
import { useFavoriteContext } from '../../context/useFavoriteContext'
import './favorites.css'

function Favorites () {
  const { favorites, favoritesCount, favoritesSearch } = useFavoriteContext()

  return (
    <>
      <SearchingBar
        results={favoritesCount}
        isFavorite
      />
      <section className='cardgrid__container'>
        {favoritesSearch
          ? favoritesSearch?.map((item) => (
            <Link
              to={`/info/${item.id}`}
              key={item.id}
            >
              <Card {...item} />
            </Link>
          ))
          : favorites?.map((item) => (
            <Link
              to={`/info/${item.id}`}
              key={item.id}
            >
              <Card {...item} />
            </Link>
          ))}
      </section>
    </>
  )
}

export default Favorites
