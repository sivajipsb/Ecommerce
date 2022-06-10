// import { Product } from "../components/product";
import { ADDCART,DELETECART,DELITEM,UPDATE,SETCART } from "./action";

// const count=[];
// export const reducer =(state=count,action)=>{
//     console.log(state,"changed",state.length)
    
//     switch(action.type)
//     {
//         case ADDCART:
                 
                
//             return [
//                 ...state,
//                 action.payload
//             ]
      
//                 case DELETECART:
                   
                   
//                  return [...state.filter((counts,index)=>index!==action.payload)]
                
//             //     case DELITEM:
//             // return {...state,count:[...state.count.filter((x)=>{
//             //     return x.id !== action.payload.id
//             // })]}
//             case DELITEM:
//                 return state=state.filter((x)=>{
//                     return x.id !== action.payload.id
//                 })
//             case UPDATE:
//                 return [...state]
                     
//             // case SETCART:
//             //     return [
//             //         // ...state,
//             //         action.payload
//             //     ]

            
//         default:
//             return state
//     }
// }
const count= {count: [],sivaji:[]};
export const reducer = (state=count,action)=>{
    // console.log(state,"coming data")
    // console.log(state.sivaji,"coming sivaji")
    // console.log(state.count,"cart cominng count")
    
    switch(action.type)
    {
        case ADDCART:
                 
                
            return {
                // ...state,
                // counts:action.payload
                ...state,count:[...state.count,action.payload]

                }
      
                case DELETECART:
                   
                   
                //  return {...state.filter((counts,index)=>index!==action.payload)}
                //  return {...state,count:[...state.count.filter((counts,index)=>index!==action.payload)]}
                return {...state,sivaji:[...state.sivaji.filter((index)=>index!==action.payload)]
                }
            //     case DELITEM:
            // return {...state,count:[...state.count.filter((x)=>{
            //     return x.id !== action.payload.id
            // })]}
            // case DELITEM:
            //     // return state=state.filter((x)=>{
            //     //     return x.id !== action.payload.id
            //     // })
            //     return {...state,count:[...state.count.filter((x)=>x.id!==action.payload.id)]}
                case DELITEM:
                // return state=state.filter((x)=>{
                //     return x.id !== action.payload.id
                // })
                return {...state,sivaji:[...state.sivaji.filter((x)=>x.id!==action.payload.id)]}
            // case UPDATE:
            //     return {...state,count:[...state.count]}
                case UPDATE:
                    return {...state,sivaji:[...state.sivaji]}
                     
            case SETCART:
                // return [
                //     // ...state,
                //     action.payload
                // ]
                return {
                    // ...state,
                    // counts:action.payload
                    ...state,sivaji:action.payload
                    // ...state,sivaji:[...state.count,action.payload]
    
                    }

            
        default:
            return state
    }
}

