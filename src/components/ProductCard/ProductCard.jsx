// src/components/ProductCard/ProductCard.jsx
import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const { id, name, price, size, image, description } = product;

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={image} alt={name} />
        <div className="product-hover">
          <button className="add-to-cart">Add to Cart</button>
          <button className="view-details">View Details</button>
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