import {reducer} from "./cart/reducer"
import { itemreducer,selectreducer } from "./items/reducer"
import { combineReducers,applyMiddleware,compose } from "redux"
// const rootreducer=combineReducers({cart:reducer,items:itemreducer,single:selectreducer})
import {createStore} from "redux"
import thunk from 'redux-thunk'
const rootreducer=combineReducers({cart:reducer,items:itemreducer,single:selectreducer})
// export const store=createStore(rootreducer,compose(applyMiddleware(thunk),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))
export const store=createStore(rootreducer,applyMiddleware(thunk))

// console.log(store.getState())