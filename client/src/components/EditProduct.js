import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { updateProduct } from '../redux/slices/productSlice';
import "./style/EditProduct.css";

const EditProduct = () => {
  const location = useLocation();
  const { product } = location.state
  const [newProduct, setNewProduct] = useState({})
  const dispatch = useDispatch()
  const navigate = useNavigate();

  console.log(product)

  const handleChange = (id) => {
    dispatch(updateProduct({ id, product: newProduct }));

  };
  return (
    <div className="container-fluid">
      <div className="row">
        <input
          name="ProdName "
          type="text"
          onChange={(e) => setNewProduct({ ...newProduct, ProdName: e.target.value })}
          defaultValue={product.ProdName}
        />

        <p>
          <input
            name="prodType"
            type="string"
            onChange={(e) => setNewProduct({ ...newProduct, ProdType: e.target.value })}
            defaultValue={product.ProdType}
          />

        </p>

        <p>
          <input
            name="price"
            type="number"
            onChange={(e) => setNewProduct({ ...newProduct, Price: e.target.value })}
            defaultValue={product?.Price}
          />
        </p>

        <p>
          <input
            name="rate"
            type="number"
            onChange={(e) => setNewProduct({ ...newProduct, rate: e.target.value })}
            defaultValue={product.rate}
          />
        </p>

        <p>
          <input
            name="quantity"
            type="number"
            placeholder="quantity"
            onChange={(e) => setNewProduct({ ...newProduct, quantity
              : e.target.value })}
            defaultValue={product.quantity
            }
          />
        </p>

     



      </div>

      



      <div className="row">
        <input
          name="gallerie"
          type="text"
          onChange={(e) => setNewProduct({ ...newProduct, gallerie: e.target.value })}
          defaultValue={product.gallerie}
        />
      </div>


      <div className="row">

        <textarea required="" cols="60" rows="10" placeholder="Description du product"
          onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
          defaultValue={product.description}>
        </textarea>
      </div>
      
      <div className="row">
        <h3>Numéro pour commander:
          <input
            name="telephone"
            type="number"
            placeholder="Numéro telephone "
            onChange={(e) => setNewProduct({ ...newProduct, telephone: e.target.value })}
            defaultValue={product.telephone}
          />
        </h3>
      </div>
      <input
        list="categorie"
        name="type"
        type="text"
        placeholder="type"
        required
        onChange={(e) => setNewProduct({ ...newProduct, type: e.target.value })}
        defaultValues={product.type}
      />

      <datalist id="categorie">
        <option>Kits for Embriodery Birth</option>
        <option> Kits for Engagement&Mariage</option>
        <option> Kits for Character&Portrait  </option>
        <option> Kits for Clothes </option>
        <option> Kits for Décoration </option>
      </datalist>
  



      
      <button type="submit" className='btn_modal'
        onClick={async () => {
          const response = await window.confirm('vous etes sur de modifier ?')
          if (response) {
            handleChange(product?._id);
            setTimeout(() => {
              alert('Votre annonce a été mis à jour')
              navigate('/')
            }, 1200);
          }
        }
        }
      >
        Modifier
      </button>
    </div>
  )
}


export default EditProduct