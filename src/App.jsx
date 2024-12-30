import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <header>
        <nav>
          <ul>
            <li><a href="#ensayo">Ensayo</a></li>
            <li><a href="#poesia">Poesía</a></li>
            <li><a href="#posdata">Posdata</a></li>
          </ul>
        </nav>
      </header>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Arteria</h1>
      <div className="card">  
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Probando cambios
      </p>
      <footer>
        <h2>Arteria</h2>
      </footer>
    </>
  )
}

export default App
