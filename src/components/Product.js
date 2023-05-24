import React, { useState, useEffect } from 'react';
import { Text } from '@chakra-ui/react'
import { useDispatch } from 'react-redux';
import { add } from '../store/cartSlice';

function Product() {
const dispatch=useDispatch();
  const [products, getProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=15')
      .then(data => data.json())
      .then(result => getProducts(result));
  }, []);
   
  const addingToCart=(product)=>{
dispatch(add(product))
  }

  return (
    <div className="row row-cols-1 row-cols-md-3 g-4 marg" >
      {products.map(product => (
        <div className="col" key={product.id}>
          <div className="card h-100">
            <img style={{height:'300px',objectFit:'cover',}} src={product.image} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">{product.description}</p>
              <Text color='blue.600' fontSize='2xl' >
             <b>Price: </b> ${product.price}
            </Text>
              <button onClick={()=>addingToCart(product)} type="button" className="btn btn-primary btn-sm">Add To Cart</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Product;
