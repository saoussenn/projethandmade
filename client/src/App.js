import "./App.css";
//import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
//import filter from './components/filter';
//import AjoutProduct from './components/AddProduct';
import AddProduct from './components/AddProduct';
import { Routes, Route } from "react-router-dom";
import React, { useEffect,useState } from "react";
import PrivateRoute from "./privateRoute/PrivateRoutes";
//import Dashboard from "./components/Dashboard";
import { useDispatch } from "react-redux";
import { allProduct } from "./redux/slices/productSlice";
import Navbar from "./components/Navbar";
import EditProduct from "./components/EditProduct"



function App() {
const dispatch= useDispatch()
  useEffect(() => {
    dispatch (allProduct())
  
    
  }, [dispatch])
  

  const [text,setText] = useState("");

  return (
<div className="app">
     <Navbar setText={setText}/>


    <Routes>
    
      <Route path="/" element={<Home />} >  </Route>      
      <Route path="/add" element={<AddProduct/>} >  </Route>
      <Route path="/editProduct" element={<EditProduct/>} >  </Route>


      <Route element={<PrivateRoute />}>
        

        
        

      
        
      </Route>
    </Routes>
    </div>
  );
}

export default App;
