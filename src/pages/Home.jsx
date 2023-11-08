import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCart, setProducts } from "../Redux/Actions/productAction";
import { Col, Row } from "react-bootstrap";

function Home() {
  const products = useSelector((state) => state.allProducts.products);
  console.log(products);
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    let { data } = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => console.log(err));
    dispatch(setProducts(data));
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <Row className="mt-5 ms-3 mb-2" style={{ marginTop: "50px" }}>
      {products.map((product) => {
        const { id, description, image, title, price } = product;
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
                <button onClick={()=>dispatch(addCart(product))}
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
        );
      })}
    </Row>
  );
}

export default Home;
