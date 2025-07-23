import React, { useState, useRef } from 'react';
import './DesignGame.css';

const BEDROOM_ITEMS = [
  { id: 'bed', name: 'Bed', emoji: '🛏️', width: 80, height: 60, color: '#8B4513' },
  { id: 'desk', name: 'Desk', emoji: '🪑', width: 60, height: 40, color: '#D2B48C' },
  { id: 'bookshelf', name: 'Bookshelf', emoji: '📚', width: 40, height: 80, color: '#654321' },
  { id: 'dresser', name: 'Dresser', emoji: '🗄️', width: 50, height: 50, color: '#8B7355' },
  { id: 'computer', name: 'Computer', emoji: '💻', width: 30, height: 25, color: '#2c3e50' },
  { id: 'lamp', name: 'Lamp', emoji: '💡', width: 20, height: 40, color: '#F4A460' },
  { id: 'plant', name: 'Plant', emoji: '🪴', width: 25, height: 35, color: '#228B22' },
  { id: 'basketball', name: 'Basketball', emoji: '🏀', width: 25, height: 25, color: '#FF8C00' },
  { id: 'guitar', name: 'Guitar', emoji: '🎸', width: 30, height: 70, color: '#8B4513' },
  { id: 'rug', name: 'Rug', emoji: '🧸', width: 100, height: 60, color: '#DC143C' }
];

function DesignGame({ onBack }) {
  const [placedItems, setPlacedItems] = useState([]);
  const [draggedItem, setDraggedItem] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const roomRef = useRef(null);

  const handleDragStart = (item) => {
    setDraggedItem(item);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    if (!draggedItem || !roomRef.current) return;

    const rect = roomRef.current.getBoundingClientRect();
    const x = event.clientX - rect.left - draggedItem.width / 2;
    const y = event.clientY - rect.top - draggedItem.height / 2;

    const newItem = {
      ...draggedItem,
      id: `${draggedItem.id}_${Date.now()}`,
      x: Math.max(0, Math.min(x, rect.width - draggedItem.width)),
      y: Math.max(0, Math.min(y, rect.height - draggedItem.height))
    };

    setPlacedItems([...placedItems, newItem]);
    setDraggedItem(null);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const removeItem = (itemId) => {
    setPlacedItems(placedItems.filter(item => item.id !== itemId));
    setSelectedItem(null);
  };

  const clearRoom = () => {
    setPlacedItems([]);
    setSelectedItem(null);
  };

  return (
    <div className="design-game-container">
      <header className="design-header">
        <button className="back-button" onClick={onBack}>← Back to Jake's Room</button>
        <h1>🎨 Design Your Dream Bedroom!</h1>
        <button className="clear-button" onClick={clearRoom}>🗑️ Clear Room</button>
      </header>

      <div className="game-layout">
        <div className="item-palette">
          <h3>Drag Items to Your Room!</h3>
          <div className="items-grid">
            {BEDROOM_ITEMS.map(item => (
              <div
                key={item.id}
                className="palette-item"
                draggable
                onDragStart={() => handleDragStart(item)}
              >
                <div className="item-icon">{item.emoji}</div>
                <span className="item-name">{item.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div 
          className="room-canvas"
          ref={roomRef}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        >
          <div className="room-background">
            <div className="floor"></div>
            <div className="wall-left"></div>
            <div className="wall-back"></div>
          </div>
          
          {placedItems.map(item => (
            <div
              key={item.id}
              className={`placed-item ${selectedItem === item.id ? 'selected' : ''}`}
              style={{
                left: item.x,
                top: item.y,
                width: item.width,
                height: item.height,
                backgroundColor: item.color
              }}
              onClick={() => setSelectedItem(item.id)}
            >
              <span className="placed-item-emoji">{item.emoji}</span>
              {selectedItem === item.id && (
                <button 
                  className="remove-button"
                  onClick={(e) => {
                    e.stopPropagation();
                    removeItem(item.id);
                  }}
                >
                  ✕
                </button>
              )}
            </div>
          ))}
          
          {placedItems.length === 0 && (
            <div className="empty-room-message">
              <p>🏠 Your room is empty!</p>
              <p>Drag items from the left to create your perfect bedroom!</p>
            </div>
          )}
        </div>
      </div>

      <div className="game-stats">
        <p>Items placed: {placedItems.length}</p>
        <p>💡 Tip: Click on placed items to remove them!</p>
      </div>
    </div>
  );
}

export default DesignGame;