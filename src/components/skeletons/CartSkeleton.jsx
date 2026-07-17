import React from "react";
import Skeleton from "react-loading-skeleton";

const CartSkeleton = () => {

  return (
    <div className="cart-page">

      <h2>
        <Skeleton width={220} height={35} />
      </h2>


      <div className="cart-container">


        {/* Left Cart Items */}

        <div className="cart-items">


          {[1, 2, 3].map((item) => (

            <div
              className="cart-item"
              key={item}
            >


              {/* Product Image */}

              <Skeleton
                width={140}
                height={140}
                borderRadius={10}
              />



              {/* Product Details */}

              <div className="item-details">

                <Skeleton
                  width={250}
                  height={25}
                />


                <div style={{marginTop:"12px"}}>

                  <Skeleton
                    width={100}
                    height={22}
                  />

                </div>


                <div style={{marginTop:"15px"}}>

                  <Skeleton
                    width={120}
                    height={35}
                  />

                </div>


              </div>



              {/* Quantity + Remove */}

              <div className="item-actions">


                <Skeleton
                  width={70}
                  height={35}
                />


                <div style={{marginTop:"15px"}}>

                  <Skeleton
                    width={100}
                    height={40}
                  />

                </div>


              </div>



            </div>


          ))}


        </div>





        {/* Price Details Skeleton */}

        <div className="summary-card">


          <Skeleton
            width={180}
            height={30}
          />


          <hr />


          <div className="summary-row">

            <Skeleton width={100}/>

            <Skeleton width={80}/>

          </div>



          <div className="summary-row"
            style={{marginTop:"15px"}}
          >

            <Skeleton width={100}/>

            <Skeleton width={60}/>

          </div>



          <hr />



          <div className="final-total">


            <Skeleton
              width={80}
              height={25}
            />


            <Skeleton
              width={120}
              height={30}
            />


          </div>



          <div style={{marginTop:"25px"}}>

            <Skeleton
              height={45}
              borderRadius={8}
            />

          </div>



          <div style={{marginTop:"15px"}}>

            <Skeleton
              height={40}
              borderRadius={8}
            />

          </div>



        </div>



      </div>


    </div>
  );
};


export default CartSkeleton;