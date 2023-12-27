import axios from "axios";
import { getTodosFailed, getTodosRequest, getTodosSuccess } from "./ActionType"

export const getAllTodos = () => async (dispatch) =>{
   dispatch({type: getTodosRequest});

   try{
      const res = await axios.get('https://jsonplaceholder.typicode.com/todos');
      dispatch({
        type: getTodosSuccess,
         payload:res.data
        })
   }catch(error){
        dispatch({
            type: getTodosFailed,
            payload: error.message
        })
   }
}