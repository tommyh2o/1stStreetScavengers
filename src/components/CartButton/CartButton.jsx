// src/components/CartButton/CartButton.jsx
import React from "react";
import "./CartButton.css";

const CartButton = ({ toggleCart, cartCount }) => {
  return (
    <button className="cart-btn" onClick={toggleCart}>
      <span className="cart-icon">🛒</span>
      <span className="cart-count">{cartCount}</span>
    </button>
  );
};

export default CartButton;