import React from "react";
import Skeleton from "react-loading-skeleton";


const PaymentSkeleton = () => {

    return (

        <div className="payment-container">


            <h1 className="payment-title">
                <Skeleton width={300} height={40} />
            </h1>



            <div className="payment-layout">



                {/* LEFT */}

                <div className="payment-left">


                    <div className="payment-card">


                        <Skeleton width={180} height={30} />



                        {[1, 2, 3].map((item) => (


                            <div
                                className="payment-product"
                                key={item}
                            >


                                <Skeleton
                                    width={120}
                                    height={120}
                                    borderRadius={10}
                                />


                                <div className="payment-product-info">


                                    <Skeleton
                                        width={250}
                                        height={25}
                                    />


                                    <Skeleton
                                        width={120}
                                        style={{ marginTop: 10 }}
                                    />


                                    <Skeleton
                                        width={150}
                                        style={{ marginTop: 10 }}
                                    />


                                </div>


                            </div>


                        ))}



                    </div>




                    <div className="payment-card">

                        <Skeleton
                            width={200}
                            height={30}
                        />

                        <Skeleton
                            width={350}
                            style={{ marginTop: 20 }}
                        />


                    </div>


                </div>





                {/* RIGHT */}

                <div className="payment-right">


                    <div className="payment-card">


                        <Skeleton
                            width={250}
                            height={30}
                        />



                        <div style={{ marginTop: 20 }}>

                            <Skeleton height={100} />

                        </div>


                        <div style={{ marginTop: 20 }}>

                            <Skeleton height={100} />

                        </div>



                    </div>






                    <div className="payment-card">


                        <Skeleton
                            width={200}
                            height={30}
                        />


                        <Skeleton
                            style={{ marginTop: 20 }}
                        />


                        <Skeleton
                            style={{ marginTop: 20 }}
                        />


                        <Skeleton
                            height={45}
                            style={{ marginTop: 25 }}
                        />



                    </div>


                </div>



            </div>


        </div>

    );

};


export default PaymentSkeleton;