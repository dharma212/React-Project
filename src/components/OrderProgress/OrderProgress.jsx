import React from "react";
import "./OrderProgress.css";


const OrderProgress = ({ status }) => {


    const steps = [
        {
            name:"Pending",
            icon:"📝"
        },
        {
            name:"Processing",
            icon:"⚙️"
        },
        {
            name:"Shipped",
            icon:"🚚"
        },
        {
            name:"Delivered",
            icon:"📦"
        }
    ];



    const currentIndex = steps.findIndex(
        step => step.name === status
    );



    const progressWidth =
        currentIndex === 0
        ? "0%"
        :
        `${(currentIndex / (steps.length - 1)) * 100}%`;



    return (

        <div className="tracking-container">


            <div className="progress-line">


                <div
                    className="progress-fill"
                    style={{
                        width:progressWidth
                    }}
                >


                </div>


            </div>



            <div className="tracking-steps">


            {
                steps.map((step,index)=>(


                    <div 
                    className="tracking-step"
                    key={step.name}
                    >


                        <div
                        className={
                            index <= currentIndex
                            ?
                            "tracking-circle active"
                            :
                            "tracking-circle"
                        }
                        >


                            {
                                index < currentIndex
                                ?
                                "✓"
                                :
                                step.icon
                            }


                        </div>



                        <h4
                        className={
                            index <= currentIndex
                            ?
                            "active-text"
                            :
                            ""
                        }
                        >

                            {step.name}

                        </h4>


                    </div>


                ))
            }


            </div>


        </div>

    )

}


export default OrderProgress;