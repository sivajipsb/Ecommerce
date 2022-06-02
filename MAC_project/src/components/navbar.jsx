import {Link} from "react-router-dom"
import "./navbar.css"
import { useDispatch,useSelector } from "react-redux";
import { Product } from "./product";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {  faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from "react";
import axios from "axios";

export const Navbar = ()=>{
    const count=useSelector((store)=>store.cart)
// const[set,setset]=useState([])


//     useEffect(()=>{
//         axios.get( "http://localhost:5050/mobiles").then(({data})=>{
//  console.log(data.length,"data")
//         setset(data)
//         })
//     },[])
 
    return (
        <div>
         
           
               
           
            {/* <h1>navbar</h1> */}
            <div id="navbar">
               {/* <h1>sivaji mart</h1> <div>sivaji mart</div> */}
                <div id="navbarone">
                <div ><Link to ="/" style={{textDecoration:"none"}}><b>Products</b></Link></div>
                {/* <div><Link to ="/product"  style={{textDecoration:"none"}}><b>Products</b></Link></div> */}
                <div><Link to ="/abouts" style={{textDecoration:"none"}}><b>About</b></Link></div>
                <div><Link to ="/gotocart" style={{textDecoration:"none"}}><b>CartPage</b></Link></div>
                </div>
                 {/* <h1>gowtham sai shopping mall </h1> */}
                <div><button style={{backgroundColor:"pink"}}> <FontAwesomeIcon icon={faCartShopping} /> ({count.length})  </button></div>
                {/* <div><button style={{backgroundColor:"pink"}}> <FontAwesomeIcon icon={faCartShopping} /> ({set.length})  </button></div>    */}
               
            </div>

            {/* <img src ="https://swall.teahub.io/photos/small/213-2136622_electronics-products.jpg" height="500px" width="100%"  /> */}
            {/* <Product/> */}
        </div>

    )
   
}