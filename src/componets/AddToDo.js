import React, { useRef } from 'react'

export const AddToDo = ({ setTodos }) => {
    const todoRef= useRef();
    const handleAddToDo = (e) => {
        e.preventDefault();
        const todo = {
            id:4,
            todo: e.target.elements.todo.value,
            done: false
        };
        setTodos((preTodos)=>{
          
            todo.id = preTodos.length + 1;
            return preTodos.concat(todo);
        })
        todoRef.current.value="";

    }
    return (
        <div>
            <form onSubmit={handleAddToDo}>
                <input type="text"
                    name="todo"
                    ref={todoRef}
                    placeholder='add todos here' />
                <button type='submit'>Add Todo</button>
            </form>
        </div>
    )
}
