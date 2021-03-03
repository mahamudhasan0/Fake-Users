import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="Header">
      <div className="container">
        <nav className="navbar">
          <a href="/timeline">Timeline</a>
          <a href="/about">About</a>
          <a href="/">Friends</a>
          <a href="/flowers">Flowers</a>
        </nav>
      </div>
    </div>
  );
};

export default Header;
