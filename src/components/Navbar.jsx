import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

function Navbar() {
    const cartProduct = useSelector((state)=>state.addToCart.cart)
    const wishListProduct = useSelector((state)=>state.addToWishList.wishList)
    console.log(wishListProduct);
    // console.log(cartProduct);
  return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container px-4 px-lg-5">
                    <Link to={'/'} style={{textDecoration:"none",color:"black"}}>E-kart</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                      
                        <form className="d-flex" style={{marginLeft:"auto"}}>
                            <Link to={'/cart'} className="btn btn-outline-dark" type="submit">
                            <i className="fa-solid fa-heart" style={{color: "#f22b07",marginRight:"5px"}}></i>
                                Cart
                                <span className="badge bg-dark text-white ms-1 rounded-pill">{cartProduct.length}</span>
                            </Link>
                            <Link to={'/wishlist'} className="btn btn-outline-dark" style={{marginLeft:"1rem"}} type="submit">
                            <i class="fa-solid fa-cart-shopping"></i>                            
                            Wishlist
                                <span className="badge bg-dark text-white ms-1 rounded-pill">{wishListProduct.length}</span>
                            </Link>
                        </form>
                        
                    </div>
                </div>
            </nav>
  )
    
}

export default Navbar