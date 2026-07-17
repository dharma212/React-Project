import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SearchSkeleton = () => {

    return (

        <div className="search-results">

            {
                [1,2,3,4].map((item)=>(

                    <div 
                        className="search-item"
                        key={item}
                    >


                        {/* Product Image */}

                        <Skeleton
                            width={70}
                            height={70}
                        />



                        {/* Product Details */}

                        <div
                            style={{
                                marginLeft:"15px",
                                flex:1
                            }}
                        >


                            <Skeleton
                                width={200}
                                height={20}
                            />


                            <div style={{marginTop:"8px"}}>

                                <Skeleton
                                    width={80}
                                    height={18}
                                />

                            </div>


                        </div>


                    </div>


                ))
            }


        </div>

    );

};


export default SearchSkeleton;