// src/components/FilterSidebar/FilterSidebar.jsx
import React from 'react';
import { sizes, categories } from '../../data/products';
import './FilterSidebar.css';

const FilterSidebar = ({ filters, onFilterChange }) => {
  const handleSizeChange = (e) => {
    onFilterChange({ size: e.target.value });
  };

  const handleCategoryChange = (e) => {
    onFilterChange({ category: e.target.value });
  };

  const handlePriceChange = (e) => {
    const { name, value } = e.target;
    onFilterChange({ [name]: parseFloat(value) });
  };

  return (
    <div className="filter-sidebar">
      <div className="filter-section">
        <h3>Filters</h3>
        <div className="filter-group">
          <h4>Size</h4>
          <select 
            value={filters.size} 
            onChange={handleSizeChange}
            className="filter-select"
          >
            {sizes.map(size => (
              <option key={size} value={size}>{size}</option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <h4>Category</h4>
          <select 
            value={filters.category} 
            onChange={handleCategoryChange}
            className="filter-select"
          >
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <h4>Price Range</h4>
          <div className="price-inputs">
            <div className="price-input">
              <label>Min $</label>
              <input 
                type="number" 
                name="minPrice" 
                value={filters.minPrice} 
                onChange={handlePriceChange}
                min="0"
              />
            </div>
            <div className="price-input">
              <label>Max $</label>
              <input 
                type="number" 
                name="maxPrice" 
                value={filters.maxPrice} 
                onChange={handlePriceChange}
                min="0"
              />
            </div>
          </div>
        </div>
        
        <button className="clear-filters">Clear All Filters</button>
      </div>
    </div>
  );
};

export default FilterSidebar;