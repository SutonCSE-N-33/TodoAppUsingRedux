import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTodos } from '../Redux/Action';

const ToDo = () => {
    const {isLoading,todos,error} = useSelector(state => state)
    
    const dispatch = useDispatch()
    const getTodos = () =>{
        dispatch(getAllTodos())
    }
    useEffect(()=>{
        getTodos()
    },[])
    return (
        <div>
            <h1>Hello, ToDo</h1>
            
           <section>
           {
            todos && todos.map((todo) => (
                <article key={todo.id}>
                         <h3>{todo.title}</h3>
                </article>
            ))
           }
           </section>

        </div>
    );
};

export default ToDo;