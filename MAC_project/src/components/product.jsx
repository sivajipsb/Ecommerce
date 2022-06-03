import { useState, useEffect } from "react"
import axios from "axios";
import { Link, useParams } from "react-router-dom"
import { Navbar } from "./navbar";
import "./product.css"
import { useSelector, useDispatch } from "react-redux";
import { setproduct } from "../redux/items/action";
import { api } from "../redux/items/action";
import { filterstate, filterProducts } from "../redux/items/action";
export const Product = () => {

    const { products, loading, error, filters } = useSelector((store) => store.items)
    const dispatch = useDispatch()
    // const[data,setdata]=useState([])
    // const[state,setstate]=useState(products)

    const { id } = useParams();
    useEffect(() => {

        dispatch(api())


    }, [])
    // const products=useSelector((store)=>store.items.products)
    
    console.log(products, "products")

    const Filter = (item) => {
        // const updatedlist = products.filter((x) => x.category === item);
        dispatch(filterProducts(item))
        // console.log(updatedlist, "update")
    }




    // : error ? (<Error error="Somthing Went Wrong" />) :

   


    return (
        <>
            {loading ? (<div><h1>...loading items</h1></div>) : error ? (<h1>some thing went wrong try again after some time ......</h1>) : (
                <div>

                    <div>
                        <Navbar />
                        <div id="one" >


                            <button onClick={() => { Filter("") }}>All</button>
                            <button onClick={() => { Filter("Mobiles") }}>Mobiles</button>
                            <button onClick={() => { Filter("Tv") }} >Tvs</button>
                            <button onClick={() => { Filter("Laptops") }}>Laptops</button>
                            




                            <div id="grid">



                                {products?.filter((data) => data.category.includes(filters)).map((e) => {
                                    return (

                                        <div key={e.id}>
                                            <img src={e.image} height="200px" />
                                            <h4>{e.title}</h4>
                                            <p> <b>Rs:{e.price}</b></p>
                                            <Link to={`/product/${e.id}`}>
                                                <button id="button">Buy Now</button></Link>
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