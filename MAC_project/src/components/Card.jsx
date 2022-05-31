import { useNavigate } from "react-router-dom"
import  styles from "./card.module.css"

export const Card = ()=>{
    const navigate=useNavigate()
    return(
        <div>

            <div id ={styles.spayment}>

            
            <div id={styles.scard}>
            <h1>Enter Details</h1>
            <hr></hr>
            <div id={styles.sdet}>
            <span><b id={styles.ssiva}> ENTER CARD NUMBER </b></span>

            <br></br>
            {/* <br></br> */}
            <input type="number"  min="10" max="16" id={styles.sinp} placeholder="Enter card number" />
            {/* alert("Payment is confirmed") */}
            <br></br>
            <div id={styles.splace}>
                
            <div><span><b>EXPIRY</b></span>
            <br></br>
            <input type="date" id={styles.sinputs} placeholder="MM/YYYY" />
            </div>
            <div>
            <span><b>CVV</b></span>
            <br></br>
            <input type="number" min="3" max="3" id={styles.sinputs} placeholder="CVV" />

            </div>


           
            </div>
            <button id={styles.spaypal} onClick= { ()=>{


                alert("Payment is confirmed")
                navigate("/thank")
            }}>Pay</button>
            </div>
            </div>
            </div>
           
           
        </div>
    )
}