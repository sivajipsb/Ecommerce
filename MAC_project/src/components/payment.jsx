import styles from "./Checkout.module.css"
import { useNavigate } from "react-router-dom"

import wallets from "./images/wallets.jpg"
import upi from "./images/upi.png"
import paytm from "./images/paytm.png"
import hdfc from "./images/hdfc.png"
import { useSelector } from "react-redux"

export const Payment =() =>{
    const cart=useSelector((store)=>store.cart)
    const navigate=useNavigate()

    var total = 0;
const totallist=(list)=>{
  let a = list.price
    total=total+(+a)*list.quantity;    
    return(
       <>
     
        
          {/* <h3><b>{list.title}</b>:<span> {a} Rs  <b>({list.quantity})</b></span></h3> */}
        
      
        <br></br>
        </>
    
    )
} 
    return (
        <div>
            <div id= {styles.smiddle}>
            <div id={styles.sone}>
                <div id={styles.simagebox}>
                   <div><p><span id={styles.sarrow} onClick={()=>{
               navigate(-1)}}>
                   &larr;</span> Back</p></div> 
                 
                    
                    
                    </div>
                <div id={styles.schoose}><p>Choose a payment option</p></div>
 
                {/* <b>Total Items:{cart.length}</b>
                <h3>Total Amount:  {cart.reduce((accumulator,object)=>{
                    return accumulator+object.price */}

                       
                    
                {/* },0)} Rs</h3> */}
                {cart.map(totallist)}
             
             <h3>Total (INR) :<strong>Rs {total}</strong></h3>
               
            </div>
            <div id={styles.stwo}>

                <div id={styles.stwoone}>
                 <div id={styles.sflex}  onClick={()=>{
               navigate("/card") }}>
                        
                <div id={styles.swallet}><img src={wallets} alt="Logo" /></div>
                <div id={styles.stext}>Wallet <small>amazonpay,phonepe</small></div>
                <div id={styles.sgreat}>&gt;</div>
                </div>
                <div id={styles.sflex} onClick={()=>{
               navigate("/card") }}>
                        
                <div id={styles.swallet}><img src={upi} alt="Logo" /></div>
                <div id={styles.stext}>Upi payment <small>gpaypay,phonepe</small></div>
                <div id={styles.sgreat}>&gt;</div>
                </div>

                <div id={styles.sflex} onClick={()=>{
               navigate("/card") }}>
                        
                <div id={styles.swallet}><img src={paytm} alt="Logo" /></div>
                <div id={styles.stext}>Paytm Bank & wallet</div>
                <div id={styles.sgreat}>&gt;</div>
                 </div>

                 <div id={styles.sflex} onClick={()=>{
               navigate("/card") }}>
                        
                        <div id={styles.swallet}><img src={hdfc} alt="Logo" /></div>
                        <div id={styles.stext}> Hdfc bank - payZapp <small></small></div>
                        <div id={styles.sgreat}>&gt;</div>
                         </div>

                </div>
               
            </div>
            </div>
        </div>
    )
}