import React from "react";
import Skeleton from "react-loading-skeleton";


const OrderSkeleton = () => {

    return (

        <div className="orders-page">


            <h1>
                <Skeleton width={200} />
            </h1>


            <div className="orders-list">


                {
                    [1, 2, 3].map(i => (

                        <div className="order-card" key={i}>


                            <div>

                                <Skeleton width={180} height={25} />

                                <Skeleton width={150} style={{ marginTop: 10 }} />

                                <Skeleton width={120} style={{ marginTop: 10 }} />

                                <Skeleton width={100} style={{ marginTop: 10 }} />


                            </div>


                            <Skeleton
                                width={120}
                                height={40}
                            />


                        </div>


                    ))
                }


            </div>


        </div>


    )

}


export default OrderSkeleton;