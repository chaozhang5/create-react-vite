import './style.scss'
import { FC, memo } from 'react'
import reactLogo from '@/assets/react.svg'
import viteLogo from '@/assets/vite.svg'

const Index: FC = () => {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + TS</h1>
      <div className="card">
        {/* <button onClick={() => {}}>count is 2</button> */}
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  )
}

export default memo(Index)
