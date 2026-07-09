import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import './Cart.css';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);

  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  if (cart.length === 0) {
    return (
      <div className="cart-empty">
        <h2>Your Cart is Empty</h2>
        <Link to="/products" className="btn-primary">Continue Shopping</Link>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h2>Shopping Cart</h2>
      <div className="cart-container">
        <div className="cart-items">
          {cart.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div className="item-details">
                <h3>{item.name}</h3>
                <p>${item.price.toFixed(2)}</p>
              </div>
              <div className="item-actions">
                <input 
                  type="number" 
                  min="1" 
                  max={item.stock}
                  value={item.quantity} 
                  onChange={(e) => updateQuantity(item.id, e.target.value)}
                />
                <button className="btn-remove" onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </div>
          ))}
        </div>
        <div className="summary-card">
          <h2>Price Details</h2>
          <div className="summary-row">
            <span>Products</span>
            <span>₹{total.toFixed(2)}</span>
          </div>
          <div className="summary-row">
            <span>Delivery</span>
            <span>Free</span>
          </div>
          <hr />
          <div className="final-total">
            <span>Total</span>
            <span>₹{total.toFixed(2)}</span>
          </div>
          <Link to="/checkout">
              <button className="btn-checkout">
                  Proceed to Checkout
              </button>
          </Link>
          <Link to="/">
            <button class="btn-back">Back</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
