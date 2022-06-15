import  "./Thanks.css"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import { useEffect } from "react"
import {Cart_api,Delete_api,Getcart_api,} from "../redux/cart/action"
import axios from "axios"

export const Thank = ()=>{
   
    const cart=useSelector((store)=>store.cart.count)
const sivaji=useSelector((store)=>store.cart.sivaji)
const dispatch=useDispatch()
    const navigate= useNavigate()
    useEffect(()=>{
        // dispatch(api_id(id))
        dispatch(Getcart_api())
        // dispatch(delete_cart())
        // axios
        // .delete("https://macsivaji.herokuapp.com/cart")
      
          
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
                    // dispatch(delete_api(sivaji))
                    // navigate("/")
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