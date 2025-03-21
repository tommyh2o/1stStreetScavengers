// src/components/ProductGrid/ProductGrid.jsx
import React, { useState, useEffect } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './ProductGrid.css';

const ProductGrid = ({ products, filters }) => {
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    // Apply filters
    let result = [...products];
    
    if (filters) {
      // Filter by size if specified
      if (filters.size && filters.size !== 'All') {
        result = result.filter(product => product.size === filters.size);
      }
      
      // Filter by price range if specified
      if (filters.minPrice !== undefined) {
        result = result.filter(product => product.price >= filters.minPrice);
      }
      if (filters.maxPrice !== undefined) {
        result = result.filter(product => product.price <= filters.maxPrice);
      }
      
      // Filter by category if specified
      if (filters.category && filters.category !== 'All') {
        result = result.filter(product => product.category === filters.category);
      }
    }
    
    setFilteredProducts(result);
  }, [products, filters]);

  return (
    <div className="product-grid">
      {filteredProducts.length > 0 ? (
        filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))
      ) : (
        <div className="no-products">No products match your filters.</div>
      )}
    </div>
  );
};

export default ProductGrid;