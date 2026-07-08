import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { AuthContext } from '../../context/AuthContext';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const { addToCart, toggleWishlist, wishlist } = useContext(CartContext);
  const { currentUser } = useContext(AuthContext);

  // Check if product is in wishlist
  const isWishlisted = wishlist.some(item => item.id === product.id);

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />

      <div className="product-info">
        <h3>{product.name}</h3>
        <p className="product-category">{product.category}</p>
        <p className="product-price">${product.price ? product.price.toFixed(2) : '0.00'}</p>

        <div className="product-actions">
          <Link to={`/products/${product.id}`} className="btn-view">
            View
          </Link>

          <button onClick={() => addToCart(product)} className="btn-add">
            Add to Cart
          </button>

          <button onClick={() => toggleWishlist(product)} className="btn-wishlist">
            {isWishlisted ? '❤️' : '🤍'}
          </button>
        </div>

        {/* Admin Buttons */}
        {/* {currentUser?.role === "admin" && (
          <div className="admin-buttons">
            <Link to={`/edit-product/${product.id}`} className="btn-edit">
              Edit
            </Link>
            <button className="btn-delete">
              Delete
            </button>
          </div>
        )} */}
      </div>
    </div>
  );
};

export default ProductCard;