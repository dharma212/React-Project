import React from "react";
import Skeleton from "react-loading-skeleton";

const CheckoutSkeleton = () => {

  return (

    <div className="checkout-container">


      <h3 className="section-title">

        <Skeleton width={200} height={35}/>

      </h3>




      <div className="checkout-layout">



        {/* LEFT PRODUCTS */}

        <div className="checkout-left">


          <div className="checkout-card">


            <Skeleton 
              width={150}
              height={30}
            />



            {
              [1,2,3].map((item)=>(


                <div 
                  className="checkout-product"
                  key={item}
                >


                  {/* Product Image */}

                  <Skeleton

                    width={120}

                    height={120}

                    borderRadius={10}

                  />



                  <div className="product-info">



                    {/* Product Name */}

                    <Skeleton

                      width={280}

                      height={25}

                    />



                    <div style={{marginTop:"10px"}}>

                      {/* Price */}

                      <Skeleton

                        width={120}

                      />


                    </div>




                    <div style={{marginTop:"10px"}}>

                      {/* Quantity */}

                      <Skeleton

                        width={100}

                      />


                    </div>




                    <div style={{marginTop:"10px"}}>

                      {/* Subtotal */}

                      <Skeleton

                        width={150}

                      />


                    </div>



                  </div>



                </div>


              ))
            }



          </div>



        </div>








        {/* RIGHT SIDE */}


        <div className="checkout-right">





          {/* User Details Skeleton */}

          <div className="checkout-card">


            <Skeleton

              width={180}

              height={30}

            />



            <div style={{marginTop:"15px"}}>

              <Skeleton width={220}/>


            </div>



            <div style={{marginTop:"10px"}}>

              <Skeleton width={250}/>


            </div>



            <div style={{marginTop:"10px"}}>

              <Skeleton width={180}/>


            </div>



            <div style={{marginTop:"10px"}}>

              <Skeleton width={300}/>


            </div>



          </div>







          {/* Price Details Skeleton */}


          <div className="summary-card">


            <Skeleton

              width={170}

              height={30}

            />



            <hr/>



            <div className="summary-row">


              <Skeleton width={100}/>

              <Skeleton width={80}/>


            </div>



            <div 
              className="summary-row"
              style={{marginTop:"15px"}}
            >


              <Skeleton width={100}/>

              <Skeleton width={60}/>


            </div>




            <hr/>




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



          </div>




        </div>





      </div>



    </div>


  );

};


export default CheckoutSkeleton;