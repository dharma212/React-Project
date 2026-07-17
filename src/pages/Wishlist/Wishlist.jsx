import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import "./Wishlist.css";
import WishlistSkeleton from "../../components/skeletons/WishlistSkeleton";


const Wishlist = () => {


  const [loading,setLoading] = useState(true);



  const {
    wishlist,
    toggleWishlist,
    addToCart,
    cart
  } = useContext(CartContext);




  useEffect(()=>{


    const timer = setTimeout(()=>{

      setLoading(false);

    },800);



    return ()=>clearTimeout(timer);


  },[]);





  if(loading){

    return <WishlistSkeleton/>;

  }






  return (

    <div className="wishlist-page">



      <h2 className="wishlist-title">

        My Wishlist ({wishlist.length})

      </h2>





      {
        wishlist.length === 0 ? (


          <div className="empty-wishlist">


            <h3>
              Your wishlist is empty
            </h3>



            <Link
              to="/products"
              className="btn-primary"
            >

              Browse Products

            </Link>


          </div>



        ) : (




          <div className="wishlist-container">



            {
              wishlist.map((product)=>{


                const isInCart = cart.some(
                  item=>item.id === product.id
                );



                return (



                  <div
                    className="wishlist-card"
                    key={product.id}
                  >



                    <button

                      className="wishlist-remove-icon"

                      onClick={()=>toggleWishlist(product)}

                    >

                      ❤️

                    </button>





                    <img

                      src={
                        product.image ||
                        "https://via.placeholder.com/200"
                      }

                      alt={product.name}

                      className="wishlist-image"

                    />





                    <div className="wishlist-details">



                      <h3>

                        {
                          product.name.length > 40
                          ? product.name.substring(0,40)+"..."
                          : product.name
                        }

                      </h3>





                      <p className="wishlist-category">

                        {product.category}

                      </p>





                      <p className="wishlist-price">

                        ₹{product.price.toLocaleString()}

                      </p>





                      <button

                        className={
                          isInCart
                          ? "btn-added"
                          : "cart-btn"
                        }



                        onClick={()=>{

                          if(!isInCart){

                            addToCart(product);

                          }

                        }}


                      >

                        {
                          isInCart
                          ? "✓ Added in Cart"
                          : "Add To Cart"
                        }


                      </button>



                    </div>



                  </div>



                );


              })
            }




          </div>



        )
      }




    </div>

  );

};


export default Wishlist;