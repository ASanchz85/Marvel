import { Outlet } from 'react-router-dom'
import { Header } from '../components'
import './layout.css'

function Layout () {
  return (
    <>
      <Header />
      <main className='container'>
        <Outlet />
      </main>
    </>
  )
}

export default Layout
