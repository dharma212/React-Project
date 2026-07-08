import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { CartContext } from '../../context/CartContext';
import './Navbar.css';
import SearchBar from '../Search/SearchBar';

// Importing icons from the libraries
import { LuShoppingBag, LuHeart, LuUser, LuPlus, LuMenu, LuX } from "react-icons/lu";
import { MdOutlineShoppingCart } from "react-icons/md";

const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);
  const { cart, wishlist } = useContext(CartContext);
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <Link to="/">E-Store</Link>
      </div>
      
      <button className="mobile-menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <LuX /> : <LuMenu />}
      </button>

      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <SearchBar />
        <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
        <li><Link to="/products" onClick={() => setMenuOpen(false)}>Products</Link></li>
        
        {currentUser?.role === "admin" && (
          <li>
            <Link to="/admin" onClick={() => setMenuOpen(false)}>
              <LuPlus /> Dashboard
            </Link>
          </li>
        )}
        
        <li>
          <Link to="/cart" onClick={() => setMenuOpen(false)}>
            <MdOutlineShoppingCart /> Cart <span className="badge">{cart.length}</span>
          </Link>
        </li>

        {currentUser ? (
          <>
            <li>
              <Link to="/wishlist" onClick={() => setMenuOpen(false)}>
                <LuHeart /> Wishlist <span className="badge">{wishlist.length}</span>
              </Link>
            </li>
            <li><Link to="/profile" onClick={() => setMenuOpen(false)}><LuUser /> Profile</Link></li>
            <li><button onClick={handleLogout} className="logout-btn">Logout</button></li>
          </>
        ) : (
          <>
            <li><Link to="/login" onClick={() => setMenuOpen(false)}>Login</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;