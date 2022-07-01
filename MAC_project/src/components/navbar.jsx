
import { useDispatch,useSelector } from "react-redux";
import { Product } from "./product";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Cart_api,Delete_api,Getcart_api} from "../redux/cart/action"
import {  faCartShopping } from '@fortawesome/free-solid-svg-icons'

import axios from "axios";

import React, { useState } from "react";
import { Link } from "react-router-dom";
// import CartBtn from "../buttons/CartBtn";



export function Navbar({setLog,log}) {
  const sivaji=useSelector((store)=>store.cart.sivaji)
  const user = JSON.parse(localStorage.getItem("app")) || null;
  const handlelog = () => {
    localStorage.removeItem("app");
    setLog(false)
  }
  return (
    <>
      <nav  style ={{backgroundColor:"#e7f1f0"}}className="navbar navbar-expand-lg navbar-bright bg-bright shadow-sm">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div style={{display: "flex",justifyContent: "space-between"}} className="collapse navbar-collapse" id="navbarSupportedContent">
            <div>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {/* <li className="nav-item">
                  <Link className="nav-link" to="/">
                  <span className=""></span>
                  </Link>
                </li> */}
                <li className="nav-item">
                  <Link className="nav-link active" to="/">
                  Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/products">
                    Products
                  </Link>
                </li>
                
              </ul>
            </div>
            
            <div>
              <Link className="navbar-brand mc-Auto fw-bold" to="/">
              E-Store
              </Link>
            </div>
            <div style={{display:"flex",paddingRight:"50px"}}>
              {console.log(log)}
              {/* <button style={{backgroundColor:"pink"}}> <FontAwesomeIcon icon={faCartShopping} /> ({sivaji.length})  </button> */}
              <button className="btn btn-outline-primary ms-2" > <Link className="nav-link active" to="/gotocart">
                  
                  <FontAwesomeIcon icon={faCartShopping} />  </Link> </button>

               {/* <button className="btn btn-outline-primary ms-2" onClick={() => handlelog()}>{user.name} Logout</button> */}
              {log ? 
             <Link to ="/products"     className="btn btn-outline-primary ms-2" onClick={() => handlelog()}>Logout</Link>
              // <Link  to="/SignUp" className="btn btn-outline-primary ms-2">
              //   SignUp
              // </Link> 
              :
              <Link  to="/SignUp" className="btn btn-outline-primary ms-2">
                SignUp
              </Link>
              }
              
              {/* <CartBtn></CartBtn> */}
            </div>
          </div>
      
        </div>
      </nav>
    </>
  );
}

// export default Navbar;