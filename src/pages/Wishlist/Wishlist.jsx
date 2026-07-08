import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import ProductCard from '../../components/ProductCard/ProductCard';

const Wishlist = () => {
  const { wishlist } = useContext(CartContext);

  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <h2>My Wishlist</h2>
      {wishlist.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '5rem 0' }}>
          <h3>Your wishlist is empty.</h3>
          <Link to="/products" style={{ color: 'blue', textDecoration: 'underline' }}>Browse Products</Link>
        </div>
      ) : (
        <div className="products-grid">
          {wishlist.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
