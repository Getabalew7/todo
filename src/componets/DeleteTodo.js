import React from 'react'

export const DeleteTodo = ({todo,setTodos}) => {
    const handleDeleteTodo=()=>{
        console.log(todo.id);
        const confirmed = window.confirm('Are you sure you want to delete '+ todo.todo+' todo?');
        if (confirmed) {
            setTodos((prevTodos)=>{
                return prevTodos.filter((t)=>t.id!==todo.id);
            })
        }
    }
  return (
    <span 
    onClick={handleDeleteTodo}  
    role="button"
            style={{
                color:"red",
                fontWeight:'bold',
                marginLeft:"10",
                cursor:"pointer"
            }}
            >X</span>
  )
}
