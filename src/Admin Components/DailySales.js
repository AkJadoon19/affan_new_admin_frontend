import React,{useContext, useState, useEffect} from "react";
import axios from 'axios';
import BrandContext from '../Context/BrandContexts';
import Title from "../frontcomponent/Title";

function DailySales() {
  
const {Brand} = useContext(BrandContext);
const {Stores} = useContext(BrandContext);
// const [Brand, setBrand] = useState([]);
// const [Stores, setStores ] = useState([])
// async function getBrands() {
//     const Brand = await axios.get("http://localhost:5000/brand/name"); 
//     const Store = await axios.get("http://localhost:5000/store/show");

    
//     //const loggedInRes = await axios.get(
//     //  "https://mern-auth-template-tutorial.herokuapp.com/auth/loggedIn"
//     //);
//     setBrand(Brand.data);
//     setStores(Store.data);
//   }

//   useEffect(() => {
//     getBrands();
//   }, []);

  function renderStores() {   
      return Stores.map((Store) => {
        if(Store.bid === Brand.bid)
        {
          return <tr>
                <td>{Store.sid}</td>
                <td>{Store.sloc}</td>
                <td>Sales</td>
            </tr>
        }
    
    });
  }
  
  return (
    <div>
     <Title title="Daily Sales" />
     <br/>
     <table id="customers">
        <thead >
          <tr>
              <th>Store Id</th>
              <th>Store Location</th>
              <th>Store Sales</th>
              
          </tr>
        </thead>
        <tbody >{renderStores()}</tbody>
          
      </table>
    </div>
  );
}

export default DailySales;

