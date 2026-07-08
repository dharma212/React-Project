import React, { useContext, useState } from "react";
import { ProductContext } from "../../context/ProductContext";
import { Link } from "react-router-dom";
import "./SearchBar.css";


const SearchBar = () => {


  const { products } = useContext(ProductContext);

  const [search, setSearch] = useState("");



  const filteredProducts = products.filter((product) =>
    product.name
      .toLowerCase()
      .includes(search.toLowerCase())
  );



  return (

    <div className="search-container">


      <div className="search-bar">


        <input

          type="text"

          placeholder="Search products..."

          value={search}

          onChange={(e)=>setSearch(e.target.value)}

        />


      </div>





      {
        search && (

          <div className="search-results">


            {
              filteredProducts.length > 0 ? (


                filteredProducts.map((product)=>(


                  <Link

                    to={`/products/${product.id}`}

                    className="search-item"

                    key={product.id}

                  >


                    <img

                      src={product.image}

                      alt={product.name}

                    />


                    <div>

                      <h4>
                        {product.name}
                      </h4>


                      <p>
                        ${product.price}
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