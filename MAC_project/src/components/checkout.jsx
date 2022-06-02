import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom"
// import { Link } from "react-router-dom";
import "./check.css"


export const Checkout = () => {
    const cart = useSelector((store)=>store.cart)
    // useSelector((store)=>store.cart)
    var total = 0;
    
    const totallist=(list)=>{
      let a = list.price
        total=total+(+a)*list.quantity;    
        return(
           <>
         
            
              {/* <h3><b>{list.title}</b>:<span> {a} Rs  <b>({list.quantity})</b></span></h3> */}
            
            {/* <span>₹ {a} <b>({item.quantity})</b></span> */}
            <br></br>
            </>
        
        )
        }
  return (
    <>
  
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
             <input type="string"></input>
             <br></br>
         </div>
         <div id="twoss">
         {cart.map(totallist)}
             
             <h2>Total  Amount Payable</h2>
           <b>Rs :{total}</b>
             
             <br></br>
             <br></br>
             <div style={{textDecoration:"none",marginTop:"250px"}}> <Link to ="/payment" style={{textDecoration:"none",marginTop:"500px"}}> <button id="act">Click Here To CheckoutPage</button></Link></div>
         </div>

     </div>


      
    </>
  );
};

// export default Checkout;
