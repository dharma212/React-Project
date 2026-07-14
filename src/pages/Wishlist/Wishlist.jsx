import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import ProductCard from '../../components/ProductCard/ProductCard';
import './Wishlist.css';


const Wishlist = () => {

  const { wishlist } = useContext(CartContext);


  return (

    <div className="wishlist-page">


      <h2 className="wishlist-title">
        My Wishlist
      </h2>


      {
        wishlist.length === 0 ? (
          <div className="empty-wishlist">
            <h3>
              Your wishlist is empty.
            </h3>
            <Link to="/products" className='btn-primary'>
              Browse Products
            </Link>
          </div>
        ) : (
          <div className="wishlist-product-grid">
            {
              wishlist.map(product => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              ))
            }
          </div>
        )
      }
    </div>
  );
};
export default Wishlist;