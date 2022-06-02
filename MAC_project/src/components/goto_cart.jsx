import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { Navbar } from "./navbar";
import "./goto.css"
import { deletecart } from "../redux/cart/action";
import { update } from "../redux/cart/action";
export const Goto_cart =()=>{
const cart=useSelector((store)=>store.cart)
const dispatch=useDispatch()
console.log(cart,"cart",typeof(cart))



    return (
      <>
      <Navbar/>
        <div id="flexy">
         
          <div id="ones">

          
            {cart.map((e,index)=>{
                return(
                    <div>
                    
                    <img src={e.image} height= "200px"/>
                    <p><b>{e.title}</b></p>
                    {/* <p><i>{e.description}</i></p> */}
                    <p><b> Price  : {e.price} RS</b></p>
                   
                     <button onClick={() => dispatch(update(e,cart,1))}  className="plus btn-outline-primary" >+</button>
                        <span style={{fontSize:"25px",margin:"0px 10px"}}>{e.quantity}</span>
                        <button onClick={() => dispatch(update(e,cart,-1))} className="plus btn-outline-primary">-</button>
                   {/* totalprice={e.price} */}
                  <br></br>
                   <button id="delete" onClick={()=>{
                      dispatch(deletecart(index))
                    }}> delete</button>
                   <div  style={{fontSize:"25px",width:"180px"}}>Total : {(+e.quantity)*(+(e.price))}</div>
                </div>
                
                // console.log(cart,"cart",typeof(cart))
                

                )
            })}
            </div>

{/* console.log(e,"eee") */}
            
            
            {/* {/* <div id="ship"> */}
                {/* <h1>Order Summary</h1>
                <h2>Total No Of Items:{cart.length}</h2>
              <h3>Total value:  {cart.reduce((accumulator,object)=>{
                    return accumulator+object.price
                       
                    
                },0)} Rs</h3> */} 
                 
                <Link to ="/checkout" style={{textDecoration:"none"}}> <button id="act">Click Here To Paymentpage</button></Link>
               
            </div>
               
        {/* </div> */}
        </>
    )
}