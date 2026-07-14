import React, { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ProductContext } from '../../context/ProductContext';
import { CartContext } from '../../context/CartContext';
import './ProductDetails.css';

const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { addToCart, toggleWishlist, wishlist, cart } = useContext(CartContext);

  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="product-not-found">
        <h2>Product not found</h2>
        <Link to="/products">Back to products</Link>
      </div>
    );
  }

  const isWishlisted = wishlist.some(item => item.id === product.id);
  const isInCart = cart.some(
  item => item.id === product.id
);
  return (
    <div className="product-details-container">
      <div className="product-details-image">
        <img src={product.image} alt={product.name} />
      </div>
      
      <div className="product-details-info">
        <span className="category-badge">{product.category}</span>
        <h1>{product.name}</h1>
        
        <div className="rating-stock">
          <h3>Rating</h3>
          <p className="rating">⭐ {product.rating} / 5</p>
          <h3>Product Stock</h3>
          <p className={`stock ${product.stock > 0 ? 'in-stock' : 'out-stock'}`}>
            {product.stock > 0 ? `In Stock (${product.stock})` : ' Out of Stock'}
          </p>
        </div>

        <p className="price">₹{product.price.toFixed(2)}</p>
        <p className="description">{product.description}</p>
        
        <div className="action-buttons">
          <button
  className={isInCart ? "btn-added" : "btn-add"}

  onClick={(e)=>{

    e.preventDefault();
    e.stopPropagation();

    if(!isInCart){

      addToCart(product);

    }

  }}
>

{
  isInCart 
  ? "✓ Added in Cart"
  : "Add Cart"
}

</button>
          
          <button className="wishlist-btn" onClick={() => toggleWishlist(product)}>
            {isWishlisted ? ' Remove' : ' Wishlist'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;