import { Navigate, useRoutes } from 'react-router-dom'
import Index from '@/views/index'

export const rootRouter = [
  {
    path: '/index',
    element: <Index />,
    meta: {
      requiresAuth: true,
      title: '首页'
    }
  },
  {
    path: '*',
    element: <Navigate to="/index" />
  }
]

const Router = () => {
  const routes = useRoutes(rootRouter)
  return routes
}

export default Router
