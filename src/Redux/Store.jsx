import { applyMiddleware, createStore } from "redux"
import totoReducer from "./Reducer"
import { thunk } from "redux-thunk"


const store = createStore(
    totoReducer,
    applyMiddleware(thunk)
    )

export default store;