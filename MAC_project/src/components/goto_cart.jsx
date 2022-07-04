import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import { Navbar } from "./navbar";
import "./goto.css"
import { Deletecart, Put_api } from "../redux/cart/action";

import {Cart_api,Delete_api,Getcart_api} from "../redux/cart/action"



export function Goto_cart() {

const Cart=useSelector((store)=>store.cart.sivaji)

   
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
                        <button onClick={() => dispatch(Put_api(cartItem,Cart,1))}  className="plus btn-outline-primary" >+</button>
                        <span style={{fontSize:"25px",margin:"0px 10px"}}>{cartItem.quantity}</span>
                        <button onClick={() =>  dispatch(Put_api(cartItem,Cart,-1))} className="plus btn-outline-primary">-</button>

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
  {Cart.length===0 && emptyCart() }
  {Cart.length !==0 && Cart.map(cartItems)}
  {Cart.length !==0 && button()}

</>
    
 
  )
}

// export default Cart