import React, { useContext, useState, useEffect, useRef } from "react";
import { ProductContext } from "../../context/ProductContext";
import { Link } from "react-router-dom";
import "./SearchBar.css";
import SearchSkeleton from "../../components/skeletons/SearchSkeleton";

const SearchBar = () => {


  const { products } = useContext(ProductContext);

  const [loading, setLoading] = useState(true);
  useEffect(() => {

    const timer = setTimeout(() => {

      setLoading(false);

    }, 800);


    return () => clearTimeout(timer);


  }, []);
  const [search, setSearch] = useState("");

  const searchRef = useRef();



  // Close search when click outside
  useEffect(() => {


    const handleClickOutside = (event) => {

      if (
        searchRef.current &&
        !searchRef.current.contains(event.target)
      ) {

        setSearch("");

      }

    };


    document.addEventListener(
      "mousedown",
      handleClickOutside
    );


    return () => {

      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );

    };


  }, []);





  const filteredProducts = products.filter((product) =>
    product.name
      .toLowerCase()
      .includes(search.toLowerCase())
  );




  return (

    <div
      className="search-container"
      ref={searchRef}
    >



      <div className="search-bar">


        <input

          type="text"

          placeholder="Search products..."

          value={search}

          onChange={(e) => setSearch(e.target.value)}

        />


      </div>





      {
        search && (

          <div className="search-results">
            {
              loading ? (

                <SearchSkeleton />

              ) : filteredProducts.length > 0 ? (


                filteredProducts.map((product) => (


                  <Link

                    to={`/product/${product.id}`}

                    className="search-item"

                    key={product.id}

                    onClick={() => setSearch("")}

                  >



                    <img

                      src={
                        product.images?.[0] ||
                        product.image ||
                        "https://via.placeholder.com/80"
                      }

                      alt={product.name}

                    />




                    <div>


                      <h4>

                        {
                          product.name.length > 30
                            ? product.name.substring(0, 30) + "..."
                            : product.name
                        }

                      </h4>



                      <p>

                        ₹{product.price}

                      </p>


                    </div>



                  </Link>


                ))


              ) : (


                <p className="no-result">

                  No Product Found

                </p>


              )

            }


          </div>


        )

      }



    </div>

  );

};


export default SearchBar;