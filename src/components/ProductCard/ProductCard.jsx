import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import './ProductCard.css';

const ProductCard = ({ product }) => {

  const { addToCart, toggleWishlist, wishlist, cart } = useContext(CartContext);


  const isWishlisted = wishlist.some(
    item => item.id === product.id
  );

  const isInCart = cart.some(
  item => item.id === product.id
);

  return (
    <Link
      to={`/products/${product.id}`}
      className="product-card-link"
    >
      <div className="product-card">


        {/* Product Image */}

        <div className="product-image-box">

          <img

            src={product.image || "https://via.placeholder.com/300"}

            alt={product.name}

            className="product-image"

          />


          <button
            className="wishlist-icon"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              toggleWishlist(product);
            }}
          >

            {isWishlisted ? "❤️" : "🤍"}

          </button>


        </div>





        {/* Product Details */}

        <div className="product-info">

          <h3 className="product-name">

            {product.name}

          </h3>




          <div className="rating">

            ⭐ {product.rating || 5}

          </div>





          <p className="product-price">

            ₹{product.price ? product.price.toLocaleString() : "0"}

          </p>




          <div className="product-actions">

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



          </div>


        </div>



      </div>
    </Link>
  );

};


export default ProductCard;