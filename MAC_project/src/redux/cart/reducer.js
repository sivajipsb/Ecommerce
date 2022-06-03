// import { Product } from "../components/product";
import { ADDCART,DELETECART,DELITEM,UPDATE } from "./action";

const count=[];
export const reducer =(state=count,action)=>{
    console.log(state)
    
    switch(action.type)
    {
        case ADDCART:
                 
                
            return [
                ...state,
                action.payload
            ]
      
                case DELETECART:
                   
                   
                 return [...state.filter((counts,index)=>index!==action.payload)]
                
            //     case DELITEM:
            // return {...state,count:[...state.count.filter((x)=>{
            //     return x.id !== action.payload.id
            // })]}
            case DELITEM:
                return state=state.filter((x)=>{
                    return x.id !== action.payload.id
                })
            case UPDATE:
                return [...state]
                     
            
            
        default:
            return state
    }
}