import React, { useContext, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { CartContext } from '../../context/CartContext';
import './Navbar.css';
import SearchBar from '../Search/SearchBar';
import { useToast } from "../../context/ToastContext";
import { FaSearch } from "react-icons/fa";
import { useRef } from "react";
import { ProductContext } from "../../context/ProductContext";
import { FaTachometerAlt, FaBoxOpen, FaShoppingCart, FaHeart, FaUsers, FaStore, FaHome, FaTruck, FaShoppingBag, } from "react-icons/fa";
import { LuShoppingBag, LuHeart, LuUser, LuPlus, LuMenu, LuX } from "react-icons/lu";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaArrowRightArrowLeft, FaArrowRightFromBracket, FaDoorOpen, FaTruckFast } from 'react-icons/fa6';

const Navbar = () => {
  const [searchText, setSearchText] = useState("");
  const { products } = useContext(ProductContext);
  const [searchOpen, setSearchOpen] = useState(false);
  const searchRef = useRef();
  const { currentUser, logout } = useContext(AuthContext);
  const { cart, wishlist } = useContext(CartContext);
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const searchResults = products?.filter((item) => {

    return (
      item.name
        ?.toLowerCase()
        .includes(searchText.toLowerCase())
    )
  });
  const { showToast } = useToast();
  const handleLogout = () => {
    logout();
    showToast(
      "Logout successfully"
    );
    navigate('/login');
  };

  useEffect(() => {
    if (menuOpen || searchOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.height = "100vh";
    }
    else {
      document.body.style.overflow = "auto";
      document.body.style.height = "auto";
    }
    if (searchOpen) {
      setTimeout(() => {
        searchRef.current?.focus();
      }, 200);
    }
    return () => {
      document.body.style.overflow = "auto";
      document.body.style.height = "auto";
    };
  }, [menuOpen, searchOpen]);


  return (
    <nav className="navbar">
      <div className="nav-brand">
        <Link to="/">E-Store</Link>
      </div>
      <button
        className="mobile-search-btn"
        onClick={() => setSearchOpen(true)}
      >
        <FaSearch />
      </button>
      <button className="mobile-menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <LuX /> : <LuMenu />}
      </button>
      <div
        className={`menu-overlay ${menuOpen ? "show" : ""}`}
        onClick={() => setMenuOpen(false)}
      ></div>
      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>

        <div className="mobile-menu-title">
          <h3>Main Menu</h3>
          <span>E-Store Navigation</span>
        </div>
        <div className="mobile-search">
          <SearchBar />
        </div>
        <li><Link to="/" onClick={() => setMenuOpen(false)}>          <FaHome />
          Home</Link></li>
        <li><Link to="/products" onClick={() => setMenuOpen(false)}><FaBoxOpen /> Products</Link></li>

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
        <li><Link to="/orders" onClick={() => setMenuOpen(false)}>
          <FaTruckFast /> Orders
        </Link></li>
        {currentUser ? (
          <>
            <li>
              <Link to="/wishlist" onClick={() => setMenuOpen(false)}>
                <LuHeart /> Wishlist <span className="badge">{wishlist.length}</span>
              </Link>
            </li>
            <li><Link to="/profile" onClick={() => setMenuOpen(false)}><LuUser /> Profile</Link></li>
            <li><button onClick={handleLogout} className="logout-btn">        <FaArrowRightFromBracket />
              Logout</button></li>
          </>
        ) : (
          <>
            <li><Link to="/login" onClick={() => setMenuOpen(false)}><FaArrowRightFromBracket /> Login</Link></li>
          </>
        )}
      </ul>
      {
        searchOpen && (
          <div className="search-screen">
            <div className="search-header">
              <LuX
                className="close-search"
                onClick={() => setSearchOpen(false)}
              />
              <input
                ref={searchRef}
                className="mobile-search-input"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                placeholder="Search products..."
              />
            </div>
            <div className="search-products">
              <h4>Popular Products</h4>
              {
                searchText.length > 0 && searchResults.length === 0 ? (
                  <div className="no-product-found">
                    <h3>No Product Found 😕</h3>
                    <p>Try searching something else</p>
                  </div>
                ) : (
                  searchResults
                    ?.slice(0, 5)
                    .map((item) => (
                      <div
                        className="search-product-card"
                        key={item.id}
                        onClick={() => {
                          navigate(`/product/${item.id}`)
                          setSearchOpen(false)
                        }}
                      >
                        <img
                          src={
                            item.images?.[0] || item.image
                          }
                        />
                        <div>
                          <h5>{item.name}</h5>
                          <p>
                            ₹{item.price}
                          </p>
                        </div>
                      </div>
                    ))
                )
              }
            </div>
          </div>
        )
      }
    </nav>
  );
};

export default Navbar;