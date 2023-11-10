import React from 'react'
import { Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import { deleteWishList } from '../Redux/Actions/productAction';

function WishList() {
  const WishListProducts = useSelector((state)=>state.addToWishList.wishList)
  const dispatch = useDispatch()
  console.log(WishListProducts);
  return (
    <Row>
      {WishListProducts && WishListProducts.map((products)=>{
        const {id,title,image,description,price}=products
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
                  type="btn" onClick={()=>dispatch(deleteWishList(id))}
                  classNameName="btn btn-primary "
                  style={{ marginLeft: "6rem"}}
                >
                  Delete
                </button>
                
              </div>
            </div>
          </Col>

        )
      })}
    </Row>
  )
}

export default WishList