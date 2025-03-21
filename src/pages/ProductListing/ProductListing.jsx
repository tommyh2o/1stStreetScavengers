// src/pages/ProductListing/ProductListing.jsx
import React, { useState } from 'react';
import ProductGrid from '../../components/ProductGrid/ProductGrid';
import FilterSidebar from '../../components/FilterSidebar/FilterSidebar';
import './ProductListing.css';

import { products } from '../../data/products';

const ProductListing = () => {
  const [filters, setFilters] = useState({
    size: 'All',
    minPrice: 0,
    maxPrice: 1000,
    category: 'All'
  });

  const handleFilterChange = (newFilters) => {
    setFilters({ ...filters, ...newFilters });
  };

  return (
    <div className="product-listing-page">
      <div className="container">
        <h1 className="page-title">First Street Scavengers Collection</h1>
        <div className="product-listing-content">
          <FilterSidebar filters={filters} onFilterChange={handleFilterChange} />
          <div className="product-listing-main">
            <div className="product-count">
              Showing {products.length} items
            </div>
            <ProductGrid products={products} filters={filters} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductListing;