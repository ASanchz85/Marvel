import { Link } from 'react-router-dom'
import { Card, SearchingBar } from '../../components'
import './home.css'

function Home ({ shownFavorites = false }) {
  return (
    <>
      {shownFavorites && <h2>Favorites</h2>}
      <SearchingBar />
      <section className='cardgrid__container'>
        <Link to='info/:id'>
          <Card />
        </Link>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
    </>
  )
}

export default Home
