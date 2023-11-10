import React from 'react'
import { Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import { addWishList, deleteCart } from '../Redux/Actions/productAction';


function Cart() {
  const cartProduct = useSelector((state)=>state.addToCart.cart)
  const dispatch = useDispatch()
  console.log(cartProduct);
 const addCartToWishList = (product)=>{
  dispatch(addWishList(product))
  dispatch(deleteCart(product.id))
  
 }
  return (
   
    <Row>
      {cartProduct.length === null ? <h3 className='mt-5' style={{textAlign:'center'}}>Empty cart</h3>  : cartProduct.map((product)=>{
      const {id,image,description,title,price}= product
      return (
        <Col sm={9} md={6} lg={4} xl={3}>
          <div className="card mb-3" key={id} style={{ width: "18rem" }}>
            <img
              classNameName="card-img-top"
              style={{ width: "250px", height: "300px" }}
              src={image}
              alt={title}
            />
            <div classNameName="card-body">
              <h5 classNameName="card-title">{title}</h5>
              <p classNameName="card-text" style={{ fontWeight: "100px" }}>
                {description.slice(0, 180)}...
              </p>
              <h5 classNameName="card-price"> $ {price}</h5>
              <button 
                type="btn" onClick={()=>dispatch(deleteCart(id))}
                classNameName="btn btn-primary mt-1"
                style={{ marginLeft: "1rem" }}
              >
                Delete
              </button>
              <button onClick={()=>addCartToWishList(product)}
                classNameName="btn btn-primary mb-2"
                style={{ marginLeft: "4rem" }}
              >
                Wishlist
              </button>
            </div>
          </div>
        </Col>
      )
    })}
    </Row>
  )
}

export default Cart