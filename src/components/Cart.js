import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { Text } from '@chakra-ui/react'
import { remove } from '../store/cartSlice';



function Cart() {
   const dispatch=useDispatch()
  const removeFromCart=(id)=>{
dispatch(remove(id))
  }
  const productsCart=useSelector(state=>state.cart)
  
  return (
    <div>
    <h1 style={{textAlign:'center'}}>This is my Cart!</h1>
    <div className="row row-cols-1 row-cols-md-5 g-4 marg" >

    {productsCart.map(product => (
      <div className="col" key={product.id}>
        <div className="card h-100">
          <img style={{height:'300px',objectFit:'cover',}} src={product.image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text">{product.description}</p>
            <Text color='blue.600' fontSize='2xl' >
           <b>Price: </b> ${product.price}
          </Text>
          <button type="button" className="btn btn-danger btn-sm" onClick={()=>removeFromCart(product.id)}>Remove from Cart</button>

          </div>
        </div>
      </div>
    ))}
</div>
    </div>
  
  )
}

export default Cart