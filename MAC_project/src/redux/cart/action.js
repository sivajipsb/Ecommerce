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
        // dispatch(setproduct(data))
        .then((res) => {
                    console.log("put data  ", res.data);
                  
                    // getcart_api()
                    // console.log(dispatch(getcart_api()),"heeeeee")


    // }).catch((error) => {
    //     dispatch(errorstate(error))
    })
    // .then(setcart()).then(())
    dispatch(Updateadd(x))
   
}

export const Cart_api = (products) => (dispatch) => {

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


export const Delete_api = (products) => (dispatch) => {

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


export const Setcart = (payload) => {
    return {
        type: SETCART,
        payload: payload
    }
}
export const Getcart_api = () => (dispatch) => {

    // dispatch(loading())

    axios.get("https://macsivaji.herokuapp.com/cart").then(({ data }) => {
        dispatch(Setcart(data))
        // console.log(dispatch(setcart(data)),"vasthunna")
    })

    //  }).catch((error) => {
    //     dispatch(errorstate(error))
    // })

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