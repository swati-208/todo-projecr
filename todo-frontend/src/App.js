import React, { useState } from "react";

function App() {

  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim() === "") return;

    const newTodo = {
      id: Date.now(),
      title: input
    };

    setTodos([...todos, newTodo]);
    setInput("");
  };

  return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h2>Todo App</h2>

        <input
            type="text"
            placeholder="Enter task..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
        />

        <button onClick={addTodo} style={{ marginLeft: "10px" }}>
          Add
        </button>

        <ul>
          {todos.map((todo) => (
              <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>

      </div>
  );
}

export default App;