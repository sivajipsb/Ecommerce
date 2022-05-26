import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios"
import {Link} from "react-router-dom"
import "./productid.css"
import { addcart } from "../redux/action";
import { useDispatch,useSelector } from "react-redux";
import { Navbar } from "./navbar";


export const Product_id =()=>{

    const dispatch=useDispatch()
    const count=useSelector((store)=>store.count)
         
    const {id} =useParams();
    const[me,setMe] =useState([])
    useEffect(()=>{
        axios.get(`https://macsivaji.herokuapp.com/products/${id}`).then(({data})=>{
            
            setMe(data)
            console.log(data)
            
        })
    },[])
    return (
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
        </div>
    )
}