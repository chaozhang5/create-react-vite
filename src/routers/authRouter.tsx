import { useLocation } from 'react-router-dom'
import { UserStore } from '@/global-states'
import { rootRouter } from '@/routers/index'

const AuthRouter = (props: { children: JSX.Element }) => {
  const { pathname } = useLocation()
  const route = searchRoute(pathname, rootRouter)

  // 判断当前路由是否需要访问权限(不需要权限直接放行)
  if (!route.meta?.requiresAuth) return props.children

  // 判断是否有Token，无token跳转登陆
  const token = UserStore.getToken()
  if (!token) {
    // return <Navigate to="/login" replace />
  }

  // 当前账号有权限返回 Router，正常访问页面
  return props.children
}

const searchRoute = (path: string, routes: any) => {
  let result = {}
  for (const item of routes) {
    if (item.path === path) return item
    if (item.children) {
      const res = searchRoute(path, item.children)
      if (Object.keys(res).length) result = res
    }
  }
  return result
}

export default AuthRouter
