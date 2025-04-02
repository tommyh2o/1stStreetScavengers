// src/components/Cart/Cart.jsx
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../context/CartContext";
import "./Cart.css";

const Cart = ({ isOpen, toggleCart }) => {
  const { cartItems, removeFromCart } = useContext(CartContext);
  
  // Calculate cart total
  const cartTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  
  if (!isOpen) return null;
  
  return (
    <div className="cart-overlay">
      <div className="cart-container">
        <div className="cart-header">
          <h3>Shopping Cart</h3>
          <button className="close-cart" onClick={toggleCart}>×</button>
        </div>
        
        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <p>Your cart is empty</p>
            <Link to="/shop" onClick={toggleCart} className="continue-shopping">
              Continue Shopping
            </Link>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cartItems.map(item => (
                <div key={item.id} className="cart-item">
                  <div className="item-image">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="item-details">
                    <h4>{item.name}</h4>
                    {item.size && <p className="item-size">Size: {item.size}</p>}
                    <p className="item-price">${item.price.toFixed(2)}</p>
                    <p className="item-unique">One-of-a-kind item</p>
                  </div>
                  <button 
                    className="remove-item" 
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
            <div className="cart-summary">
              <div className="cart-total">
                <span>Total:</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
              <div className="cart-actions">
                <button className="checkout-btn">Proceed to Checkout</button>
                <button className="continue-btn" onClick={toggleCart}>
                  Continue Shopping
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;