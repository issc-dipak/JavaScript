import React, { useState } from "react";
import './TodoApp.css'; 

function TodoApp() {
  const [todos, setTodos] = useState([]);  
  const [input, setInput] = useState(''); 

  
  const handleAddTodo = (e) => {
    e.preventDefault();
    if (input.trim() !== "") {
      setTodos([...todos, input]);
      setInput('');
    }
  };

  
  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((todo, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="todo-app">
      <h1>ToDo List</h1>
      <form onSubmit={handleAddTodo}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new todo"
        />
        <button type="submit">Add</button>
      </form>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => handleDeleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
