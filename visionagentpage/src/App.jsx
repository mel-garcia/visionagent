import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import About from './About';
import './App.css';

function App() {
  const [text, setText] = useState(''); // State for the text input
  const [paragraphs, setParagraphs] = useState([]); // State for generated paragraphs

  const handleClick = () => {
    // Generate multiple paragraphs based on the input text
    if (text.trim()) {
      const newParagraphs = Array(3).fill(`Generated content for: ${text}`);
      setParagraphs(newParagraphs);
    } else {
      setParagraphs(['Please enter valid text.']);
    }
  };

  return (
    <Router>
      <div className="app-container">
        <Header />

        <main className="main-content">
          <Routes>
            <Route
              path="/"
              element={
                <div>
                  <h1>Enter URL Here!</h1>
                  <div className="input-section">
                    <input
                      name="myInput"
                      placeholder="Type something..."
                      value={text}
                      onChange={(e) => setText(e.target.value)}
                      style={{ padding: '5px', borderRadius: '4px', border: '1px solid #ccc' }}
                    />
                    <button
                      onClick={handleClick}
                      style={{ marginLeft: '10px', padding: '5px 10px', cursor: 'pointer', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px' }}
                    >
                      Click Me
                    </button>
                    <p>It'll Summarize Your Website</p>
                  </div>

                  <div className="output-section" style={{ marginTop: '20px', color: 'grey' }}>
                    {paragraphs.map((para, index) => (
                      <p key={index}>{para}</p>
                    ))}
                  </div>
                </div>
              }
            />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;