import React, { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

import "./Dashboard.css";


const Dashboard = () => {


  const { products } = useContext(ProductContext);

  const { cart, wishlist } = useContext(CartContext);



  // Get all registered users

    const users = JSON.parse(localStorage.getItem('usersDB') || '[]');


  return (

    <div className="dashboard-container">


      <h1 className="dashboard-title">
        Admin Dashboard
      </h1>



      <div className="dashboard-cards">


        <div className="dashboard-card product-card">

          <h2>
            {products.length}
          </h2>

          <p>
            Total Products
          </p>

        </div>




        <div className="dashboard-card cart-card">



          <h2>
            {cart.length}
          </h2>


          <p>
            Cart Items
          </p>


        </div>





        <div className="dashboard-card wishlist-card">

          <h2>
            {wishlist.length}
          </h2>


          <p>
            Wishlist Items
          </p>


        </div>





        <div className="dashboard-card user-card">


          <h2>
            {users.length}
          </h2>


          <p>
            Registered Users
          </p>


        </div>



      </div>


      <div className="dashboard-buttons">


        <Link 
          to="/admin/products"
          className="dashboard-btn"
        >
          Manage Products
        </Link>



        <Link 
          to="/admin/carts"
          className="dashboard-btn"
        >
          Cart List
        </Link>



        <Link 
          to="/admin/wishlist"
          className="dashboard-btn"
        >
          Wishlist List
        </Link>



        <Link 
          to="/admin/user"
          className="dashboard-btn"
        >
          User List
        </Link>


      </div>



    </div>

  );
};


export default Dashboard;