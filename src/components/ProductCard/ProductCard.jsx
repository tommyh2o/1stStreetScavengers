// src/components/ProductCard/ProductCard.jsx
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../../context/CartContext';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const { id, name, price, size, image, description } = product;
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(product);
    // Optional: Show a confirmation toast/message
  };

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={image} alt={name} />
        <div className="product-hover">
          <button className="add-to-cart" onClick={handleAddToCart}>Add to Cart</button>
          <Link to={`/shop/product/${id}`} className="view-details">View Details</Link>
        </div>
      </div>
      <div className="product-info">
        <h3 className="product-name">{name}</h3>
        <div className="product-details">
          <span className="product-size">Size: {size}</span>
          <span className="product-price">${price.toFixed(2)}</span>
        </div>
        <p className="product-description">{description}</p>
      </div>
    </div>
  );
};

export default ProductCard;