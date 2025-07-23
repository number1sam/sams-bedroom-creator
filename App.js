import React, { useState } from 'react';
import './App.css';
import DesignGame from './DesignGame.js';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  if (currentPage === 'design') {
    return <DesignGame onBack={() => setCurrentPage('home')} />;
  }

  return (
    <div className="bedroom-container">
      <header className="bedroom-header">
        <h1>Jake's Awesome Bedroom</h1>
        <button 
          className="create-button"
          onClick={() => setCurrentPage('design')}
        >
          🎮 Create Your Own Room!
        </button>
      </header>
      
      <main className="bedroom-layout">
        <div className="room-section">
          <div className="bed-area">
            <div className="bed">
              <div className="pillow"></div>
              <div className="blanket"></div>
            </div>
            <p className="item-label">Super comfortable bed with space-themed sheets!</p>
          </div>
          
          <div className="desk-area">
            <div className="desk">
              <div className="computer"></div>
              <div className="books"></div>
            </div>
            <p className="item-label">Study desk with gaming computer and favorite books</p>
          </div>
          
          <div className="play-area">
            <div className="toy-chest">
              <div className="lego-box"></div>
              <div className="action-figures"></div>
            </div>
            <p className="item-label">Toy chest filled with LEGOs and superhero figures</p>
          </div>
          
          <div className="sports-corner">
            <div className="basketball"></div>
            <div className="soccer-ball"></div>
            <div className="trophy"></div>
            <p className="item-label">Sports equipment and achievement trophies</p>
          </div>
        </div>
        
        <div className="wall-decorations">
          <div className="poster poster1">🚀 Space Explorer</div>
          <div className="poster poster2">⚽ Soccer Champion</div>
          <div className="poster poster3">🦸‍♂️ Superhero Squad</div>
        </div>
      </main>
      
      <footer className="bedroom-footer">
        <p>Designed with React for the coolest 11-year-old!</p>
      </footer>
    </div>
  );
}

export default App;