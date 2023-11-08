import React from 'react'
import { useSelector } from 'react-redux'
import {Row,Col} from './react-bootstrap'


function Cart() {
  const cartProduct = useSelector((state)=>state.addToCart.cart)
  console.log(cartProduct);
  return (
    <Row>
      {cartProduct ? cartProduct?.map((product)=>{
        const {id,image,category,description,title,price}= product
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
                <h5 classNameName="card-price"> $ {price}</h5>
                <p classNameName="card-text" style={{ fontWeight: "100px" }}>
                  {description.slice(0, 180)}...
                </p>
                <h5 classNameName="card-price"> $ {price}</h5>
                <button 
                  type="btn"
                  classNameName="btn btn-primary mt-1"
                  style={{ marginLeft: "1rem" }}
                >
                  Cart
                </button>
                <button
                  classNameName="btn btn-primary mb-2"
                  style={{ marginLeft: "9rem" }}
                >
                  Wishlist
                </button>
              </div>
            </div>
          </Col>
        )
      }) :<h3>Empty cart</h3>}
    </Row>
  )
}

export default Cart