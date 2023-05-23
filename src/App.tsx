import './App.scss'
import { ConfigProvider } from 'antd'
import { Suspense } from 'react'
import { HashRouter } from 'react-router-dom'
import AuthRouter from '@/routers/authRouter'
import Router from '@/routers/index'

const App = () => {
  return (
    <HashRouter>
      <ConfigProvider>
        <AuthRouter>
          <Suspense>
            <Router />
          </Suspense>
        </AuthRouter>
      </ConfigProvider>
    </HashRouter>
  )
}
export default App
