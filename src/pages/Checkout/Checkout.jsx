import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../../context/CartContext";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./Checkout.css";
import { useToast } from "../../context/ToastContext";
import CheckoutSkeleton from "../../components/skeletons/CheckoutSkeleton";

const Checkout = () => {

  const [loading, setLoading] = useState(true);
  const { cart } = useContext(CartContext);
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const { showToast } = useToast();
  useEffect(() => {

    showToast(
      "Checkout page opened"
    );

  }, []);
  useEffect(() => {

    const timer = setTimeout(() => {

      setLoading(false);

    }, 800);


    return () => clearTimeout(timer);


  }, []);
  const [address, setAddress] = useState(currentUser?.address || "");

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleConfirm = () => {
    if (!address.trim()) {

      showToast(
        "Please add delivery address first",
        "warning"
      );

      return;
    }


    showToast(
      "Proceed to payment"
    );
    setTimeout(() => {

      navigate("/payment", {
        state: {
          cart,
          total,
          address,
          user: currentUser
        }
      });

    }, 1000);
  };
  if (loading) {

    return <CheckoutSkeleton />;

  }

  return (
    <div className="checkout-container">
      <h3 className="section-title">Checkout</h3>
      <div className="checkout-layout">

        {/* LEFT SIDE: Only Products */}
        <div className="checkout-left">
          <div className="checkout-card">
            <h2>Products</h2>
            {cart.map((item) => (
              <div className="checkout-product" key={item.id}>
                <img src={item.image} alt={item.name} />
                <div className="product-info">
                  <h3>
                    {item.name.length > 60
                      ? item.name.substring(0, 60) + "..."
                      : item.name}
                  </h3>
                  <p>Price: ₹{item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                  <p>Subtotal: ₹{item.price * item.quantity}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE: User Details + Price Details */}
        <div className="checkout-right">
          {/* User Details */}
          <div className="checkout-card">
            <h2>User Details</h2>
            <p><b>Name:</b> {currentUser.username}</p>
            <p><b>Email:</b> {currentUser.email}</p>
            <p><b>Phone:</b> {currentUser.phone}</p>
            <p><b>Address:</b> {currentUser.address}</p>
          </div>

          {/* Price Summary */}
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
            <button onClick={handleConfirm} className="place-order-btn">
              Proceed to Payment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;