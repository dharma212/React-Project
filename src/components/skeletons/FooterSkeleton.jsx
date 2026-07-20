import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import "../Footer/Footer.css";


const FooterSkeleton = () => {

    return (

        <footer className="footer skeleton-footer">


            <div className="footer-container">


                {
                    [1,2,3,4].map((item)=>(
                        
                        <div 
                        className="footer-box"
                        key={item}
                        >

                            <Skeleton 
                            height={30}
                            width={150}
                            />

                            <br/><br/>


                            {
                                [1,2,3,4].map((i)=>(

                                    <Skeleton
                                    key={i}
                                    height={15}
                                    width={200}
                                    style={{
                                        marginBottom:"12px"
                                    }}
                                    />

                                ))
                            }


                        </div>

                    ))
                }


            </div>


            <div className="footer-bottom">

                <Skeleton 
                height={20}
                width={250}
                />

            </div>


        </footer>

    )

}


export default FooterSkeleton;