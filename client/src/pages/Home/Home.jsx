import { Link } from 'react-router-dom'
import { Card, LoadingBar, SearchingBar } from '../../components'
import { useSearchingContext } from '../../context/useSearchingContext'
import { useFetch } from '../../hooks/useFetch'
import './home.css'

const apiUrl = import.meta.env.VITE_REACT_APP_API_CHARACTER_URL

function Home () {
  const { search } = useSearchingContext()
  let dataToDisplay

  if (search) {
    const { data: searchResult } = useFetch(`${apiUrl}search?q=${search}`)
    dataToDisplay = searchResult?.data.results
  } else {
    const { data } = useFetch(`${apiUrl}`)
    dataToDisplay = data?.data.results
  }

  if (!dataToDisplay) {
    return (
      <>
        <LoadingBar />
        <SearchingBar />
      </>
    )
  }

  return (
    <>
      <SearchingBar results={dataToDisplay?.length} />
      <section className='cardgrid__container'>
        {dataToDisplay?.map((item) => (
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

export default Home
