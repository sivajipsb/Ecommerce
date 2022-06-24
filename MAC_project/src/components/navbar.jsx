// import {Link} from "react-router-dom"
// import "./navbar.css"
import { useDispatch,useSelector } from "react-redux";
import { Product } from "./product";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Cart_api,Delete_api,Getcart_api} from "../redux/cart/action"
import {  faCartShopping } from '@fortawesome/free-solid-svg-icons'
// import { useEffect, useState } from "react";
import axios from "axios";

// export const Navbar = ({setLog,log})=>{
//     const user = JSON.parse(localStorage.getItem("app")) || null;
//   const handlelog = () => {
//     localStorage.removeItem("app");
//     setLog(false)
//   }
//     const counting=useSelector((store)=>store.cart.count)
//     const sivaji=useSelector((store)=>store.cart.sivaji)
//     const dispatch = useDispatch()
//     // console.log(sivaji,"sivajinavbar")
//     // console.log(counting,"countme",counting.length)
//     // const answer=counting.length+sivaji.length
//     // const length=()=>{

//     // }
//     // const count=useSelector((store)=>store.cart)
// // const[set,setset]=useState([])


//     useEffect(()=>{
// //         axios.get( "http://localhost:5050/mobiles").then(({data})=>{
// //  console.log(data.length,"data")
// //         setset(data)
// //         })

//          dispatch(Getcart_api())
//     },[])
 
//     return (
//         <div>
         
           
               
           
//             {/* <h1>navbar</h1> */}
//             <div id="navbar">
//                {/* <h1>sivaji mart</h1> <div>sivaji mart</div> */}
//                 <div id="navbarone">
//                 <div ><Link to ="/" style={{textDecoration:"none"}}><b>Home</b></Link></div>
//                 <div ><Link to ="/products" style={{textDecoration:"none"}}><b>Products</b></Link></div>
//                 {/* <div><Link to ="/product"  style={{textDecoration:"none"}}><b>Products</b></Link></div> */}
               
//                 <div><Link to ="/gotocart" style={{textDecoration:"none"}}><b >CartPage</b></Link></div>
//                 {/* <div><Link to ="/signup" style={{textDecoration:"none"}}><b>Signup</b></Link></div> */}
//                 {/* <div><Link to ="/abouts" style={{textDecoration:"none"}}><b>signup</b></Link></div> */}
//                 </div>
//                  {/* <h1>gowtham sai shopping mall </h1> */}
//                 {/* <div><button style={{backgroundColor:"pink"}}> <FontAwesomeIcon icon={faCartShopping} /> ({counting.length})  </button></div> */}
//                 {/* <div><button style={{backgroundColor:"pink"}}> <FontAwesomeIcon icon={faCartShopping} /> ({set.length})  </button></div>    */}
//                 <div><button style={{backgroundColor:"pink"}}> <FontAwesomeIcon icon={faCartShopping} /> ({sivaji.length})  </button></div>
               
//                 {/* <div><button style={{backgroundColor:"pink"}}> <FontAwesomeIcon icon={faCartShopping} /> ({answer})  </button></div> */}
//                 {log ? 
//               <button className="btn btn-outline-primary ms-2" onClick={() => handlelog()}>{user.name} Logout</button> : 
//               <Link  to="/SignUp" className="btn btn-outline-primary ms-2">
//                 SignUp
//               </Link>
//               }
//             </div>

//             {/* <img src ="https://swall.teahub.io/photos/small/213-2136622_electronics-products.jpg" height="500px" width="100%"  /> */}
//             {/* <Product/> */}
//             <div style={{display:"flex",paddingRight:"50px"}}>
//               {/* {console.log(log)} */}
             
              
//               {/* <CartBtn></CartBtn> */}
//             </div>
//           </div>
//         // </div>

//     )
   
// }
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
      <nav  style ={{backgroundColor:""}}className="navbar navbar-expand-lg navbar-bright bg-bright shadow-sm">
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
                {/* <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/Ipads">
                    Ipad
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/About">
                    About
                  </Link>
                </li> */}
              </ul>
            </div>
            
            <div>
              <Link className="navbar-brand mc-Auto fw-bold" to="/">
              E-Store
              </Link>
            </div>
            <div style={{display:"flex",paddingRight:"50px"}}>
              {console.log(log)}
              <button style={{backgroundColor:"pink"}}> <FontAwesomeIcon icon={faCartShopping} /> ({sivaji.length})  </button>
               {/* <button className="btn btn-outline-primary ms-2" onClick={() => handlelog()}>{user.name} Logout</button> */}
              {log ? 
              <button className="btn btn-outline-primary ms-2" onClick={() => handlelog()}>{user.name} Logout</button> : 
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