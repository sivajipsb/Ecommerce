import   "./payment.css"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import wallets from "./images/wallets.jpg"
import upi from "./images/upi.png"
import paytm from "./images/paytm.png"
import hdfc from "./images/hdfc.png"
import {Cart_api,Delete_api,Getcart_api} from "../redux/cart/action"
import { useDispatch, useSelector } from "react-redux"

export const Payment =() =>{
    // const cart=useSelector((store)=>store.cart.count)
    const Cart=useSelector((store)=>store.cart.cart)
    const navigate=useNavigate()
    const dispatch=useDispatch()
    useEffect(()=>{
        // dispatch(api_id(id))
        dispatch(Getcart_api())
              
          
      },[])
      
    var total = 0;
const totallist=(list)=>{
  let Items = list.price
    total=total+(+Items)*list.quantity;    
    return(
       <>
    
        <br></br>
        </>
    
    )
} 
    return (
        <div>
            <div id= "smiddle">
            <div id="sone">
                <div id="simagebox">
                   <div><p><span id="sarrow" onClick={()=>{
               navigate(-1)}}>
                   &larr;</span> Back</p></div> 
                 
                    
                    
                    </div>
                <div id="schoose"><p>Choose a payment option</p></div>
 
              
                {Cart.map(totallist)}
             
             <h3>Total (INR) :<strong>Rs {total}</strong></h3>
               
            </div>
            <div id="stwo">

                <div id="stwoone">
                 <div id="sflex"  onClick={()=>{
               navigate("/card") }}>
                        
                <div id="swallet"><img src={wallets} alt="Logo" /></div>
                <div id="stext">Wallet <small>amazonpay,phonepe</small></div>
                <div id="sgreat">&gt;</div>
                </div>
                <div id="sflex" onClick={()=>{
               navigate("/card") }}>
                        
                <div id="swallet"><img src={upi} alt="Logo" /></div>
                <div id="stext">Upi payment <small>gpaypay,phonepe</small></div>
                <div id="sgreat">&gt;</div>
                </div>

                <div id="sflex" onClick={()=>{
               navigate("/card") }}>
                        
                <div id="swallet"><img src={paytm} alt="Logo" /></div>
                <div id="stext">Paytm Bank & wallet</div>
                <div id="sgreat">&gt;</div>
                 </div>

                 <div id="sflex" onClick={()=>{
               navigate("/card") }}>
                        
                        <div id="swallet"><img src={hdfc} alt="Logo" /></div>
                        <div id="stext" >Hdfc bank - payZapp <small></small></div>
                        <div id="sgreat">&gt;</div>
                         </div>

                </div>
               
            </div>
            </div>
        </div>
    )
}