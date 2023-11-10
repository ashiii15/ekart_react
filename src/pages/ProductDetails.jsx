import axios from 'axios'
import React, { useEffect, } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { deleteCart, emptyproduct, selectedProduct } from '../Redux/Actions/productAction'

function ProductDetails() {
  const products = useSelector((state)=>state.selectedProducts.selectedProduct)
  const {id,image,title,description,price} = products
  console.log(products);
  const dispatch = useDispatch()
  const {productId} = useParams()
  const fetchProducts = async()=>{
    const {data} = await axios.get(`https://fakestoreapi.com/products/${productId}`).catch((err)=>{console.log(err)})
    dispatch(selectedProduct(data))
  }
useEffect(()=>{
  if(productId && productId !=="")
  fetchProducts()
return(()=>{
  dispatch(emptyproduct())
})
},[productId])
return (
  <div className='grid mt-5 ms-5'>
    <div className='row'>
      <div className='col' key={id}>
        <img  style={{width:"400px",height:"500px"}}src={image} alt={title}></img>
      </div>
      <div className='col' style={{marginRight:"9rem"}}>
        <h1>{title}</h1>
        <h2>${price}</h2>
        <h5>{description}</h5>
        <button className='btn btn-primary mt-4'>BuyNow</button>

      </div>
    </div>
  </div>
)

}


export default ProductDetails