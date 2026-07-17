import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./order.css";
import OrderProgress from "../../components/OrderProgress/OrderProgress";
import OrderDetailsSkeleton from "../../components/skeletons/OrderDetailsSkeleton";

const OrderDetails = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);


  useEffect(() => {

    const timer = setTimeout(() => {

      setLoading(false);

    }, 800);


    return () => clearTimeout(timer);


  }, []);
  const orders = JSON.parse(localStorage.getItem("orders") || "[]");
  const order = orders.find((o) => o.id == id);

  if (loading) {

    return <OrderDetailsSkeleton />;

  }
  if (!order) {
    return (
      <div className="order-not-found">
        <h2>Order Not Found</h2>
        <Link to="/orders">← Back to My Orders</Link>
      </div>
    );
  }

  const numericTotal = Number(order.total) || 0;

  return (
    <div className="order-detail-container">
      <div className="order-header-nav">
        <Link to="/orders" className="back-link">← Back to Orders</Link>
        <h1>Order Details</h1>
        <OrderProgress status={order.status} />
      </div>

      <div className="order-layout">
        {/* LEFT SIDE: Product Details with Images */}
        <div className="order-left">
          <div className="order-card-box">
            <h2>Ordered Products</h2>
            {order.products.map((item) => (
              <div className="order-product-item" key={item.id}>
                <img
                  src={
                    item.image ||
                    "https://via.placeholder.com/150"
                  }
                  alt={item.name}
                />
                <div className="order-product-info">
                  <h3>

                    {
                      item.name.length > 45
                        ? item.name.substring(0, 45) + "..."
                        : item.name
                    }

                  </h3>
                  <p>Price: ₹{item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                  <p className="order-subtotal">Subtotal: ₹{item.price * item.quantity}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE: User Details, Address, and Price Details */}
        <div className="order-right">
          <div className="order-card-box">
            <h2>Customer Details</h2>

            <p><b>Name:</b> {order.user.username}</p>
            <p><b>Email:</b> {order.user.email}</p>
            <p><b>Phone:</b> {order.user.phone}</p>
            <p><b>Address:</b> {order.address}</p>
          </div>


          {/* Payment Details */}
          <div className="order-card-box payment-details">

            <h2>Payment Information</h2>

            <div className="payment-info-row">
              <span>Payment Method</span>

              <strong>
                {order.paymentMethod === "Cash On Delivery"
                  ? "💵 Cash On Delivery"
                  : order.paymentMethod === "Net Banking"
                    ? "🏦 Net Banking"
                    : order.paymentMethod}
              </strong>
            </div>


            <div className="payment-info-row">
              <span>Payment Status</span>

              <strong className="paid-status">
                {order.paymentMethod === "Cash On Delivery"
                  ? "Pending"
                  : "Paid"}
              </strong>
            </div>

          </div>

          <div className="order-summary-box">
            <h2>Price Details</h2>
            <div className="summary-row">
              <span>Products Total</span>
              <span>₹{numericTotal.toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>Delivery</span>
              <span>Free</span>
            </div>
            <hr />
            <div className="final-total">
              <span>Total Paid</span>
              <span>₹{numericTotal.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;