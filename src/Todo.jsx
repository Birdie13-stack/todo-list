import React, { useState } from "react";
import "./App.css";

const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [completed, setCompleted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setInputValue("");

    if (inputValue.trim()) {
      addTodo(inputValue);

      setInputValue("");
    }
  };

  const toggleCompletion = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTodo = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };
  

  const addTodo = (text) => {
    setTasks([...tasks, { id: Date.now(), text, completed: false }]);
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>To-Do List</h1>
      </header>

      <section className="todo-section">
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
                <section> <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleCompletion(task.id)}
              />
              <label style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                {task.text}
              </label></section>
             
              <button className= "delete-btn"onClick={() => deleteTodo(task.id)}>Delete</button>

            </li>
          ))}
        </ul>
      </section>

      <section className="add-todo-section">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="newTodo"
            value={inputValue}
            placeholder="Add a new task..."
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button type="submit">Add</button>
        </form>
      </section>
    </div>
  );
};

export default Todo;
