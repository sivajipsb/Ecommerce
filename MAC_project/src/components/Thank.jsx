import  "./Thanks.css"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import { useEffect } from "react"
import {cart_api,delete_api,getcart_api} from "../redux/cart/action"

export const Thank = ()=>{
   
    const cart=useSelector((store)=>store.cart.count)
const sivaji=useSelector((store)=>store.cart.sivaji)
const dispatch=useDispatch()
    const navigate= useNavigate()
    useEffect(()=>{
        // dispatch(api_id(id))
        dispatch(getcart_api())
              
          
      },[])
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
    return (
        <div>
           

            <div id="sthanks" onClick = {
                ()=>{
                    navigate("/")
                }
            }>
            <div id ="sbooking">
               <div id ="sconfir"><p >your payment is confirmed</p>
               <p>Your order details are !!!!!</p>
               </div>
               <div id="order">
                   
                   {sivaji.map(totallist)}
             
             <h3>Total Amount :<strong>Rs {total}</strong></h3>
                </div> 
            </div>
            </div>

           
        </div>
    )
}