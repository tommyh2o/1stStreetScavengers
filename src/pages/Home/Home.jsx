// src/pages/Home/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>First Street Scavengers</h1>
            <p className="hero-subtitle">Discover unique, sustainable fashion finds</p>
            <p className="hero-description">
              We're a community of thrift enthusiasts dedicated to giving second-hand clothing a new life.
              Each piece in our collection is carefully selected for quality and style.
            </p>
            <Link to="/shop" className="cta-button">Shop Collection</Link>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="featured-categories">
        <div className="container">
          <h2 className="section-title">Shop Categories</h2>
          <div className="categories-grid">
            <div className="category-card">
              <div className="category-image">
                <img src="./images/HomePageImages/top.jpg" alt="Vintage Tops" />
              </div>
              <h3>Tops</h3>
              <Link to="/shop?category=Tops" className="category-link">Explore</Link>
            </div>
            <div className="category-card">
              <div className="category-image">
                <img src="./images/HomePageImages/bottoms.jpg" alt="Denim" />
              </div>
              <h3>Bottoms</h3>
              <Link to="/shop?category=Pants" className="category-link">Explore</Link>
            </div>
            <div className="category-card">
              <div className="category-image">
                <img src="./images/HomePageImages/outerwear.jpg" alt="Outerwear" />
              </div>
              <h3>Outerwear</h3>
              <Link to="/shop?category=Jackets" className="category-link">Explore</Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="about-section">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2 className="section-title">About First Street Scavengers</h2>
              <p>
                First Street Scavengers was founded in 2024 by a group of friends who share a passion for sustainable fashion and thrifting.
                What started as weekend trips to local thrift stores quickly grew into a community of like-minded individuals looking to reduce fashion waste.
              </p>
              <p>
                Our mission is to promote sustainable fashion by giving pre-loved clothing items a second life. 
                We carefully curate each piece in our collection to ensure quality, style, and uniqueness.
              </p>
              <p>
                All proceeds support our community initiatives, including clothing drives and workshops on sustainable fashion.
              </p>
            </div>
            <div className="about-image">
              <img src='./images/HomePageImages/ourTeam.jpg' alt="Our Team" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-products">
        <div className="container">
          <h2 className="section-title">Featured Finds</h2>
          <p className="section-subtitle">Check out our latest and most popular thrift finds</p>
          {/* This would be a component that displays a few featured products */}
          <div className="featured-grid">
            {/* We'll pull this data from our products.js file */}
          </div>
          <div className="view-all-container">
            <Link to="/shop" className="view-all-button">View All Products</Link>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="newsletter">
        <div className="container">
          <div className="newsletter-content">
            <h2>Join Our Community</h2>
            <p>Subscribe to our newsletter to get updates on new arrivals and exclusive offers.</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Your email address" required />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;