export const SETPRODUCT = "ADDPRODUCT"
export const SELECTPRODUCT = "SELECETPRODUCT"
export const DELETEPRODUCT = "DELETEPRODUCT"
export const GETPRODUCT = "GETPRODUCT"
export const LOADING = "LOADING"
export const ERRORSTATE = "ERRORSTATE"

export const FILTERPRODUCTS = "FILTERPRODUCTS"
import axios from "axios"

export const filterstate = (products) => {
    dispatch({
        type: "FILTER",
        payload: products



    })
}


export const filterproducts = (payload) => {
    return {
        type: FILTERPRODUCTS,
         payload
    }
}
    




export const filterProducts = (cat) => (dispatch) => {

    dispatch(filterproducts(cat))
}




export const setproduct = (payload) => {
    return {
        type: SETPRODUCT,
        payload: payload
    }
}
export const selectproduct = (payload) => {
    return {
        type: SELECTPRODUCT,
        payload: payload
    }
}
export const loading = () => {
    return {
        type: LOADING
    }
}

export const errorstate = () => {
    return {
        type: ERRORSTATE
    }
}




export const deleteproduct = () => {
    return {
        type: DELETEPRODUCT

    }
}

export const api = () => (dispatch) => {

    dispatch(loading())

    axios.get("http://localhost:5050/products").then(({ data }) => {
        dispatch(setproduct(data))


    }).catch((error) => {
        dispatch(errorstate(error))
    })

}

export const api_id = (id) => (dispatch) => {
    axios.get(`http://localhost:5050/products/${id}`).then(({ data }) => {
        dispatch(selectproduct(data))


    })

}
