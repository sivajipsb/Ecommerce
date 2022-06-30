import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import { Navbar } from "./navbar";
import "./goto.css"
import { Deletecart, Put_api } from "../redux/cart/action";

import {Cart_api,Delete_api,Getcart_api} from "../redux/cart/action"
// export const Goto_cart =()=>{
// const cart=useSelector((store)=>store.cart.count)
// const sivaji=useSelector((store)=>store.cart.sivaji)
// const dispatch=useDispatch()
// // console.log(cart,"cart",typeof(cart))
// var total = 0;
// const totallist=(list)=>{
//   let a = list.price
//     total=total+(+a)*list.quantity;    
//     return(
//        <>
     
        
//           <h3><b>{list.title}</b>:<span> {a} Rs  <b>({list.quantity})</b></span></h3>
        
      
//         <br></br>
//         </>
    
//     )
// } 
// useEffect(()=>{
//   // dispatch(api_id(id))
//   dispatch(Getcart_api())
  
        
    
// },[])
//     return (
//       <>
//       {/* <Navbar/> */}


      
           
//         <div id="flexy">
         
//           <div id="ones">

          
//             {sivaji.map((e,index)=>{
//                 return(
//                     <div>
                    
//                     <img src={e.image} height= "200px"/>
//                     <p><b>{e.title}</b></p>
                  
//                     <p><b> Price  : {e.price} RS</b></p>
                   
//                      {/* <button onClick={() => dispatch(update(e,cart,1))}   >+</button>
//                         <span style={{fontSize:"25px",margin:"0px 10px"}}>{e.quantity}</span>
//                         <button onClick={() => dispatch(update(e,cart,-1))} >-</button> */}

//                 <button onClick={() => dispatch(Put_api(e,sivaji,1))}   className="plus btn-outline-primary" >+</button>
//                 <span style={{fontSize:"25px",margin:"0px 10px"}}>{e.quantity}</span>
//                 <button onClick={() => dispatch(Put_api(e,sivaji,-1))}  className="plus btn-outline-primary">-</button>
                  
//                   <br></br>
//                    <button id="delete" className="btn btn-outline-primary" onClick={()=>{
//                       dispatch(Deletecart(e))
//                       dispatch(Delete_api(e))
//                     }}> Delete</button>
//                    <div ><h3>Total : {(+e.quantity)*(+(e.price))}</h3></div>
                   

                   
//                 </div>
                
             
              

//                 )
//             })}
//             </div>


            
            
//              <div id="ship">
              
//                  {sivaji.map(totallist)}
             
//                 <h3>Total Amount :<strong>Rs {total}</strong></h3>
                
//                 <br></br>
//                 <br></br>
              
//                 <Link to ="/checkout" style={{textDecoration:"none"}}> <button  disabled={sivaji.length==0}id="act">Click Here To CheckoutPage</button></Link>
               
//             </div>
           
               
//          </div> 
//          <div id="meem">

        
//          {/* <Link to ="/checkout" style={{textDecoration:"none",marginLeft:"700px"}}> <button id="act">Click Here To CheckoutPage</button></Link> */}
//          </div>
//         </>
//     )
// }

// import React from 'react'
// import {useSelector} from "react-redux"
// import { useDispatch } from 'react-redux';
// import { Link } from 'react-router-dom';
// import { delItem } from '../redux/actions/index';
// import {updateaddd} from "../redux/actions/index";


export function Goto_cart() {

const sivaji=useSelector((store)=>store.cart.sivaji)

   
  //  console.log(state,"state")
    const dispatch=useDispatch()
    const handleClose=(item)=>{
        // dispatch(delItem(item))
        dispatch(Deletecart(item))
      dispatch(Delete_api(item))
    }
    useEffect(()=>{
         // dispatch(api_id(id))
         dispatch(Getcart_api())
        
              
          
       },[])
    const cartItems =(cartItem)=>{
        return (
            <div className="px-4 my-4 bg-light" key = {cartItem.id} >
                <div style={{display:"flex",justifyContent:"space-around",alignItems:"center",height:'220px'}}>
                    <div style={{width:"200px"}}>
                        <img height="200px" width="180px" src={cartItem.image} alt="" />
                    </div>
                    <div style={{width:"15%"}}>
                        <h3>{cartItem.title}</h3>
                        <p className='lead fw-bold'>Rs : {cartItem.price}</p>
                    </div>
                    <div>
                        <button onClick={() => dispatch(Put_api(cartItem,sivaji,1))}  className="plus btn-outline-primary" >+</button>
                        <span style={{fontSize:"25px",margin:"0px 10px"}}>{cartItem.quantity}</span>
                        <button onClick={() =>  dispatch(Put_api(cartItem,sivaji,-1))} className="plus btn-outline-primary">-</button>

                    </div>
                    <div  style={{fontSize:"25px",width:"180px"}}>Total : {(+cartItem.quantity)*(+(cartItem.price))}</div>
                    <div><button onClick={()=>handleClose(cartItem)} className='btn btn-outline-primary ms-2 float-end' >Delete</button></div>
                </div>
            </div>
        )
    }
    const button=()=>{
        return(
            <div className="container">
                <div className="row">
                    <Link to="/checkout" className='btn btn-outline-primary mb-5 w-25 mx-auto'>Proceed To Checkout</Link>
                </div>
            </div>
        )
    }
    const emptyCart = () => {
        return ( 
            <div className="px-4 my-5 bg-light rounded-3" >
                <div className="container py-4">
                    <div className="row">
                        <h1>
                            Cart is Empty
                        </h1>
                    </div>
                </div>
            </div>
        )
    }
  return (
  <>
  {sivaji.length===0 && emptyCart() }
  {sivaji.length !==0 && sivaji.map(cartItems)}
  {sivaji.length !==0 && button()}

</>
    
 
  )
}

// export default Cart