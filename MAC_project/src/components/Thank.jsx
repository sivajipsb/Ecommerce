import  "./Thanks.css"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";

export const Thank = ()=>{
    const cart=useSelector((store)=>store.cart)
    const navigate= useNavigate()
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
                   
                   {cart.map(totallist)}
             
             <h3>Total Amount :<strong>Rs {total}</strong></h3>
                </div> 
            </div>
            </div>

           
        </div>
    )
}