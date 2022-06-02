import { SETPRODUCT, SELECTPRODUCT, DELETEPRODUCT, LOADING, ERRORSTATE,  FILTERPRODUCTS } from "./action";


const initstate = { products: [], loading: false, error: false, filters: "" }
export const itemreducer = (state = initstate, action) => {

    switch (action.type) {
        case SETPRODUCT:
            return { ...state, products: action.payload, loading: false, error: false }
        case LOADING:
            return { ...state, loading: true, error: false }
       
        case ERRORSTATE:
            return { ...state, loading: false, error: true }
        case FILTERPRODUCTS:
            return { ...state, loading: false, filters: action.payload }
            default:
                return state

      
    }
}



export const selectreducer = (state = { single: "" }, action) => {
    console.log(state)
    switch (action.type) {
        case SELECTPRODUCT:
            return { ...state, single:  action.payload  }
        // case DELETEPRODUCT:
        // return {  }
        default:
            return state

    }
}