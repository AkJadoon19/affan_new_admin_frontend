import axios from "axios";
import React, {  useState } from "react";
import Title from "../frontcomponent/Title";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack} from "react-icons/io";
import { FaAlignRight } from "react-icons/fa";


const  AddStore = () => {
  const [sid, setSID] = useState(0);
  const [password, setPassword] = useState("");
  const [sloc, setlocation] = useState("");
  const [bid, setbid] = useState(0)

  async function register() {

    try {
      const registerData = {
        sid,
        password,
        sloc,
        bid,
      };

      await axios.post("http://localhost:5000/store/", registerData,{
        withCredentials:true
      });
      //await axios.post(
      // "https://mern-auth-template-tutorial.herokuapp.com/auth/",
      //  registerData
      //);
    } catch (e) {
      if (e.response && e.response.data) {
        alert(e.response.data.errorMessage) // some reason error message
      }
      console.error(e);
    }
  }

  return (
    <section className="py-5">
      <div className="row">
        <div className="col-10 mx-auto col-md-6 my-3">
          <Title title="Register a new Store" />
          <form
            className="mt-5"
            onSubmit={register}
         
          >
    {/* <div className="container" >
    <h3 className="red-text">Register a new Store</h3>
    <form className="form center-align" onSubmit={register}> */}
    
    <div className="form-group"> 
    <label for="Store ID">Store-ID:</label>
    <br/>
    <input
        type="Number"
        placeholder="Store ID"
        className="form-control"
        onChange={(e) => setSID(e.target.value)}
        value={sid}
        required
      />
      </div>

      <div className="form-group">
      <label for="Store ID">Password:</label>
      <br/>
      <input
        type="password"
        placeholder="Password"
        className="form-control"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        required
      />
      </div>


      <div className="form-group">
      <label for="Location">City:</label>
      <br/>
      <input
        type="text"
        placeholder="Store Location"
        className="form-control"
        onChange={(e) => setlocation(e.target.value)}
        value={sloc}
        required
      />
      </div>

    <div className="form-group">
    <label for="Brand ID">Brand-ID:</label>  
    <br/>
    <input
        type="Number"
        placeholder="Brand ID"
        className="form-control"
        onChange={(e) => setbid(e.target.value)}
        value={bid}
        required
      />
     </div> 
      <br />
      <button type="submit" className="bf">Register</button>
      <br/>
    </form>
  </div>
  </div>
  </section>
  )
}

export default AddStore


















// import axios from "axios";
// import React, {  useState } from "react";
// import Title from "../frontcomponent/Title";



// const  AddStore = () => {
//   const [sid, setSID] = useState(0);
//   const [password, setPassword] = useState("");
//   const [sloc, setlocation] = useState("");
//   const [bid, setbid] = useState(0)

//   async function register() {

//     try {
//       const registerData = {
//         sid,
//         password,
//         sloc,
//         bid,
//       };

//       await axios.post("http://localhost:5000/store/", registerData,{
//         withCredentials:true
//       });
//       //await axios.post(
//       // "https://mern-auth-template-tutorial.herokuapp.com/auth/",
//       //  registerData
//       //);
//     } catch (e) {
//       if (e.response && e.response.data) {
//         alert(e.response.data.errorMessage) // some reason error message
//       }
//       console.error(e);
//     }
//   }

//   return (

//     <div className="container" >
//     <Title title="Register a new store" />
//     <form className="form center-align" onSubmit={register}>
//     <input
//         type="Number"
//         placeholder="Store ID"
//         onChange={(e) => setSID(e.target.value)}
//         value={sid}
//       />
//       <div className="menu_button">
//       <input
//         type="password"
//         placeholder="Password"
//         onChange={(e) => setPassword(e.target.value)}
//         value={password}
//       />
//       </div>
//       <input
//         type="text"
//         placeholder="Store Location"
//         onChange={(e) => setlocation(e.target.value)}
//         value={sloc}
//       />
//     <input
//         type="Number"
//         placeholder="Brand ID"
//         onChange={(e) => setbid(e.target.value)}
//         value={bid}
//       />

//       <button type="submit">Register</button>
//     </form>
//   </div>
//   )
// }

// export default AddStore