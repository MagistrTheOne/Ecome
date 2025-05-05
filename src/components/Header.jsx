import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header-title">Twico Express</h1>
        <div className="search-bar">
          <input type="text" placeholder="Enter your product name..." className="search-input" />
          <button className="search-btn">Search</button>
        </div>
        <div className="header-icons">
          <span className="icon">❤️</span>
          <span className="icon">🛒</span>
        </div>
      </div>
    </header>
  );
};

export default Header;