import { useState } from "react";
import "./App.css";
import { AddToDo } from "./componets/AddToDo";
import { TodoList } from "./componets/TodoList";

function App() {
  const [todos, setTodos] = useState([

    { id: 1, todo: "Wash dish", done: false },
    { id: 2, todo: "do Laundry", done: false },
    { id: 3, todo: "Take shower", done: false },
  ]);
 
  return (
    <div className="App">
      <h1>Todo List</h1>
      <AddToDo setTodos={setTodos}/>
      <TodoList todos={todos} setTodos={setTodos} />
      
    </div>
  );
}

export default App;
