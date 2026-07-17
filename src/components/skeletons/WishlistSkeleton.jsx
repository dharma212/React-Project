import React from "react";
import Skeleton from "react-loading-skeleton";

const WishlistSkeleton = () => {

    return (

        <div className="wishlist-page">


            <h2 className="wishlist-title">

                <Skeleton width={220} height={35} />

            </h2>




            <div className="wishlist-container">


                {
                    [1, 2, 3].map((item) => (


                        <div
                            className="wishlist-card"
                            key={item}
                        >


                            {/* Wishlist icon */}

                            <Skeleton
                                width={35}
                                height={35}
                                circle
                            />



                            {/* Image */}

                            <Skeleton

                                width={220}

                                height={220}

                                borderRadius={10}

                            />




                            <div className="wishlist-details">


                                {/* Name */}

                                <Skeleton
                                    width={200}
                                    height={25}
                                />



                                <div style={{ marginTop: "10px" }}>

                                    {/* Category */}

                                    <Skeleton
                                        width={100}
                                    />

                                </div>



                                <div style={{ marginTop: "10px" }}>


                                    {/* Price */}

                                    <Skeleton
                                        width={120}
                                        height={25}
                                    />


                                </div>





                                <div style={{ marginTop: "15px" }}>


                                    {/* Button */}

                                    <Skeleton
                                        width={150}
                                        height={40}
                                        borderRadius={8}
                                    />


                                </div>



                            </div>


                        </div>


                    ))
                }


            </div>


        </div>

    );

};


export default WishlistSkeleton;