import { AuthContextProvider } from "./Context/AuthContext";
import Home from './Admin Components/Home'
import axios from "axios";
import './css/App.css'
import { BrandContextProvider } from "./Context/BrandContexts";
import background from "./images/defaultBcg.jpeg";

axios.defaults.withCredentials = true;

const  App = () => {
  
  return (
    <div >
    <BrandContextProvider>
    <AuthContextProvider>
      <Home/>
    </AuthContextProvider>
    </BrandContextProvider>
    </div>
  )
}

export default App; 
