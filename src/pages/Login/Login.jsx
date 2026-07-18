import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaEnvelope,
  FaLock
} from "react-icons/fa";

import { loginUser } from "../../utils/localStorage";
import { AuthContext } from "../../context/AuthContext";
import { useToast } from "../../context/ToastContext";

import "./Login.css";


const Login = () => {


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");



  const navigate = useNavigate();


  const { login } = useContext(AuthContext);

  const { showToast } = useToast();





  const handleLogin = (e) => {

    e.preventDefault();


    setError("");



    if (!email) {

      setError("Email is required");

      return;

    }



    if (!password) {

      setError("Password is required");

      return;

    }




    const result = loginUser(
      email,
      password
    );





    if (result.success) {


      login(result.user);


      showToast(
        "Login Successfully "
      );


      navigate("/");


    }
    else {


      setError(result.message);


    }



  };






  return (


    <div className="login-page">


      <div className="login-card">



        {/* LEFT SIDE */}


        <div className="login-welcome">


          <h1>
            Hello, Welcome!
          </h1>


          <p>
            Don't have an account?
          </p>



          <Link to="/signup">
            Register
          </Link>



        </div>






        {/* LOGIN FORM */}


        <div className="login-form">


          <h1>
            Login
          </h1>



          <form onSubmit={handleLogin}>



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

              <FaLock />


              <input

                type="password"

                placeholder="Password"

                value={password}

                onChange={(e) => setPassword(e.target.value)}

              />


            </div>






            {
              error &&

              <p className="form-error">

                {error}

              </p>

            }







            <a className="forgot">

              Forgot Password?

            </a>






            <button type="submit">

              Login

            </button>




          </form>



        </div>



      </div>


    </div>


  )


}


export default Login;