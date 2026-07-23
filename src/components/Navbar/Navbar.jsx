import { FaRightToBracket } from "react-icons/fa6";
import React, { useContext, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { CartContext } from '../../context/CartContext';
import './Navbar.css';
import SearchBar from '../Search/SearchBar';
import { useToast } from "../../context/ToastContext";
import { FaHistory, FaSearch } from "react-icons/fa";
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
  const [searchHistory, setSearchHistory] = useState([]);
  const searchRef = useRef();
  const [popularProducts, setPopularProducts] = useState([]);
  const { currentUser, logout } = useContext(AuthContext);
  const { cart, wishlist } = useContext(CartContext);
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  console.log("Products:", products);
  console.log("Popular:", popularProducts);
  const saveSearchHistory = (searchText) => {

    if (!searchText.trim()) return;


    let history = JSON.parse(
      localStorage.getItem("searchHistory")
    ) || [];


    history = history.filter(
      item => item.toLowerCase() !== searchText.toLowerCase()
    );


    history.unshift(searchText);


    history = history.slice(0, 10);


    localStorage.setItem(
      "searchHistory",
      JSON.stringify(history)
    );

  };


  // ADD HERE 👇

  const loadSearchHistory = () => {

    const history =
      JSON.parse(
        localStorage.getItem("searchHistory")
      ) || [];


    setSearchHistory(history);

  };
  const loadPopularProducts = () => {

    const orders =
      JSON.parse(localStorage.getItem("orders")) || [];


    let salesCount = {};


    orders.forEach(order => {

      order.items?.forEach(item => {

        salesCount[item.id] =
          (salesCount[item.id] || 0)
          +
          (item.quantity || 1);

      });

    });



    let sortedProducts = products
      ?.filter(product => salesCount[product.id])
      ?.sort(
        (a, b) =>
          salesCount[b.id] - salesCount[a.id]
      )
      ?.slice(0, 5);



    // If no sales available show first products
    if (!sortedProducts || sortedProducts.length === 0) {

      sortedProducts = products?.slice(0, 5);

    }


    setPopularProducts(sortedProducts);

  };
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
        onClick={() => {

          setSearchOpen(true);

          loadSearchHistory();

          loadPopularProducts();

        }}
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

        {currentUser ? (
          <>
            <li>
              <Link to="/cart" onClick={() => setMenuOpen(false)}>
                <MdOutlineShoppingCart /> Cart <span className="badge">{cart.length}</span>
              </Link>
            </li>
            <li><Link to="/orders" onClick={() => setMenuOpen(false)}>
              <FaTruckFast /> Orders
            </Link></li>
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
            <li><Link to="/login" onClick={() => setMenuOpen(false)}><FaRightToBracket /> Login</Link></li>
          </>
        )}
      </ul>
      {
        searchOpen && (
          <div className="search-screen">
            <div className="search-header">
              <LuX
                className="close-search"
                onClick={() => {
                  setSearchOpen(false);
                  setSearchText("");
                  loadPopularProducts();

                }}
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


              {
                searchText.length === 0 && searchHistory.length > 0 && (

                  <>

                    <h4>
                      Recent Searches
                    </h4>


                    {
                      searchHistory.map((item, index) => (

                        <div
                          className="history-item"
                          key={index}

                          onClick={() => {

                            setSearchText(item);

                          }}
                        >

                          <FaHistory className="history-icon" />
                          <span>{item}</span>


                        </div>

                      ))

                    }

                  </>

                )

              }



              {
                searchText.trim() === "" && (

                  <div className="popular-section">

                    <h4>
                      Popular Products
                    </h4>


                    {
                      popularProducts.length > 0 ?

                        popularProducts.slice(0, 3).map((item) => (

                          <div
                            className="search-product-card"
                            key={item.id}

                            onClick={() => {

                              navigate(`/products/${item.id}`);

                              setSearchOpen(false);

                            }}

                          >

                            <img
                              src={
                                item.images?.[0] || item.image
                              }
                            />


                            <div>

                              <h5>
                                {item.name}
                              </h5>


                              <p>
                                ₹{item.price}
                              </p>


                            </div>


                          </div>

                        ))


                        :

                        <h5>
                          Loading Popular Products...
                        </h5>


                    }


                  </div>

                )
              }

              {
                searchText.length > 0 && searchResults.length === 0 && (

                  <div className="no-product-found">

                    <h3>
                      No Product Found 😕
                    </h3>

                    <p>
                      Try searching something else
                    </p>

                  </div>

                )

              }



              {
                searchText.length > 0 && searchResults
                  .slice(0, 3)
                  .map((item) => (

                    <div
                      className="search-product-card"
                      key={item.id}

                      onClick={() => {

                        saveSearchHistory(searchText);
                        loadPopularProducts();


                        navigate(`/products/${item.id}`);

                        setSearchOpen(false);

                      }}

                    >

                      <img
                        src={
                          item.images?.[0] || item.image
                        }
                      />

                      <div>

                        <h5>
                          {item.name}
                        </h5>

                        <p>
                          ₹{item.price}
                        </p>

                      </div>


                    </div>

                  ))

              }


            </div>
          </div>
        )
      }
    </nav>
  );
};

export default Navbar;