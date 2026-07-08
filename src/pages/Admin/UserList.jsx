import React, { useContext } from "react";
import "./list.css";
import { AuthContext } from "../../context/AuthContext";


const UserList = () => {
const { currentUser }= useContext(AuthContext)

    const users = JSON.parse(localStorage.getItem('usersDB') || '[]');


  return (

    <div className="list-container">


      <div className="list-header">


        <h1>
          User Management
        </h1>


        <span className="count-badge">

          {users.length} Users

        </span>


      </div>





      <div className="table-box">


        <table className="common-table">


          <thead>

            <tr>

              <th>ID</th>

              <th>Name</th>

              <th>Email</th>

              <th>Role</th>

              <th>Status</th>

              <th>Action</th>


            </tr>


          </thead>




          <tbody>


          {

            users.length > 0 ? (

              users.map((user,index)=>(


                <tr key={index}>


                  <td>
                    {index + 1}
                  </td>



                  <td>

                    {user.name || "--"}

                  </td>




                  <td>

                    {user.email || "--" }

                  </td>



                <td>
                    {user.role || "--"}
                </td>



                  <td>

                    <span className="active">

                      Active

                    </span>

                  </td>





                  <td>


                    <button className="view-btn">

                      View

                    </button>


                    <button className="delete-btn">

                      Delete

                    </button>


                  </td>



                </tr>


              ))

            ) : (


              <tr>

                <td 
                colSpan="3"
                className="empty">

                  No Users Found

                </td>

              </tr>


            )

          }



          </tbody>


        </table>



      </div>



    </div>

  );

};


export default UserList;