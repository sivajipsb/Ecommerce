
import { ADDCART,DELETECART,DELITEM,UPDATE,SETCART,LOGIN,SIGNUP } from "./action";


const count= {count: [],sivaji:[], users:[],
    user:null};
export const reducer = (state=count,action)=>{
   
    
    switch(action.type)
    {
       
        case ADDCART:
                 
                
            return {
               
                ...state,count:[...state.count,action.payload]

                }
      
                case DELETECART:
                   
                   
               
                return {...state,sivaji:[...state.sivaji.filter((index)=>index!==action.payload)]
                }
            
                case DELITEM:
                
                return {...state,sivaji:[...state.sivaji.filter((x)=>x.id!==action.payload.id)]}
           
                case UPDATE:
                    return {...state,sivaji:[...state.sivaji]}
                     
            case SETCART:
                
                return {
                   
                    ...state,sivaji:action.payload
                 
    
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

