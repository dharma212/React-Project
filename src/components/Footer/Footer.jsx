import React from "react";
import { Link } from "react-router-dom";

import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowRight
} from "react-icons/fa";


import "./Footer.css";


const Footer = () => {


  return (

    <footer className="footer">


      <div className="footer-wave"></div>



      <div className="footer-container">


        {/* Brand */}

        <div className="footer-box brand-box">


          <h2>
            E<span>Store</span>
          </h2>


          <p>

            Your one-stop destination for quality products,
            amazing deals and fast delivery.

          </p>



          <div className="social-icons">


            <a href="#">
              <FaFacebook />
            </a>


            <a href="#">
              <FaInstagram />
            </a>


            <a href="#">
              <FaTwitter />
            </a>


            <a href="#">
              <FaYoutube />
            </a>


          </div>


        </div>





        {/* Links */}

        <div className="footer-box">


          <h3>
            Quick Links
          </h3>


          <ul>


            <li>
              <FaArrowRight />
              <Link to="/">Home</Link>
            </li>



            <li>
              <FaArrowRight />
              <Link to="/products">Products</Link>
            </li>



            <li>
              <FaArrowRight />
              <Link to="/wishlist">Wishlist</Link>
            </li>



            <li>
              <FaArrowRight />
              <Link to="/cart">Cart</Link>
            </li>


          </ul>


        </div>





        {/* Customer */}

        <div className="footer-box">


          <h3>
            Customer
          </h3>


          <ul>


            <li>
              <FaArrowRight />
              <Link to="/profile">Account</Link>
            </li>


            <li>
              <FaArrowRight />
              <Link to="/orders">Orders</Link>
            </li>


            <li>
              <FaArrowRight />
              <Link to="/">Privacy</Link>
            </li>


            <li>
              <FaArrowRight />
              <Link to="/">Terms</Link>
            </li>


          </ul>


        </div>






        {/* Contact */}

        <div className="footer-box contact">


          <h3>
            Contact
          </h3>



          <p>
            <FaMapMarkerAlt />
            Ahmedabad,Gujarat
          </p>


          <p>
            <FaPhone />
            +91 9876543210
          </p>



          <p>
            <FaEnvelope />
            support@estore.com
          </p>



        </div>



      </div>





      <div className="footer-bottom">


        © 2026 EStore | All Rights Reserved


      </div>




    </footer>


  )


}


export default Footer;