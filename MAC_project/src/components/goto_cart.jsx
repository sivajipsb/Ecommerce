import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import { Navbar } from "./navbar";
import "./goto.css"
import { Deletecart, Put_api } from "../redux/cart/action";

import {Cart_api,Delete_api,Getcart_api} from "../redux/cart/action"
export const Goto_cart =()=>{
const cart=useSelector((store)=>store.cart.count)
const sivaji=useSelector((store)=>store.cart.sivaji)
const dispatch=useDispatch()
// console.log(cart,"cart",typeof(cart))
var total = 0;
const totallist=(list)=>{
  let a = list.price
    total=total+(+a)*list.quantity;    
    return(
       <>
     
        
          <h3><b>{list.title}</b>:<span> {a} Rs  <b>({list.quantity})</b></span></h3>
        
      
        <br></br>
        </>
    
    )
} 
useEffect(()=>{
  // dispatch(api_id(id))
  dispatch(Getcart_api())
  
        
    
},[])
    return (
      <>
      {/* <Navbar/> */}


      
           
        <div id="flexy">
         
          <div id="ones">

          
            {sivaji.map((e,index)=>{
                return(
                    <div>
                    
                    <img src={e.image} height= "200px"/>
                    <p><b>{e.title}</b></p>
                  
                    <p><b> Price  : {e.price} RS</b></p>
                   
                     {/* <button onClick={() => dispatch(update(e,cart,1))}   >+</button>
                        <span style={{fontSize:"25px",margin:"0px 10px"}}>{e.quantity}</span>
                        <button onClick={() => dispatch(update(e,cart,-1))} >-</button> */}

                <button onClick={() => dispatch(Put_api(e,sivaji,1))}   className="plus btn-outline-primary" >+</button>
                <span style={{fontSize:"25px",margin:"0px 10px"}}>{e.quantity}</span>
                <button onClick={() => dispatch(Put_api(e,sivaji,-1))}  className="plus btn-outline-primary">-</button>
                  
                  <br></br>
                   <button id="delete" className="btn btn-outline-primary" onClick={()=>{
                      dispatch(Deletecart(e))
                      dispatch(Delete_api(e))
                    }}> Delete</button>
                   <div ><h3>Total : {(+e.quantity)*(+(e.price))}</h3></div>
                   

                   
                </div>
                
             
              

                )
            })}
            </div>


            
            
             <div id="ship">
              
                 {sivaji.map(totallist)}
             
                <h3>Total Amount :<strong>Rs {total}</strong></h3>
                
                <br></br>
                <br></br>
              
                <Link to ="/checkout" style={{textDecoration:"none"}}> <button  disabled={sivaji.length==0}id="act">Click Here To CheckoutPage</button></Link>
               
            </div>
           
               
         </div> 
         <div id="meem">

        
         {/* <Link to ="/checkout" style={{textDecoration:"none",marginLeft:"700px"}}> <button id="act">Click Here To CheckoutPage</button></Link> */}
         </div>
        </>
    )
}