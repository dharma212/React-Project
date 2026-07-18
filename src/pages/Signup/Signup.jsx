import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaLock
} from "react-icons/fa";


import {
  registerUser
} from "../../utils/localStorage";


import {
  useToast
} from "../../context/ToastContext";


import "./Signup.css";




const Signup = () => {


  const navigate = useNavigate();


  const { showToast } = useToast();




  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [phone, setPhone] = useState("");

  const [password, setPassword] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");


  const [error, setError] = useState("");








  const handleSignup = (e) => {


    e.preventDefault();


    setError("");




    if (!name) {

      setError("Name is required");

      return;

    }



    if (!email) {

      setError("Email is required");

      return;

    }



    if (!phone) {

      setError("Phone number is required");

      return;

    }




    if (!password) {

      setError("Password is required");

      return;

    }



    if (!confirmPassword) {

      setError("Confirm password is required");

      return;

    }




    if (password !== confirmPassword) {


      setError(
        "Password and Confirm Password must be same"
      );


      return;


    }






    const result = registerUser({

      name,

      email,

      phone,

      password

    });







    if (result.success) {


      showToast(
        "Account Created Successfully "
      );



      navigate("/login");



    }
    else {


      setError(result.message);


    }





  };








  return (


    <div className="signup-page">


      <div className="signup-card">





        {/* FORM */}



        <div className="signup-form">


          <h1>
            Create Account
          </h1>




          <form onSubmit={handleSignup}>




            <div className="input-box">

              <FaUser />


              <input

                type="text"

                placeholder="Full Name"

                value={name}

                onChange={(e) => setName(e.target.value)}

              />


            </div>








            <div className="input-box">

              <FaEnvelope />


              <input

                type="email"

                placeholder="Email Address"

                value={email}

                onChange={(e) => setEmail(e.target.value)}

              />


            </div>








            <div className="input-box">

              <FaPhone />


              <input

                type="text"

                placeholder="Mobile Number"

                value={phone}

                onChange={(e) => setPhone(e.target.value)}

              />


            </div>








            <div className="input-box">

              <FaLock />


              <input

                type="password"

                placeholder="Password"

                value={password}

                onChange={(e) => setPassword(e.target.value)}

              />


            </div>









            <div className="input-box">

              <FaLock />


              <input

                type="password"

                placeholder="Confirm Password"

                value={confirmPassword}

                onChange={(e) => setConfirmPassword(e.target.value)}

              />


            </div>






            {
              error &&

              <p className="form-error">

                {error}

              </p>

            }





            <button type="submit">

              Register

            </button>



          </form>



        </div>








        {/* RIGHT SIDE */}



        <div className="signup-welcome">


          <h1>

            Welcome Back!

          </h1>



          <p>

            Already have an account?

          </p>



          <Link to="/login">

            Login

          </Link>



        </div>





      </div>


    </div>


  )



}


export default Signup;