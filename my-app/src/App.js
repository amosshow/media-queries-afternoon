import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App" className="image-section">
      <header className="App-header" className="container">
       <p>Start Bootstrap</p>
       <nav className="nav">
            <ul className="nav-list">
              <li className="nav-list-item">Service</li>
              <li className="nav-list-item">Portfolio</li>
              <li className="nav-list-item">Account</li>
              <li className="nav-list-item">Team</li>
              <li className="nav-list-item">Contact</li>
            </ul>
          </nav>
      </header>
      <div>
        <h2>Welcome to our studio!</h2>
        <h1>It's nice to meet you</h1>
        <button>Tell me more</button>
      </div>
    </div>
  );
}

export default App;
