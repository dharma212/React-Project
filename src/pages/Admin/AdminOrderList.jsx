import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ProductManagement.css";
import Sidebar from "./Sidebar";
import "./Sidebar.css";
import { FaDeleteLeft, FaEye } from "react-icons/fa6";
import { useToast } from "../../context/ToastContext";

const OrderList = () => {


  const [orders, setOrders] = useState([]);
  const { showToast } = useToast();
  const navigate = useNavigate();



  useEffect(() => {

    loadOrders();

  }, []);



  const loadOrders = () => {

    const data =
      JSON.parse(localStorage.getItem("orders")) || [];

    setOrders(data);

  };




  const deleteOrder = (id) => {


    const deletedOrder = orders.find(
      order => order.id === id
    );



    const updatedOrders =
      orders.filter(
        order => order.id !== id
      );



    localStorage.setItem(
      "orders",
      JSON.stringify(updatedOrders)
    );



    setOrders(updatedOrders);



    showToast(
      `Order #${deletedOrder.id} deleted successfully`,
      "warning"
    );


  };




  return (

    <div style={{ display: "flex", minHeight: "100vh" }}>


      <Sidebar />


      <div
        style={{
          marginLeft: "200px",
          width: "100%",
          padding: "25px"
        }}
      >


        <div className="product-header">


          <h1>
            Order Management
          </h1>


        </div>




        <div className="table-card">


          <table className="product-table">


            <thead>

              <tr>

                <th>
                  Order ID
                </th>


                <th>
                  Customer
                </th>


                <th>
                  Product
                </th>

                <th>
                  Total
                </th>


                <th>
                  Status
                </th>


                <th>
                  Date
                </th>


                <th>
                  Action
                </th>


              </tr>


            </thead>





            <tbody>


              {
                orders.length === 0 ?


                  (

                    <tr>

                      <td colSpan="8" className="empty">

                        No Orders Available

                      </td>

                    </tr>

                  )


                  :


                  orders.map((order) => (


                    <tr key={order.id}>


                      <td>

                        #{order.id}

                      </td>





                      <td>


                        <b>
                          {order.user?.username}
                        </b>


                        <br />


                        {order.user?.email}


                        <br />


                        {order.user?.phone}


                      </td>






                      <td>
                        {
                          order.products?.length > 0 && (
                            <div>

                              {
                                order.products[0].name.length > 10
                                  ? order.products[0].name.substring(0, 10) + "..."
                                  : order.products[0].name
                              }


                              {
                                order.products.length > 1 && (
                                  <div className="more-products">
                                    +{order.products.length - 1} more
                                  </div>
                                )
                              }

                            </div>
                          )
                        }
                      </td>

                      <td>

                        ₹{order.total}

                      </td>







                      <td>


                        <span className={`status ${order.status}`}>

                          {order.status}

                        </span>


                      </td>






                      <td>

                        {order.date}

                      </td>






                      <td>



                        <button

                          className="edit-btn"

                          onClick={() => navigate(
                            `/admin/orders/${order.id}`
                          )}

                        >
                          <FaEye />

                        </button>





                        <button

                          className="delete-btn"

                          onClick={() => deleteOrder(order.id)}

                        >
                          <FaDeleteLeft />

                        </button>



                      </td>




                    </tr>


                  ))

              }



            </tbody>



          </table>



        </div>




      </div>



    </div>


  );


};


export default OrderList;