import { useState, useEffect } from "react"
import axios from "axios";
import { Link, useParams } from "react-router-dom"
import { Navbar } from "./navbar";
import "./product.css"
import { useSelector, useDispatch } from "react-redux";
import { setproduct } from "../redux/items/action";
import { api } from "../redux/items/action";
import { filterstate, filterProducts,sortHighToLow,sortLowToHigh } from "../redux/items/action";
import {Cart_api,Delete_api,Getcart_api} from "../redux/cart/action"
export const Product = () => {
    
    const { products, loading, error, filters } = useSelector((store) => store.items)
    
    
    const dispatch = useDispatch()
   

    const { id } = useParams();
    useEffect(() => {

        dispatch(api())
        dispatch(Getcart_api())


    }, [])
  

    const Filter = (item) => {
       
        dispatch(filterProducts(item))
      
    }


    function handlesort(term){
        if(term==="lh"){
        
           dispatch(sortLowToHigh());
        }
        if(term==="hl"){
           
            dispatch(sortHighToLow());
          }
    }



   


    return (
        <>
            {loading ? (<div><h1>...loading items</h1></div>) : error ? (<h1>some thing went wrong try again after some time ......</h1>) : (
                <div>

                    <div>
                        
                        <div id="one">

                        <div id="select">

                    <div>
                        <select onChange={(e)=>{Filter(e.target.value)}}>
            <option value="">Filter By Category</option>
            <option value="">All</option>
            <option value="Mobiles">Mobiles</option>
            <option value="Laptops">Laptops</option>
            <option value="Tv">Tvs</option>
            
          </select>
          </div>
          
                <div>
          <select onChange={(e)=>{ handlesort(e.target.value)}}>
            <option value="">Sort By Price</option>
         {/* <option value="">All</option> */}
                            
            <option value="lh">Low-High</option>
            <option value="hl">High-Low</option>
        
            
          </select>
          </div>
          </div>

                           


                           



                            <div id="grid">



                                {products?.filter((data) => data.category.includes(filters)).map((e) => {
                                    return (

                                        <div key={e.id}>
                                            <img src={e.image} height="200px" />
                                            <h4>{e.title}</h4>
                                            <p> <b>Rs:{e.price}</b></p>
                                            <Link to={`/product/${e.id}`}>
                                                <button  className="btn btn-outline-primary">Buy Now</button></Link>
                                        </div>

                                    )
                                })}



                            </div>
                        </div>
                    </div>


                </div>)}
        </>
    )
}