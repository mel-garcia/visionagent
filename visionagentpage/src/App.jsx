import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import Header from './Header';
import Footer from './Footer';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const [message, setMessage] = useState(''); // State to control the message below the input

  const handleClick = () => {
    setMessage('submit'); // Set the message to "submit" when the button is clicked
  };

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


      <input name="myInput" placeholder="Type something..." />
      <button
        onClick={handleClick}
        style={{ marginLeft: '10px', padding: '5px 10px', cursor: 'pointer' }}
      >
        Click Me
      </button>
      <div style={{ marginTop: '10px', color: 'blue' }}>
        {message} {/* Display the message below the input */}
      </div>


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
