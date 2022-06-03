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
import {cart_api,delete_api} from "../redux/cart/action"
export const Product_id =()=>{

    const dispatch=useDispatch()
    const count=useSelector((store)=>store.count)
    const me=useSelector((store)=>store.single.single)
    const[cartBtn,setcartBtn]=useState("Add To Cart")
       
    var {id} =useParams();
    

   
    useEffect(()=>{
      dispatch(api_id(id))
            
            
        
    },[])

    const handleCart=(data)=>{
       
            if(cartBtn === 'Add To Cart'){
                dispatch(addcart(data))
                dispatch(cart_api(data))
        
                setcartBtn("Remove from cart")
            }
            else{
                dispatch(delItem(data))
                   
                    dispatch(delete_api(data))
                setcartBtn("Add To Cart")
            }
        
    }
    
    
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
                    <button  id="button" onClick={()=>handleCart(me)  }>{cartBtn}</button>
                    {/* <button  id="button" onClick={()=>handlecart(me)  }>Add to cart</button> */}
              
                   <Link to = "/gotocart" style={{textDecoration:"none"}}> <button  id="button" >gotocart</button></Link>

                </div>
            </div>
        </div>)}
        </>
    )
}