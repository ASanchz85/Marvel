import { Card, SearchingBar } from '../../components'
import './home.css'

function Home () {
  return (
    <>
      <h2>Favourites</h2>
      <SearchingBar />
      <section className='container__cardgrid'>
        <Card />
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
