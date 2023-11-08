import React from 'react'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container px-4 px-lg-5">
                <a className="navbar-brand" href="#!">E-kart</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  
                    <form className="d-flex" style={{marginLeft:"auto"}}>
                        <button className="btn btn-outline-dark" type="submit">
                        <i className="fa-solid fa-heart" style={{color: "#f22b07",marginRight:"5px"}}></i>
                            Cart
                            <span className="badge bg-dark text-white ms-1 rounded-pill">0</span>
                        </button>
                        <button className="btn btn-outline-dark" style={{marginLeft:"1rem"}} type="submit">
                        <i class="fa-solid fa-cart-shopping"></i>                            Wishlist
                            <span className="badge bg-dark text-white ms-1 rounded-pill">0</span>
                        </button>
                    </form>
                    
                </div>
            </div>
        </nav>
  )
}

export default Navbar