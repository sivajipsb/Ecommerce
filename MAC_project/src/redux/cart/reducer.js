// import { Product } from "../components/product";
import { ADDCART,DELETECART,DELITEM } from "./action";

export const reducer =(state={count:[]},action)=>{
    console.log(state)
    
    switch(action.type)
    {
        case ADDCART:
                 
                
                return {...state,count:[...state.count,action.payload]}
      
                case DELETECART:
                   
                   
                 return {...state,count:[...state.count.filter((counts,index)=>index!==action.payload)]}
                
                case DELITEM:
            return {...state,count:[...state.count.filter((x)=>{
                return x.id !== action.payload.id
            })]}
            case "UPDATEADD":
                return {...state};
                     
            
            
        default:
            return state
    }
}