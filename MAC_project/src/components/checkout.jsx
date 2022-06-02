import React from "react";
import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";
import "./check.css"


export const Checkout = () => {
    const state = useSelector((store)=>store.cart)
    // useSelector((store)=>store.cart)
    var total = 0;
   
  return (
    <>
     checkout
     <div id="main">
         <div id="oness">
            <b>Name</b>
             <br></br>
             <input type="string" required="true"></input>
             <br></br>
             <b>Phone Number</b>
             <br></br>
             <input></input>
             <br></br>
             <b>Pincode</b>
             <br></br>
             <input></input>
             <br></br>
             <b>Address</b>
             <br></br>
             <input></input>
             <br></br>
             <b>State</b>
             <br></br>
             <input type="submit"></input>
             <br></br>
         </div>
         <div id="twoss"></div>
     </div>


      
    </>
  );
};

// export default Checkout;
