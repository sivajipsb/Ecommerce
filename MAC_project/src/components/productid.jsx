import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios"
import {Link} from "react-router-dom"
import "./productid.css"
import { addcart } from "../redux/cart/action";
import { useDispatch,useSelector } from "react-redux";
import { Navbar } from "./navbar";
import { selectproduct,deleteproduct} from "../redux/items/action";
import { api_id } from "../redux/items/action";

export const Product_id =()=>{

    const dispatch=useDispatch()
    const count=useSelector((store)=>store.count)
   
       
    const {id} =useParams();
    // const[me,setMe] =useState([])
    useEffect(()=>{
      dispatch(api_id(id))
            // return()=>{
            //     dispatch(deleteproduct(id))
            // }
            
        
    },[])
    const me=useSelector((store)=>store.single.single)
      console.log(me,"me")
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
                    <button  id="button" onClick={()=>dispatch(addcart(me))  }>Add to cart</button>
              
                   <Link to = "/gotocart" style={{textDecoration:"none"}}> <button  id="button" >gotocart</button></Link>

                </div>
            </div>
        </div>)}
        </>
    )
}