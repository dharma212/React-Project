import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaTachometerAlt,
  FaBoxOpen,
  FaShoppingCart,
  FaHeart,
  FaUsers,
  FaStore,
  FaHome,
  FaTruck,
  FaShoppingBag,
} from "react-icons/fa";
import "./Sidebar.css";
import { FaTruckArrowRight, FaTruckFast } from "react-icons/fa6";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <FaStore className="logo-icon" />
        <div>
          <h2>ShopAdmin</h2>
          <span>Admin Dashboard</span>
        </div>
      </div>

      <nav className="sidebar-menu">
        <NavLink to="/admin" end>
          <FaTachometerAlt />
          <span>Dashboard</span>
        </NavLink>

        <NavLink to="/admin/user">
          <FaUsers />
          <span>Customers</span>
        </NavLink>

        <NavLink to="/admin/products">
          <FaBoxOpen />
          <span>Products</span>
        </NavLink>

        <NavLink to="/admin/carts">
          <FaShoppingCart />
          <span>Carts</span>
        </NavLink>

        <NavLink to="/admin/wishlist">
          <FaHeart />
          <span>Wishlist</span>
        </NavLink>

        <NavLink to="/admin/orders">
          <FaShoppingBag />
          <span>Orders</span>
        </NavLink>

        <NavLink to="/">
          <FaHome />
          <span>Back To Home</span>
        </NavLink>
      </nav>

      <div className="sidebar-footer">
        <div className="admin-profile">
          <div className="avatar">A</div>
          <div>
            <h4>Admin</h4>
            <p>Administrator</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;