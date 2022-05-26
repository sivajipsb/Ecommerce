// import { Product } from "../components/product";
import { ADDCART,DELETECART } from "./action";

export const reducer =(state,action)=>{
    console.log(state)
    
    switch(action.type)
    {
        case ADDCART:
                 
                
                return {...state,count:[...state.count,action.payload]}
      
                case DELETECART:
                   
                   
                 return {...state,count:[...state.count.filter((counts,index)=>index!==action.payload)]}
                
                
                     
            
            
        default:
            return state
    }
}