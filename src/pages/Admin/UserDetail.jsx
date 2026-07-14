import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Sidebar from "./Sidebar";
import "./Sidebar.css";
import "./UserDetail.css";


const UserDetail = () => {


  const location = useLocation();
  const navigate = useNavigate();


  const { user, index } = location.state;



  const [formData, setFormData] = useState({
    ...user
  });



  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

  };




  const saveUser = () => {


    const users = JSON.parse(
      localStorage.getItem("usersDB") || "[]"
    );



    users[index] = formData;



    localStorage.setItem(
      "usersDB",
      JSON.stringify(users)
    );



    alert("User Updated Successfully");


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
            User Details
          </h1>




          <div className="user-grid">



            <div>

              <label>
                Username
              </label>


              <input

                name="username"

                value={
                  formData.username || ""
                }

                onChange={handleChange}

              />

            </div>




            <div>

              <label>
                Email
              </label>


              <input

                name="email"

                value={
                  formData.email || ""
                }

                onChange={handleChange}

              />

            </div>





            <div>

              <label>
                Phone
              </label>


              <input

                name="phone"

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

                name="address"
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

            onClick={saveUser}

          >

            Save Changes

          </button>




        </div>



      </div>


    </div>


  );


};


export default UserDetail;