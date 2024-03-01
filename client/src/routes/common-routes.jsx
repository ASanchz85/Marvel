import Layout from '../layout/Layout'
import { Home, Info, Favourites } from '../views'

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
        path: '/favourites',
        element: <Favourites />
      }
    ]
  }
]

export default commonRoutes
