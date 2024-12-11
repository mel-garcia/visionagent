import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import Header from './Header';
import Footer from './Footer';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
                <Header />
  {/* Images
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
     </a>
      </div>*/} 
      
      <h1>Enter URL Here!</h1> <br></br>
      <p>It'll Summarize Your Website</p>

      <input name="myInput" />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

      </div>

      <Footer />

    </>
  )
}

export default App
