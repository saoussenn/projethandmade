import React, { useState } from "react";
import "./style/AddProduct.css"
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/slices/productSlice";
import Button from "react-bootstrap/Button"
import { useNavigate } from "react-router-dom";



const AjoutProduct = () => {
const [product, setProduct] = useState({});
const dispatch = useDispatch();
const navigate= useNavigate();

 
  return (
    <div className="modal-formulaire">
   

      <div className="formulaire">
        <h3> Add Product</h3>
        <input
          //onChange={(e) => handlechange(e) }
          type="text"
          name="ProdName"
          placeholder="Product Name"
          onChange={(e) => setProduct({ ...product,ProdName: e.target.value })}
        ></input>

        <input
         // onChange={(e) => handlechange(e)}
          type="text"
          name="ProdType"
          placeholder="Product Type"
          onChange={(e) => setProduct({ ...product,ProdType: e.target.value })}
        ></input>

        <input
          //onChange={(e) => handlechange(e)}
          type="text"
          name="gallerie"
          placeholder="Product gallerie"
          onChange={(e) => setProduct({ ...product,gallerie: e.target.value })}
        ></input>

        <input
          type="number"
          name="rate"
          placeholder="Product Rate"
          onChange={(e) => setProduct({ ...product,rate: e.target.value })}
        ></input>
        <input
        type="number"
        name="quantity"
        placeholder="Product quantity"
        onChange={(e) => setProduct({ ...product,quantity: e.target.value })}
      ></input>
        


        <input
         
         type="number"
          name="Price"
          placeholder="Product Price"
          onChange={(e) => setProduct({ ...product,Price: e.target.value })}
        ></input>

        <Button type="submit"
          onClick={() => {dispatch(addProduct(product));
            setTimeout(() => {
              navigate("/")
            }, 1200);
          }}
          >Ajouter</Button>
           
           
        
      </div>
    </div>
  );
};

export default AjoutProduct;