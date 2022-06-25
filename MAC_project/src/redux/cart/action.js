export const ADDCART ="ADDCART"
export const DELETECART ="DELETECART"
export const DELITEM="DELITEM"
export const UPDATE="UPDATE"
export const SETCART="SETCART"
export const LOGIN ="LOGIN"
export const SIGNUP ="SIGNUP"
import axios from "axios"


export const Addcart =(payload)=>{
    return {
        type:ADDCART,
        payload:payload
    }
}
export const Deletecart =(e)=>{
    return {
        type:DELETECART,
        payload:e
    }
}
    export const DelItem=(data)=>{
        return{
            type:DELITEM,
            payload:data
        }
    
}
export const Updateadd = (data) => {
    return {
        type:UPDATE,
        payload:data
    }
}


export const Put_api = (e,sivaji,value) => (dispatch) => {
    let x = sivaji.map((ex) => {
        if(ex.id == e.id){
            if(ex.quantity == 1 && value == -1){
                ex.quantity = ex.quantity;
            }
            else{
                ex.quantity = ex.quantity+value;
            }
        }
    })
    

    axios.put(`https://macsivaji.herokuapp.com/cart/${e.id}`,e)
        
        .then((res) => {
                    


    
    })
  
    dispatch(Updateadd(x))
   
}

export const Cart_api = (products) => (dispatch) => {

    

    axios.post("https://macsivaji.herokuapp.com/cart",products)
       
        .then((res) => {
                    


   
    })
   
   
}


export const Delete_api = (products) => (dispatch) => {

   

     axios
    .delete(`https://macsivaji.herokuapp.com/cart/${products.id}`)
    .then((res) => {

    
    })
    

}



export const Setcart = (payload) => {
    return {
        type: SETCART,
        payload: payload
    }
}
export const Getcart_api = () => (dispatch) => {

   

    axios.get("https://macsivaji.herokuapp.com/cart").then(({ data }) => {
        dispatch(Setcart(data))
        
    })

    

}

export const LoginRequest = (user) => {
    return {
        type: LOGIN,
        payload: user
    }
}

export const SignupRequest = (user) => {
    return {
        type: SIGNUP,
        payload: user
    }
}