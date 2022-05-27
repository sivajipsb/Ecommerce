import {reducer} from "./cart/reducer"
import { itemreducer,selectreducer } from "./items/reducer"
import { combineReducers } from "redux"
const rootreducer=combineReducers({cart:reducer,items:itemreducer,single:selectreducer})
import {createStore} from "redux"
export const store=createStore(rootreducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

console.log(store.getState())