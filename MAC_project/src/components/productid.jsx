import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios"
import {Link} from "react-router-dom"
import "./productid.css"
import { Addcart,DelItem } from "../redux/cart/action";
import { useDispatch,useSelector } from "react-redux";
import { Navbar } from "./navbar";
import { selectproduct,deleteproduct} from "../redux/items/action";
import { api_id } from "../redux/items/action";
import {Cart_api,Delete_api,Getcart_api} from "../redux/cart/action"
import { useNavigate } from "react-router-dom";
export const Product_id =({log})=>{
    
    const dispatch=useDispatch()
    // const count=useSelector((store)=>store.count)
    const me=useSelector((store)=>store.single.single)
    
    // const sivaji=useSelector((store)=>store.cart.sivaji)
       const navigate=useNavigate()
    var {id} =useParams();
    

   
    useEffect(()=>{
      dispatch(api_id(id)) 
      dispatch(Getcart_api())
            
        
    },[])

    
    
    return (
        <>
        {Object.keys(me).length===0 ?(<div><h1>...loading</h1></div>):(
        <div>
            {/* <Navbar/>  */}
            <div id="flex">
                <div id="image">
                    <img src={me.image} height= "400px"/>
                </div>
                <div id="two">
                    <p><b>{me.title}</b></p>
                    <p><b>{me.description}</b></p>
                    <p><b> Price  : {me.price} RS</b></p>
                    {log ? 
                           
                             <Link to = "/products" style={{textDecoration:"none"}}  className="btn btn-outline-primary" onClick={()=> dispatch(Cart_api(me))  }>Add to cart</Link>
                       :
                            <div>
                                 <button className='btn btn-outline-primary my-5'  data-bs-toggle="modal" data-bs-target="#thankyouModal" >Add To Cart</button>
                                <div class="modal fade" id="thankyouModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">Sign up first</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        Please register to your account !
                                    
                                    </div>
                                    <div class="modal-footer">
                                        <button onClick={()=>{
                                            navigate("/signup")
                                        }}  type="button" data-bs-dismiss="modal" class="btn btn-outline-primary">Go to Sign up</button>
                                    

                                    </div>
                                    </div>
                                </div>
                            </div>
                            </div> }
                  
                </div>
            </div>
        </div>)}
        </>
    )
}