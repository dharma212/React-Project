import React, { useContext } from 'react';
import './Home.css';
import { ProductContext } from '../../context/ProductContext';
import ProductCard from '../../components/ProductCard/ProductCard';
import { Link } from 'react-router-dom';
import ProductCardSkeleton from '../../components/skeletons/ProductCardSkeleton';
import HeroSkeleton from '../../components/skeletons/HeroSkeleton';
import Skeleton from "react-loading-skeleton";
const Home = () => {
  const { products, loading } = useContext(ProductContext);

  return (
    <div className="home-container">

      {/* 🌟 HERO BANNER */}
      {loading ? (
        <HeroSkeleton />
      ) : (
        <section className="hero-section">
          <div className="hero-content">
            <h1>Welcome to E-Store</h1>
            <p>Discover amazing products at unbeatable prices</p>

            <div className="hero-buttons">
              <Link to="/products" className="btn-home">
                Shop Now
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ⭐ FEATURED TITLE */}
      {loading ? (
        <Skeleton width={250} height={40} />
      ) : (
        <h2 className="section-title">Featured Products</h2>
      )}
      {/* 🛒 PRODUCTS */}
      <div className="product-grid">
        {loading
          ? Array(8)
            .fill()
            .map((_, index) => (
              <ProductCardSkeleton key={index} />
            ))
          : products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default Home;