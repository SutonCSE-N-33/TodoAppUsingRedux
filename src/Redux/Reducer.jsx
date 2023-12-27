import { getTodosFailed, getTodosRequest, getTodosSuccess } from "./ActionType"

const initialState = {
    isLoading: false,
    todos : [],
    error: null
}

const totoReducer = (state = initialState, action) =>{
    switch(action.type){
        case getTodosRequest:
            return {
                ...state,
                isLoading: true,
                todos: [],
                error: null
            }
        case getTodosSuccess:
            return {
                isLoading: false,
                todos: action.payload,
                error: null
            }
        case getTodosFailed:
            return {
                isLoading: false,
                todos: [],
                error: action.payload
            }
        default:
            return state;
    }

}

export default totoReducer;