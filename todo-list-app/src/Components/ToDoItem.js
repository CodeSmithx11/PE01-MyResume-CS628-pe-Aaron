import React from "react";

function ToDoItem({ task, deleteTask }) {
  return (
    <li>
      {task}
      <button onClick={deleteTask} style={{ marginLeft: "10px", backgroundColor: "red", color: "white" }}>
        Delete
      </button>
    </li>
  );
}

export default ToDoItem;
