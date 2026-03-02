import React, { useState, useEffect } from "react";

function App() {

    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState("");
    const [completed, setCompleted] = useState(false);

    const API_URL = "http://localhost:8081/todos";

    // ✅ Load todos on page load
    useEffect(() => {
        fetch(API_URL)
            .then(res => res.json())
            .then(data => setTodos(data))
            .catch(err => console.error("Error loading todos:", err));
    }, []);

    // ✅ Add Todo
    const addTodo = () => {
        if (!input.trim()) return;

        fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                title: input,
                completed: completed
            })
        })
            .then(res => res.json())
            .then(newTodo => {
                setTodos([...todos, newTodo]);
                setInput("");
                setCompleted(false);
            })
            .catch(err => console.error("Error adding todo:", err));
    };

    // ✅ Delete Todo
    const deleteTodo = (id) => {
        fetch(`${API_URL}/${id}`, {
            method: "DELETE"
        })
            .then(() => {
                setTodos(todos.filter(todo => todo.id !== id));
            })
            .catch(err => console.error("Error deleting todo:", err));
    };

    // ✅ Toggle Completed
    const toggleCompleted = (todo) => {
        fetch(`${API_URL}/${todo.id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                title: todo.title,
                completed: !todo.completed
            })
        })
            .then(res => res.json())
            .then(updatedTodo => {
                setTodos(
                    todos.map(t =>
                        t.id === updatedTodo.id ? updatedTodo : t
                    )
                );
            })
            .catch(err => console.error("Error updating todo:", err));
    };

    return (
        <div style={{ textAlign: "center", marginTop: "40px" }}>
            <h2>Todo App</h2>

            {/* Input Section */}
            <div>
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Enter task..."
                />

                <label style={{ marginLeft: "10px" }}>
                    <input
                        type="checkbox"
                        checked={completed}
                        onChange={(e) => setCompleted(e.target.checked)}
                    />
                    Completed
                </label>

                <button onClick={addTodo} style={{ marginLeft: "10px" }}>
                    Add
                </button>
            </div>

            {/* Todo List */}
            <ul style={{ marginTop: "20px", listStyle: "none" }}>
                {todos.map(todo => (
                    <li key={todo.id} style={{ marginBottom: "10px" }}>
            <span
                onClick={() => toggleCompleted(todo)}
                style={{
                    textDecoration: todo.completed ? "line-through" : "none",
                    cursor: "pointer",
                    marginRight: "10px"
                }}
            >
              {todo.title}
            </span>

                        <button onClick={() => deleteTodo(todo.id)}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>

        </div>
    );
}

export default App;