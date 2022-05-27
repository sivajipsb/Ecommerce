export const  SETPRODUCT="ADDPRODUCT"
export const SELECTPRODUCT="SELECETPRODUCT"
export const DELETEPRODUCT="DELETEPRODUCT"
export const GETPRODUCT="GETPRODUCT"
import axios from "axios"

export const setproduct=(payload)=>{
    return {
        type:SETPRODUCT,
        payload:payload
    }
}
export const selectproduct=(payload)=>{
    return {
        type:SELECTPRODUCT,
        payload:payload
    }
}




export const deleteproduct=()=>{
    return {
        type:DELETEPRODUCT
        
    }
}

export const api=()=>(dispatch)=>{
    axios.get("https://macsivaji.herokuapp.com/products").then(({data})=>{
        dispatch(setproduct(data))

        
    })

}

export const api_id=(id)=>(dispatch)=>{
    axios.get(`https://macsivaji.herokuapp.com/products/${id}`).then(({data})=>{
        dispatch(selectproduct(data))

        
    })

}
