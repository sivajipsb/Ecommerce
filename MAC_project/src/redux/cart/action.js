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
export const deletecart =(e)=>{
    return {
        type:DELETECART,
        payload:e
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


export const put_api = (e,sivaji,value) => (dispatch) => {
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
        // dispatch(setproduct(data))
        .then((res) => {
                    console.log("put data  ", res.data);
                  
                    // getcart_api()
                    // console.log(dispatch(getcart_api()),"heeeeee")


    // }).catch((error) => {
    //     dispatch(errorstate(error))
    })
    // .then(setcart()).then(())
    dispatch(updateadd(x))
   
}

export const cart_api = (products) => (dispatch) => {

    // dispatch(loading())

    axios.post("https://macsivaji.herokuapp.com/cart",products)
        // dispatch(setproduct(data))
        .then((res) => {
                    // console.log("Add to cart mine  ", res.data);
                  
                    // getcart_api()
                    // console.log(dispatch(getcart_api()),"heeeeee")


    // }).catch((error) => {
    //     dispatch(errorstate(error))
    })
    // .then(setcart()).then(())
   
}


export const delete_api = (products) => (dispatch) => {

    // dispatch(loading())

     axios
    .delete(`https://macsivaji.herokuapp.com/cart/${products.id}`)
    .then((res) => {
    //   console.log("remove to cart", res.data);
    //   console.log(products.id,"dataid")
    })
    // .catch((error) => {
    //   console.log(error);
    // });

}
// 


export const setcart = (payload) => {
    return {
        type: SETCART,
        payload: payload
    }
}
export const getcart_api = () => (dispatch) => {

    // dispatch(loading())

    axios.get("https://macsivaji.herokuapp.com/cart").then(({ data }) => {
        dispatch(setcart(data))
        // console.log(dispatch(setcart(data)),"vasthunna")
    })

    //  }).catch((error) => {
    //     dispatch(errorstate(error))
    // })

}