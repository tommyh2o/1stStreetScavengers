// src/App.jsx
import React from 'react';
import ProductListing from './pages/ProductListing/ProductListing';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="main-header">
        <div className="container">
          <div className="logo">
            <h1>First Street Scavengers</h1>
          </div>
          <nav className="main-nav">
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/shop" className="active">Shop</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </nav>
          <div className="header-actions">
            <button className="cart-btn">
              <span className="cart-icon">🛒</span>
              <span className="cart-count">0</span>
            </button>
          </div>
        </div>
      </header>

      <main>
        <ProductListing />
      </main>

      <footer className="main-footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>First Street Scavengers</h3>
              <p>Your go-to destination for unique thrifted fashion finds.</p>
            </div>
            <div className="footer-section">
              <h3>Quick Links</h3>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/shop">Shop</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Contact Us</h3>
              <p>Email: info@firststreetscavengers.com</p>
              <p>Phone: (555) 123-4567</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} First Street Scavengers. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;