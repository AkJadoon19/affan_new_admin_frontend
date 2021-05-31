import axios from "axios";
import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../Context/AuthContext";
import '../css/App.css'

function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { getLoggedIn } = useContext(AuthContext);
  const history = useHistory();

  async function login(e) {
    e.preventDefault();

    try {
      const loginData = {
        email,
        password,
      };

      await axios.post("http://localhost:5000/brand/login", loginData, {
        withCredentials:true
      });
      //await axios.post(
      //  "https://mern-auth-template-tutorial.herokuapp.com/auth/login",
      //  loginData
      //);
      await getLoggedIn();
      history.push("/");
    } catch (e) {
      if (e.response && e.response.data) {
        alert(e.response.data.errorMessage) // some reason error message
      }
      console.error(e);
    }
  }

  return (

    <div className="container">
      <h3 className="red-text">Login to Brand</h3>
      <div className="row ">
      <div className= "col s5 7 offset-7">
            <form className="form-group" onSubmit={login}>
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />
            <button type="submit" className="bf">Log in</button>
          </form>

              
            </div>
          </div>
      </div>

    );
      
  
}

export default AdminLogin;
