import React from 'react'
import { DeleteTodo } from './DeleteTodo';

export const TodoList = ({ todos,setTodos }) => {

    const handleToggleTodo=(todo)=>{
        const updatedTodos= todos.map(t=>t.id===todo.id?{...t,done:!t.done}:t);
         console.log(updatedTodos)
        setTodos(updatedTodos);
    }
   
    return (
        <ul>
           {
            todos.map((todo)=>{
              return ( <li key={todo.id} onDoubleClick={()=>handleToggleTodo(todo)} style={{textDecoration:todo.done?"line-through":""}} >{todo.todo} <DeleteTodo todo={todo} setTodos={setTodos}/> </li>);
            })
           }
        </ul>
    )
}
