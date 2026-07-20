// import React, { useContext } from "react";
import "./list.css";
import { AuthContext } from "../../context/AuthContext";
import Sidebar from "./Sidebar";
import "./Sidebar.css";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "../../context/ToastContext";
import {
  FaTachometerAlt,
  FaBoxOpen,
  FaShoppingCart,
  FaHeart,
  FaUsers,
  FaStore,
  FaHome,
  FaTruck,
  FaShoppingBag,
  FaEye,
  FaPlusCircle,
} from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";

const UserList = () => {
  const { currentUser } = useContext(AuthContext)
  const { showToast } = useToast();
const [users, setUsers] = useState(
  JSON.parse(localStorage.getItem('usersDB') || '[]')
);
  const [editUser, setEditUser] = useState(null);
  const [showEdit, setShowEdit] = useState(false);
  const navigate = useNavigate();
  const deleteUser = (index) => {


    const deletedUser = users[index];


    const updatedUsers = users.filter(
      (_, i) => i !== index
    );


    setUsers(updatedUsers);


    localStorage.setItem(
      "usersDB",
      JSON.stringify(updatedUsers)
    );


    showToast(
      `${deletedUser.username} deleted successfully`,
      "warning"
    );


  };
  const updateUser = () => {

    const updatedUsers = users.map((user, index) =>
      index === editUser.index
        ? editUser.data
        : user
    );


    setUsers(updatedUsers);


    localStorage.setItem(
      "usersDB",
      JSON.stringify(updatedUsers)
    );


    setShowEdit(false);

  };
  // ✅ PUT VIEW FUNCTION HERE ALSO
  const viewUser = (user) => {

    alert(
      `
      Username: ${user.username || "Guest"}
      Email: ${user.email || "-"}
      Role: ${user.role || "user"}
      `
    );

  };

  return (

    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar />

      <div style={{ marginLeft: "200px", width: "100%", padding: "25px" }}>

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

                <th>Phone</th>

                <th>Address</th>

                <th>Role</th>

                <th>Status</th>

                <th>Action</th>


              </tr>


            </thead>




            <tbody>


              {

                users.length > 0 ? (

                 users.map((user, index) => (

<tr key={index}>


<td>
 {index + 1}
</td>



<td>
 {
   typeof user.username === "object"
     ? user.username.name
     : user.username || "--"
 }
</td>



<td>
 {
   typeof user.email === "object"
     ? user.email.email
     : user.email || "--"
 }
</td>



<td>
 {
   typeof user.phone === "object"
     ? user.phone.phone
     : user.phone || "--"
 }
</td>



<td>
 {
   typeof user.address === "object"
     ? "--"
     : user.address || "--"
 }
</td>



<td>
 {
   user.role || "--"
 }
</td>



<td>

<span className="active">
 Active
</span>

</td>



<td>

<button

className="view-btn"

onClick={() =>
navigate(
"/admin/user-form",
{
 state:{
   user:user,
   index:index
 }
}
)}

title="View User Details"

>

<FaEye />

</button>


<button

className="delete-btn"

onClick={() => deleteUser(index)}

title="Delete User"

>

<FaDeleteLeft />

</button>


<button

className="add-user-btn"

onClick={() => navigate("/admin/user-form")}

title="Add New User"

>

<FaPlusCircle />

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
    </div>

  );

};


export default UserList;