import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { AuthContext } from "../../context/AuthContext";
import "./List.css";
import Sidebar from "./Sidebar"; 
import "./Sidebar.css"; 


const CartList = () => {


  const { cart } = useContext(CartContext);

  const { currentUser } = useContext(AuthContext);



  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
    <Sidebar /> 

    <div style={{ marginLeft: "200px", width: "100%", padding: "25px" }}>
      <div className="list-header">


        <h1>
          Cart List
        </h1>


        <span className="count-badge">
          {cart.length} Items
        </span>


      </div>




      <div className="table-box">



        <table className="common-table">


          <thead>

            <tr>

              <th>User Email</th>

              <th>Product Name</th>

              <th>Quantity</th>

            </tr>

          </thead>




          <tbody>


          {
            cart.length > 0 ? (

              cart.map((item)=>(


                <tr key={item.id}>


                  <td>

                    {
                      currentUser
                      ? currentUser.email
                      : "Guest User"
                    }

                  </td>



                  <td>
                    {item.name}
                  </td>



                  <td>

                    <span className="quantity">

                      {item.quantity}

                    </span>

                  </td>


                </tr>


              ))

            ) : (

              <tr>

                <td colSpan="3" className="empty">

                  No Cart Items Found

                </td>

              </tr>

            )
          }


          </tbody>


        </table>


      </div>


    </div>
    </div>

  );


};


export default CartList;