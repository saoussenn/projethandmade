import React from "react";

import "./style/item.css"
//import { useDispatch, useSelector } from "react-redux"
import Item from "./Item";
import { useSelector } from "react-redux";


const ProductList = () => {


  const products = useSelector((state) => state.product?.products);



  return (
    <div className="card1">
    <h1>Popular gifts right now</h1>
    <div className='card-container'>
   
    
    {products?.map((product, i) => <Item key={i} product={product} /> )}


    </div>
    </div>
  )
};

export default ProductList;
