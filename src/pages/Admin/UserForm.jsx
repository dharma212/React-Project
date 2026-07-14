import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useToast } from "../../context/ToastContext";
import Sidebar from "./Sidebar";
import "./Sidebar.css";
import "./UserDetail.css";


const UserForm = () => {


  const navigate = useNavigate();
  const { showToast } = useToast();
  const location = useLocation();



  const editUser = location.state?.user;
  const editIndex = location.state?.index;



  const isEditMode = Boolean(editUser);



  const [formData, setFormData] = useState(

    editUser ?

      { ...editUser }

      :

      {
        username: "",
        email: "",
        password: "",
        phone: "",
        address: "",
        role: "user"
      }

  );





  const handleChange = (e) => {


    const { name, value } = e.target;


    setFormData(prev => ({

      ...prev,

      [name]: value

    }));


  };





  const handleSubmit = (e) => {


    e.preventDefault();



    const users = JSON.parse(

      localStorage.getItem("usersDB") || "[]"

    );




    if (isEditMode) {


      users[editIndex] = formData;


      showToast(
        "User Updated Successfully"
      );


    }

    else {


      users.push(formData);


      showToast(
        "New User Added Successfully"
      );


    }





    localStorage.setItem(

      "usersDB",

      JSON.stringify(users)

    );



    navigate("/admin/user");


  };






  return (

    <div style={{
      display: "flex",
      minHeight: "100vh"
    }}>



      <Sidebar />



      <div className="user-detail-wrapper">



        <div className="user-detail-card">



          <h1>

            {
              isEditMode
                ?
                "Edit User"
                :
                "Add New User"
            }

          </h1>




          <form onSubmit={handleSubmit}>


            <div className="user-grid">





              <div>

                <label>
                  Username
                </label>


                <input

                  type="text"

                  name="username"

                  placeholder="Enter Username"

                  value={
                    formData.username
                  }

                  onChange={handleChange}

                  required

                />


              </div>







              <div>

                <label>
                  Email
                </label>


                <input

                  type="email"

                  name="email"

                  placeholder="Enter Email"

                  value={
                    formData.email
                  }

                  onChange={handleChange}

                  required

                />


              </div>







              <div>

                <label>
                  Password
                </label>


                <input

                  type="password"

                  name="password"

                  placeholder="Enter Password"

                  value={
                    formData.password || ""
                  }

                  onChange={handleChange}

                  required={!isEditMode}

                />


              </div>







              <div>

                <label>
                  Phone
                </label>


                <input

                  type="text"

                  name="phone"

                  placeholder="Enter Phone"

                  value={
                    formData.phone || ""
                  }

                  onChange={handleChange}

                />


              </div>


              <div>
                <label>
                  Address
                </label>

                <input

                  type="text"
                  name="address"

                  placeholder="Enter Address"
                  value={
                    formData.address || ""
                  }

                  onChange={handleChange}

                />
              </div>




              <div>

                <label>
                  Role
                </label>


                <select

                  name="role"

                  value={
                    formData.role || "user"
                  }

                  onChange={handleChange}

                >


                  <option value="user">
                    User
                  </option>


                  <option value="admin">
                    Admin
                  </option>


                </select>


              </div>




            </div>






            <button

              className="save-user-btn"

              type="submit"

            >


              {

                isEditMode

                  ?

                  "Update User"

                  :

                  "Add User"

              }


            </button>




          </form>



        </div>



      </div>



    </div>

  );


};


export default UserForm;