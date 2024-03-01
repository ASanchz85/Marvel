import { createBrowserRouter, createHashRouter } from 'react-router-dom'
import commonRoutes from './routes/common-routes'

let router

if (import.meta.env.ROUTER_TYPE === 'hash') {
  router = createHashRouter([...commonRoutes])
} else {
  router = createBrowserRouter([...commonRoutes])
}

export default router
