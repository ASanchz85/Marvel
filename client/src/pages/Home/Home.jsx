import { Card, SearchingBar } from '../../components'
import './home.css'

function Home () {
  return (
    <>
      <SearchingBar />
      <section className='cardgrid__container'>
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
