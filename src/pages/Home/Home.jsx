import React, { useContext } from 'react';
import './Home.css';
import { ProductContext } from '../../context/ProductContext';
import ProductCard from '../../components/ProductCard/ProductCard';
import { Link } from 'react-router-dom';

const Home = () => {
  const { products } = useContext(ProductContext);

  return (
    <div className="home-container">

      {/* 🌟 HERO BANNER */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Welcome to E-Store</h1>
          <p>Discover amazing products at unbeatable prices</p>

          <div className="hero-buttons">
            <Link to="/products" className="btn-home">Shop Now</Link>
            {/* <Link to="/products" className="btn secondary">Explore Deals</Link> */}
          </div>
        </div>
      </section>

      {/* ⭐ FEATURED TITLE */}
      <h2 className="section-title">Featured Products</h2>

      {/* 🛒 PRODUCTS */}
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;