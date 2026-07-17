import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import "./order.css";
import OrderSkeleton from "../../components/skeletons/OrderSkeleton";

const OrderList = () => {
  const orders = JSON.parse(localStorage.getItem("orders") || "[]");
  const [loading,setLoading]=useState(true);
  useEffect(()=>{

setTimeout(()=>{

setLoading(false);

},800);


},[]);
if(loading){

return <OrderSkeleton/>;

}
  return (
    <div className="orders-page">
      <h1>My Orders</h1>
      {orders.length === 0 ? (
        <div className="no-orders-card">
          <h3>No Orders Found</h3>
          <p>You haven't placed any orders yet.</p>
          <Link to="/products" className="shop-now-btn">Start Shopping</Link>
        </div>
      ) : (
        <div className="orders-list">
          {orders.map((order) => (
            <div className="order-card" key={order.id}>
              <div className="order-card-info">
                <h3>Order #{order.id}</h3>
                <p><b>Date:</b> {new Date(order.date).toLocaleDateString()}</p>
                <p><b>Status:</b> <span className="status-pill">{order.status}</span></p>
                <p><b>Total:</b> ₹{Number(order.total).toFixed(2)}</p>
              </div>
              <Link to={`/orders/${order.id}`}>
                <button className="view-details-btn">View Details</button>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrderList;