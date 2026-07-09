import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { AuthContext } from "../../context/AuthContext";
import "./List.css";
import Sidebar from "./Sidebar";
import "./Sidebar.css";

const WishlistList = () => {

  const { wishlist } = useContext(CartContext);
  const { currentUser } = useContext(AuthContext);


  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar />

      <div style={{ marginLeft: "200px", width: "100%", padding: "25px" }}>

        <div className="list-header">

          <h1>
            Wishlist List
          </h1>

          <span className="count-badge">
            {wishlist.length} Items
          </span>

        </div>



        <div className="table-box">


          <table className="common-table">


            <thead>

              <tr>

                <th>User Email</th>

                <th>Product Name</th>

              </tr>

            </thead>



            <tbody>


              {
                wishlist.length > 0 ? (

                  wishlist.map((item) => (

                    <tr key={item.id}>


                      <td>
                        {currentUser
                          ? currentUser.email
                          : "Guest User"}
                      </td>


                      <td>
                        {item.name}
                      </td>


                    </tr>

                  ))

                ) : (

                  <tr>

                    <td colSpan="2" className="empty">

                      No Wishlist Items Found

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


export default WishlistList;