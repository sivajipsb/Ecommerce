import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios"
import {Link} from "react-router-dom"
import "./productid.css"
import { addcart,delItem } from "../redux/cart/action";
import { useDispatch,useSelector } from "react-redux";
import { Navbar } from "./navbar";
import { selectproduct,deleteproduct} from "../redux/items/action";
import { api_id } from "../redux/items/action";
import {cart_api,delete_api,getcart_api} from "../redux/cart/action"
import { useNavigate } from "react-router-dom";
export const Product_id =({log})=>{
    
    const dispatch=useDispatch()
    const count=useSelector((store)=>store.count)
    const me=useSelector((store)=>store.single.single)
    // const[cartBtn,setcartBtn]=useState("Add To Cart")
    const sivaji=useSelector((store)=>store.cart.sivaji)
       const navigate=useNavigate()
    var {id} =useParams();
    
// const sivajidata=()=>{
//     getcart_api()
// }
   
    useEffect(()=>{
      dispatch(api_id(id))
      dispatch(getcart_api())
            
        
    },[])

    var handleCart=(data)=>{
       
            if(cartBtn === 'Add To Cart'){
               
                // dispatch(addcart(data))
                dispatch(cart_api(data))

                // console.log(dispatch(addcart(data)),"sivaji vasthunna cart data ")
                // console.log(dispatch(getcart_api,"sivaji vasthunna get data "))
                
                // dispatch(getcart_api())
                // console.log(dispatch(getcart_api()))
              
        
                // setcartBtn("Remove from cart")
            }
            // else{
            //     // dispatch(delItem(data))
                   
            //         dispatch(delete_api(data))
            //         // dispatch(getcart_api())
            //     setcartBtn("Add To Cart")
            // }
        
    }
    // useEffect(()=>{
    //     dispatch(api_id(id))
    //     dispatch(getcart_api())
              
          
    //   })
    
    return (
        <>
        {Object.keys(me).length===0 ?(<div><h1>...loading</h1></div>):(
        <div>
            <Navbar/> 
            <div id="flex">
                <div id="image">
                    <img src={me.image} height= "400px"/>
                </div>
                <div id="two">
                    <p><b>{me.title}</b></p>
                    <p><b>{me.description}</b></p>
                    <p><b> Price  : {me.price} RS</b></p>
                    {log ? 
                            <button onClick={()=>handleCart(product)} className='btn btn-outline-primary my-5'>{cartBtn}</button>
                       :
                            <div>
                                 <button className='btn btn-outline-primary my-5'  data-bs-toggle="modal" data-bs-target="#thankyouModal">Add To Cart</button>
                                <div class="modal fade" id="thankyouModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">Login First</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        Please login to your account !
                                    
                                    </div>
                                    <div class="modal-footer">
                                        <button onClick={()=>{
                                            navigate("/login")
                                        }}  type="button" data-bs-dismiss="modal" class="btn btn-outline-primary">Go to Login</button>
                                    

                                    </div>
                                    </div>
                                </div>
                            </div>
                            </div> }
                    {/* <button  id="button" onClick={()=>handleCart(me)  }>{cartBtn}</button> */}
                    {/* <button  id="button" onClick={()=>handlecart(me)  }>Add to cart</button> */}
                    {/* <button  id="button" onClick={()=>handleCart(me)  }>{cartBtn}</button> */}
                   {/* <Link to = "/gotocart" style={{textDecoration:"none"}}> <button  id="button" >gotocart</button></Link> */}
                    {/* <button  id="button" onClick={()=> dispatch(cart_api(me))  }> <Link to = "/gotocart" style={{textDecoration:"none"}}>Add to cart</Link></button> */}
                </div>
            </div>
        </div>)}
        </>
    )
}