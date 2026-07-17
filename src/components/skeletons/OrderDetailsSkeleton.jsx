import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const OrderDetailsSkeleton = () => {
    return (

        <div className="order-detail-container">

            <div className="order-header-nav">

                <Skeleton width={150} height={30} />

                <Skeleton width={200} height={35} />

            </div>


            <div className="order-layout">


                {/* LEFT PRODUCTS */}

                <div className="order-left">

                    <div className="order-card-box">

                        <Skeleton width={200} height={30} />


                        {[1, 2, 3].map((item) => (

                            <div
                                key={item}
                                className="order-product-item"
                            >

                                <Skeleton
                                    width={120}
                                    height={120}
                                />


                                <div>

                                    <Skeleton
                                        width={220}
                                        height={25}
                                    />


                                    <Skeleton
                                        width={120}
                                        height={20}
                                    />


                                    <Skeleton
                                        width={100}
                                        height={20}
                                    />

                                </div>


                            </div>

                        ))}


                    </div>


                </div>




                {/* RIGHT SIDE */}

                <div className="order-right">


                    <div className="order-card-box">

                        <Skeleton width={180} height={30} />


                        <Skeleton count={4} />


                    </div>




                    <div className="order-card-box">


                        <Skeleton width={200} height={30} />


                        <Skeleton count={3} />


                    </div>




                    <div className="order-summary-box">

                        <Skeleton width={180} height={30} />


                        <Skeleton count={4} />


                    </div>



                </div>


            </div>


        </div>

    );
};


export default OrderDetailsSkeleton;