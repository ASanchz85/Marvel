import { useParams } from 'react-router-dom'
import { HeroInfo, LinkedComics, LoadingBar } from '../../components'
import { useFetch } from '../../hooks/useFetch'
import { useFavoriteContext } from '../../context/useFavoriteContext'

const apiUrl = import.meta.env.VITE_REACT_APP_API_CHARACTER_URL

function Details () {
  const { favorites } = useFavoriteContext()
  const { id } = useParams()
  let characterData

  if (favorites.some((favorite) => favorite.id === Number(id))) {
    characterData = favorites.find((favorite) => favorite.id === Number(id))
  } else {
    const { data } = useFetch(`${apiUrl}${id}`)
    characterData = data
  }

  if (!characterData) {
    return <LoadingBar />
  }

  const { comics } = characterData

  return (
    <>
      <HeroInfo characterData={characterData} />
      <LinkedComics comics={comics} />
    </>
  )
}

export default Details
