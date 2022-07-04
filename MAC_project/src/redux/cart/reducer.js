
import { ADDCART,DELETECART,DELITEM,UPDATE,SETCART,LOGIN,SIGNUP } from "./action";


const count= {count: [],cart:[], users:[],
    user:null};
export const reducer = (state=count,action)=>{
   
    
    switch(action.type)
    {
       
        case ADDCART:
                 
                
            return {
               
                ...state,count:[...state.count,action.payload]

                }
      
                case DELETECART:
                   
                   
               
                return {...state,cart:[...state.cart.filter((index)=>index!==action.payload)]
                }
            
                case DELITEM:
                
                return {...state,cart:[...state.cart.filter((x)=>x.id!==action.payload.id)]}
           
                case UPDATE:
                    return {...state,cart:[...state.cart]}
                     
            case SETCART:
                
                return {
                   
                    ...state,cart:action.payload
                 
    
                    }
                    case LOGIN:
                        return {
                            ...state,
                            user:payload,
                            isLoggedIn: true
                        }
                      
            
                        case SIGNUP:
                            return { "users": payload};

            
        default:
            return state
    }
}

