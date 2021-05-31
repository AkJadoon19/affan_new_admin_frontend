import React,{useContext} from 'react';
import { Link } from 'react-router-dom';
import AuthContext from "../Context/AuthContext";
const Navbar = () => {
  const {loggedIn} = useContext(AuthContext);
  return (
    <nav >
      <div className="bord">
      <div className="navbar" >
        <ul  >
        {loggedIn === false && (
          <>
          <li><Link to="/Login">Login</Link></li>
          </>
        )}
        {loggedIn === true && (
          <>
          <div class="navbar">
          <Link to ="/AddStore">AddStore</Link>
          <Link to ='/DashBoard'>Main</Link>
          <Link to ='/DailySales'>DailySales</Link>
          <Link to ='/Stores'>Stores</Link>
          </div>
          </>
        )}
        </ul>
      </div>
      </div>
    </nav> 
  )
}



export default Navbar

