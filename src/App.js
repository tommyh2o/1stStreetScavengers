// src/App.jsx
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home/Home";
import ProductListing from "./pages/ProductListing/ProductListing";
import Contact from "./pages/Contact/Contact";
import CartContext from "./context/CartContext";
import "./App.css";

function App() {
  const [cartItems, setCartItems] = useState([]);

  // Add item to cart
  const addToCart = (product) => {
    // Check if the item is already in the cart
    const existingItem = cartItems.find((item) => item.id === product.id);

    if (existingItem) {
      // If item exists, increase quantity
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      // If item doesn't exist, add it with quantity 1
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  // Remove item from cart
  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  };

  // Update item quantity
  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
      return;
    }

    setCartItems(
      cartItems.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Calculate total number of items in cart
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, updateQuantity }}
    >
      <Router>
        <div className="App">
          <header className="main-header">
            <div className="container">
              <div className="logo">
                <Link to="/">
                  <h1>First Street Scavengers</h1>
                </Link>
              </div>
              <nav className="main-nav">
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/shop">Shop</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </nav>
              <div className="header-actions">
                <button className="cart-btn">
                  <span className="cart-icon">🛒</span>
                  <span className="cart-count">{cartCount}</span>
                </button>
              </div>
            </div>
          </header>

          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<ProductListing />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>

          <footer className="main-footer">
            <div className="container">
              <div className="footer-section">
                <h3>First Street Scavengers</h3>
                <p>Your go-to destination for unique thrifted fashion finds.</p>
              </div>
              <div className="footer-content">
                <div className="footer-section">
                  <h3>Quick Links</h3>
                  <ul>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/shop">Shop</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact</Link>
                    </li>
                  </ul>
                </div>
                <div className="footer-section">
                  <h3>Contact Us</h3>
                  <p>Email: info@firststreetscavengers.com</p>
                  <p>Phone: (555) 123-4567</p>
                </div>
              </div>
              <div className="footer-bottom">
                <p>
                  &copy; {new Date().getFullYear()} First Street Scavengers. All
                  rights reserved.
                </p>
              </div>
            </div>
          </footer>
        </div>
      </Router>
    </CartContext.Provider>
  );
}

export default App;
