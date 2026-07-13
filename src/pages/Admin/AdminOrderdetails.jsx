import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Sidebar from "./Sidebar";
import "./AdminOrderdetails.css";


const OrderDetails = () => {

    console.log(JSON.parse(localStorage.getItem("orders")));
    const { id } = useParams();


    const [order, setOrder] = useState(null);


    const [status, setStatus] = useState("");



    useEffect(() => {


        const orders =
            JSON.parse(localStorage.getItem("orders")) || [];


        const findOrder =
            orders.find(
                item => item.id.toString() === id
            );


        setOrder(findOrder);


        if (findOrder) {

            setStatus(findOrder.status);

        }


    }, [id]);





    const updateStatus = () => {


        const orders =
            JSON.parse(localStorage.getItem("orders")) || [];



        const updatedOrders =
            orders.map(item => {


                if (item.id.toString() === id) {

                    return {

                        ...item,

                        status: status

                    }

                }


                return item;


            });



        localStorage.setItem(
            "orders",
            JSON.stringify(updatedOrders)
        );


        setOrder(
            updatedOrders.find(
                item => item.id.toString() === id
            )
        );



        // alert("Status Updated");


    };




    if (!order) {

        return <h2>Order Not Found</h2>

    }




    return (

        <div style={{ display: "flex" }}>


            <Sidebar />



            <div className="order-details-container">


                <h1>
                    Order Details
                </h1>




                <div className="details-layout">



                    {/* LEFT SIDE */}


                    <div className="left-details">



                        <div className="order-cardss">

                            <table className="order-product-table">


                                <thead>



                                    <tr>

                                        <th>
                                            Image
                                        </th>


                                        <th>
                                            Product
                                        </th>


                                        <th>
                                            Qty
                                        </th>


                                        <th>
                                            Price
                                        </th>


                                    </tr>

                                </thead>



                                <tbody>


                                    {

                                        order.products.map(
                                            (product, index) => (


                                                <tr key={index}>


                                                    <td>

                                                        <img

                                                            src={product.image}

                                                            className="order-product-image"

                                                        />

                                                    </td>



                                                    <td>

                                                        {product.name}

                                                    </td>


                                                    <td>

                                                        {product.quantity}

                                                    </td>


                                                    <td>

                                                        ₹{product.price}

                                                    </td>



                                                </tr>


                                            )

                                        )


                                    }



                                </tbody>


                            </table>



                        </div>







                        <div className="order-cards">


                            <h2>
                                User Details
                            </h2>



                            <p>
                                <b>Name:</b>
                                {" "}
                                {order.user?.username}
                            </p>


                            <p>
                                <b>Email:</b>
                                {" "}
                                {order.user?.email}
                            </p>


                            <p>
                                <b>Phone:</b>
                                {" "}
                                {order.user?.phone}
                            </p>


                            <p>
                                <b>Address:</b>
                                {" "}
                                {order.address}
                            </p>


                        </div>



                    </div>








                    {/* RIGHT SIDE */}


                    <div className="right-status">



                        <div className=" status-box">


                            <h2>
                                Order Status
                            </h2>



                            <select className="status-select"

                                value={status}

                                onChange={(e) =>
                                    setStatus(e.target.value)
                                }

                            >


                                <option>
                                    Pending
                                </option>


                                <option>
                                    Processing
                                </option>


                                <option>
                                    Shipped
                                </option>


                                <option>
                                    Delivered
                                </option>


                                <option>
                                    Cancelled
                                </option>


                            </select>



                            <button

                                className="update-btn"

                                onClick={updateStatus}

                            >

                                Update Status

                            </button>



                        </div>



                    </div>



                </div>



            </div>


        </div>


    )

}


export default OrderDetails;