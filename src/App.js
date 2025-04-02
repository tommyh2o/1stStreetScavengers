// src/App.jsx
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home/Home";
import ProductListing from "./pages/ProductListing/ProductListing";
import Contact from "./pages/Contact/Contact";
import CartContext from "./context/CartContext";
import Cart from "./components/Cart/Cart";
import CartButton from "./components/CartButton/CartButton";
import "./App.css";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Toggle cart visibility
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  // Add item to cart - modified to limit to one per item
  const addToCart = (product) => {
    // Check if the item is already in the cart
    const existingItem = cartItems.find((item) => item.id === product.id);

    if (existingItem) {
      // For thrifted items, we often only have one of each item
      // so we'll show an alert instead of increasing quantity
      alert("This item is already in your cart. Each thrifted item is unique and limited to one per customer.");
      return;
    } else {
      // If item doesn't exist, add it with quantity 1
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  // Remove item from cart
  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  };

  // Update item quantity - modified to respect the limit
  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
      return;
    }

    // Enforce maximum quantity of 1 for thrifted items
    if (newQuantity > 1) {
      alert("Each thrifted item is unique and limited to one per customer.");
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
                <CartButton toggleCart={toggleCart} cartCount={cartCount} />
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

          {/* Cart Component */}
          <Cart isOpen={isCartOpen} toggleCart={toggleCart} />

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