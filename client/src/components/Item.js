import React from 'react'
import "./style/item.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';
import { deleteProduct } from '../redux/slices/productSlice';
import { useDispatch } from 'react-redux';
const Item = ({ product }) => {
  const dispatch=useDispatch()
  return (

    <div className='card-list'>
      <Card className="card-general" style={{ width: '14rem' }}>
        <Card.Img variant="top" src={product.gallerie} />
        <Card.Body>
          <Card.Title>{product.ProdName}</Card.Title>
          <ReactStars
            count={product.rate}

            size={24}
            activeColor="#ffd700"
          />
          <p>
            {product.Price} TDN
          </p>
          <p>
            <Link to={'/editProduct'} state={{product:product}}>Edit</Link>
            <span onClick={()=>dispatch(deleteProduct({id:product._id}))}>Delete</span>
          </p>

        </Card.Body>
      </Card >












    </div>

  )
}

export default Item