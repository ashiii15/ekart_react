import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../Redux/Actions/productAction";
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
    <Row className="mt-4 ms-4 mb-4">
      {products?.map((product) => {
        const { id, image, title, description } = product;
        return (
              <Col sm={12} md={8} lg={6} xl={3} key={id}>
                <div className="card mb-3" style={{width: "18rem"}}>
                  <img classNameName="card-img-top" style={{width:'280px',height:"320px"}} src={image} alt="Card image cap" />
                  <div classNameName="card-body">
                    <h5 classNameName="card-title">{title.slice(0,100)}</h5>
                    <p classNameName="card-text">
                      Some quick example text to build on the card title and make
                      up the bulk of the card's content.
                    </p>
                    <button  className="btn btn-primary">
                      Cart
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
