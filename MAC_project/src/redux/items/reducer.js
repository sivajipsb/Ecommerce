import { SETPRODUCT,SELECTPRODUCT, DELETEPRODUCT } from "./action";


const initstate={products:[]}
export const itemreducer =(state=initstate,action)=>{
    
    switch(action.type)
    {
        case SETPRODUCT:
            return {...state,products:action.payload}

            default:
            return state
    }
}



export const selectreducer=(state={single:{}},action)=>{
    console.log(state)
    switch(action.type)
    {
        case SELECTPRODUCT:
            return {...state,single:{...action.payload}}
        case DELETEPRODUCT:
        return {  }
            default:
                return state

    }
}