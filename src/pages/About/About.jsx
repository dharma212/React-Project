import "./About.css";
import {
  FaShieldAlt,
  FaShippingFast,
  FaStar,
  FaShoppingBag
} from "react-icons/fa";


export default function About() {

  return (

    <div className="about-container">


      {/* Hero Section */}

      <section className="about-hero">

        <div className="about-icon">
          <FaShoppingBag />
        </div>


        <h1>
          About Our Store
        </h1>


        <p>
          Your trusted online destination for premium electronics,
          gadgets, home appliances and lifestyle products.
          We focus on quality, affordability and customer satisfaction.
        </p>


      </section>




      {/* Who We Are */}

      <section className="about-section">

        <h2>
          Who We Are
        </h2>


        <p>
          We are a modern e-commerce platform designed to make
          online shopping simple, secure and enjoyable.
          Our mission is to provide genuine products with
          excellent service and a seamless shopping experience.
        </p>


      </section>




      {/* Features */}

      <div className="about-grid">


        <div className="about-card">

          <div className="about-card-icon">
            <FaStar />
          </div>

          <h3>
            Quality Products
          </h3>

          <p>
            Carefully selected products from trusted brands
            with excellent quality standards.
          </p>

        </div>




        <div className="about-card">

          <div className="about-card-icon">
            <FaShippingFast />
          </div>


          <h3>
            Fast Delivery
          </h3>


          <p>
            Quick and secure delivery service to provide
            the best shopping experience.
          </p>


        </div>





        <div className="about-card">

          <div className="about-card-icon">
            <FaShieldAlt />
          </div>


          <h3>
            Secure Shopping
          </h3>


          <p>
            Safe payments and reliable platform
            for worry-free online shopping.
          </p>


        </div>



      </div>


    </div>

  );

}