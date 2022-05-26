import { useState,useEffect } from "react"
import axios from "axios";
import {Link, useParams} from "react-router-dom"
import { Navbar } from "./navbar";
import "./product.css"
export const Product =()=>{

    const[data,setdata]=useState([])
    const[state,setstate]=useState(data)
    
    const {id} =useParams();
    useEffect(()=>{
        axios.get("https://macsivaji.herokuapp.com/products").then(({data})=>{
            setdata(data)
            setstate(data)
            console.log(data)
            
        })
    },[])



    const Filter =(item)=>{
        const updatedlist=data.filter((x)=>x.category===item);
        setstate(updatedlist)

    }
    function handlesort(term){
        if(term==="lh"){
          let x=data.sort((a,b)=> a.price-b.price)
        //   console.log(x)
        //    setdata([...x])
           setstate([...x])
        }
        if(term==="hl"){
            let x=data.sort((a,b)=> b.price-a.price)
            console.log(x)
            //  setdata([...x])
            setstate([...x])
          }
    }
   
    
    return (
        <div>
          
            <div>
                  <Navbar/> 
                  <div id="one" >
                 
            
            <button  onClick={()=>setstate(data)}>All</button>
            <button onClick={()=>Filter("mobiles")}>Mobiles</button>
            <button onClick={()=>Filter("tv")}>Tvs</button>
            <button onClick={()=>Filter("laptops")}>Laptops</button>
            <button onClick={()=>handlesort("lh")}>lowtohigh</button>
            <button onClick={()=>handlesort("hl")}>hightolow</button>

            
            

           
            <div id="grid">
                
            
            {state.map((e)=>{
                return (
                    <>
                    <div>
                        <img src={e.image} height="200px"/>
                        <h4>{e.title}</h4>
                        <p> <b>Rs:{e.price}</b></p>
                        <Link to = {`/product/${e.id}`}>
                            <button id="button">Buy Now</button></Link>
                    </div>
                    </>
                )
            })}
            </div>
            </div>
            </div>
          
           
         </div>
    )
}