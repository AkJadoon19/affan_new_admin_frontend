import axios from "axios";
import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../Context/AuthContext";

function LogOutBtn() {
  const { getLoggedIn } = useContext(AuthContext);

  const history = useHistory();

  async function logOut() {
    await axios.get ("http://localhost:5000/brand/logout" );
    // await axios.get(
    //   "https://swift-sense-admin.herokuapp.com/brand/logout"
    // );
    await getLoggedIn();
    history.push("/");
  }

  return <button onClick={logOut} className="bf">Log out</button>;
}

export default LogOutBtn;