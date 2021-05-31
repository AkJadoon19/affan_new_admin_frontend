import React,{ useContext } from 'react'
import Navbar from './Navbar'
import { BrowserRouter,Route } from 'react-router-dom'
import Main from './Main'
import AddStore from './AddStore'
import DailySales from './DailySales'
import Store from './Store'
import Chart from './Chart'
import AuthContext from "../Context/AuthContext";
import AdminLogin from './AdminLogin'
import Logout from './logout'
import Footer from '../frontcomponent/Footer'
import BrandContext from "../Context/BrandContexts"
import Hero from '../frontcomponent/Hero'


function Home() {
  const {Brand} = useContext(BrandContext)
  const { loggedIn } = useContext(AuthContext);  
  return (
      
      <BrowserRouter>
       
        <div>
        <Navbar/> 

        <switch>
        {loggedIn === false && (
          <>
            <Route path='/Login' component={AdminLogin}/>
          </>
        )
        }
        {loggedIn === true &&(
          <>
          <Hero title="SwiftSense" max="true">
          <h3 className="red-text text-darken-2"> Welcome {Brand.bname}</h3> 
          </Hero>
          <Route path ='/DailySales' component={DailySales} />
          <Route path ='/AddStore' component={AddStore} />
          <Route path ='/DashBoard' component={Main} />
          <Route path ='/Stores' component={Store}/> 
          <Route path ='/Graph' component={Chart}/>
          <Logout/>
          <Footer/>
          
          </>
        )

        }

        </switch>
       
        </div>
      </BrowserRouter>
  );
}

export default Home;