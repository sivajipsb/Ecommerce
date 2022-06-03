export const ADDCART ="ADDCART"
export const DELETECART ="DELETECART"
export const DELITEM="DELITEM"
export const UPDATE="UPDATE"
export const SETCART="SETCART"
import axios from "axios"
export const addcart =(payload)=>{
    return {
        type:ADDCART,
        payload:payload
    }
}
export const deletecart =(index)=>{
    return {
        type:DELETECART,
        payload:index
    }
}
    export const delItem=(data)=>{
        return{
            type:DELITEM,
            payload:data
        }
    
}
export const updateadd = (data) => {
    return {
        type:UPDATE,
        payload:data
    }
}
export const update = (e,cart,value) => (dispatch) => {
    console.log(cart,"sivajicart")
    let x = cart.map((ex) => {
        if(ex.id == e.id){
            if(ex.quantity == 1 && value == -1){
                ex.quantity = ex.quantity;
            }
            else{
                ex.quantity = ex.quantity+value;
            }
        }
    })
    dispatch(updateadd(x))
}



export const cart_api = (products) => (dispatch) => {

    // dispatch(loading())

    axios.post("https://macsivaji.herokuapp.com/cart",products)
        // dispatch(setproduct(data))
        .then((res) => {
                    console.log("Add to cart", res.data);
                  
                  

    }).catch((error) => {
        dispatch(errorstate(error))
    })

}

export const delete_api = (products) => (dispatch) => {

    // dispatch(loading())

     axios
    .delete(`https://macsivaji.herokuapp.com/cart/${products.id}`)
    .then((res) => {
      console.log("remove to cart", res.data);
      console.log(products.id,"dataid")
    })
    .catch((error) => {
      console.log(error);
    });

}


export const setcart = (payload) => {
    return {
        type: SETCART,
        payload: payload
    }
}
export const getcart_api = () => (dispatch) => {

    // dispatch(loading())

    axios.get("https://macsivaji.herokuapp.com/cart").then(({ data }) => {
        dispatch(cart(data))


    }).catch((error) => {
        dispatch(errorstate(error))
    })

}