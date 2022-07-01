import { SETPRODUCT, SELECTPRODUCT, DELETEPRODUCT, LOADING, ERRORSTATE,  FILTERPRODUCTS,SORT_HIGH_TO_LOW,SORT_LOW_TO_HIGH } from "./action";


const initstate = { products: [], loading: false, error: false, filters: "" }
export const itemreducer = (state = initstate, action) => {
    //   console.log()
    // console.log(state,"changeditesm",state.products.length)
    switch (action.type) {

       
        case SETPRODUCT:
            return { ...state, products: action.payload, loading: false, error: false }
        case LOADING:
            return { ...state, loading: true, error: false }
       
        case ERRORSTATE:
            return { ...state, loading: false, error: true }
        case FILTERPRODUCTS:
            return { ...state, loading: false, filters: action.payload }
            case SORT_LOW_TO_HIGH:
                return { ...state, products: state.products.sort((a, b) => a.price - b.price) };
            case SORT_HIGH_TO_LOW:
                return { ...state, products: state.products.sort((a, b) => b.price - a.price) };
            default:
                return state

      
    }
}



export const selectreducer = (state = { single: "" }, action) => {
    // console.log(state)
    switch (action.type) {
        case SELECTPRODUCT:
            return { ...state, single:  action.payload  }
        case DELETEPRODUCT:
        return {  }
        default:
            return state

    }
}