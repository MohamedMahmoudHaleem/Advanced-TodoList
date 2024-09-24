import { useState } from "react";

export default function TodoInput({ todos, setTodos, setflag ,task,setTask }) {
  

  function handleTodos() {
    if (!task) return;
    setTodos([...todos, task]);
    setTask("");
    setflag(true);
  }
  function handleTodoEnter(e) {
    e.key === "Enter" ? handleTodos() : "";
  }
  console.log(task);
  return (
    <header>
      <input
        placeholder="Enter todo..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyDown={(e) => handleTodoEnter(e)}
      />
      <button onClick={handleTodos}>Add</button>
    </header>
  );
}
