import React, { useState } from "react";
import "./App.css"; // Ensure styling for spacing and layout

function App() {
  const [taskInput, setTaskInput] = useState(""); // State for textbox
  const [tasks, setTasks] = useState(["Task1", "Task2", "Task3"]); // Default tasks

  // Function to add new task
  const addTask = () => {
    if (taskInput.trim() !== "") {
      setTasks([...tasks, taskInput]); // Add new task
      setTaskInput(""); // Clear input field
    }
  };

  // Function to delete a task
  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="wrapper">
      <div className="container">
        <h1>ToDo List App</h1>
        <input
          type="text"
          placeholder="Enter task description"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)} // Update state as user types
        />
        <button className="add-btn" onClick={addTask}>Add Task</button>

        <div className="task-list">
          {tasks.map((task, index) => (
            <div key={index} className="task-item">
              <span>{task}</span>
              <button className="delete-btn" onClick={() => deleteTask(index)}>Delete</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
