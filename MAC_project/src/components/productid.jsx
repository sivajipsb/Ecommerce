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

export const Product_id =({log})=>{

    const dispatch=useDispatch()
    const count=useSelector((store)=>store.count)
    const me=useSelector((store)=>store.single.single)
    const[cartBtn,setcartBtn]=useState("Add To Cart")
       
    var {id} =useParams();
    // const[me,setMe] =useState([])

   
    useEffect(()=>{
      dispatch(api_id(id))
            // return()=>{
            //     dispatch(deleteproduct(id))
            // }
            
        
    },[])

    const handleCart=(data)=>{
        // if(log){
            if(cartBtn === 'Add To Cart'){
                dispatch(addcart(data))
                setcartBtn("Remove from cart")
            }
            else{
                dispatch(delItem(data))
                setcartBtn("Add To Cart")
            }
        //    }
    }
    
    // const {
       
    //     title,price,image,decsription
    //        } = me;

    // const handlecart = (product) => {
    //     axios
    //       .post("http://localhost:5050/mobiles", product)
    //       .then((res) => {
    //         console.log("Add to cart", res.data.product);
    //       })
    //       .catch((error) => {
    //         console.log(error);
    //       });
    //   };
    // const me=useSelector((store)=>store.single.single)

     
    //   console.log(me,"me")
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
                    <button  id="button" onClick={()=>handleCart(me) }>{cartBtn}</button>
                    {/* <button  id="button" onClick={()=>handlecart(me)  }>Add to cart</button> */}
              
                   <Link to = "/gotocart" style={{textDecoration:"none"}}> <button  id="button" >gotocart</button></Link>

                </div>
            </div>
        </div>)}
        </>
    )
}