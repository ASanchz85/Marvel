import Layout from '../layout/Layout'
import { Favorites, Home, Info } from '../pages'

const commonRoutes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/info/:id',
        element: <Info />
      },
      {
        path: '/favorites',
        element: <Favorites />
      }
    ]
  }
]

export default commonRoutes
