import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import About from './About';
import './App.css';

function App() {
  const URL = "http://localhost:8000/summarize"; // Replace with the actual API endpoint

  const [text, setText] = useState(''); // State for the text input
  const [summary, setSummary] = useState(''); // State for the summarized text
  const [error, setError] = useState(''); // State for any error messages

  const handleClick = async () => {
    if (text.trim()) {
      try {
        const response = await fetch(URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ url: text }),
        });

        if (response.ok) {
          const data = await response.json();
          setSummary(data.text); // Assuming the API returns { text: "summary here" }
          setError('');
        } else {
          setError('Failed to fetch summary. Please try again.');
        }
      } catch (error) {
        setError('An error occurred. Please check the console for more details.');
        console.error(error);
      }
    } else {
      setError('Please enter a valid URL.');
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
                      placeholder="Type a URL..."
                      value={text}
                      onChange={(e) => setText(e.target.value)}
                    />
                    <button onClick={handleClick}>
                      Summarize
                    </button>
                    <p>It'll Summarize Your Website</p>
                  </div>

                  <div className="output-section" style={{ marginTop: '20px', color: 'grey' }}>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    {summary && <p>{summary}</p>}
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
