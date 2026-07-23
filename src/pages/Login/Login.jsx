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
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);


  const navigate = useNavigate();


  const { login } = useContext(AuthContext);

  const { showToast } = useToast();





  const handleLogin = (e) => {

    e.preventDefault();

    setLoading(true);
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


      login(
        result.user,
        rememberMe
      );


      showToast(
        "Login Successfully"
      );

      setTimeout(() => {

        navigate("/");
      }, 1000);


    }
    else {

      setError(result.message);

      setLoading(false);

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
            <div className="login-options">

              <div className="remember-box">

                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />

                <label>
                  Remember me
                </label>

              </div>
              <a className="forgot">

                Forgot Password?

              </a>
            </div>

            {
              error &&

              <p className="form-error">

                {error}

              </p>

            }







            {/* <a className="forgot">

              Forgot Password?

            </a> */}






            <button
              type="submit"
              disabled={loading}
            >


              {
                loading ? (

                  <>
                    <span className="loader"></span>
                    Logging in...
                  </>

                ) : (

                  "Login"

                )

              }


            </button>



          </form>



        </div>



      </div>


    </div>


  )


}


export default Login;