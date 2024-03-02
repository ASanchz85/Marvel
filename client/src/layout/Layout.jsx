import { Outlet } from 'react-router-dom'
import { Header } from '../components'
import './layout.css'

function Layout () {
  return (
    <main>
      <Header />
      <section className='container'>
        <Outlet />
      </section>
    </main>
  )
}

export default Layout
